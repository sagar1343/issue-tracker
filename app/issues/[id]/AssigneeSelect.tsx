"use client";

import toast, { Toaster } from "react-hot-toast";
import { Issue, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AssigneeSelect({ issue }: { issue: Issue }) {
  const { data: users, isLoading, error } = useUsers();

  const assignValue = async (userId: string) => {
    try {
      await axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: userId || null,
      });
    } catch (error) {
      toast.error("Changes could not be saved.");
    }
  };

  if (isLoading) return <div className="skeleton h-10" />;
  if (error) return null;

  return (
    <div>
      <select
        defaultValue={issue.assignedToUserId || ""}
        className="select focus:outline-offset-0 focus:outline-indigo-600 border-2 rounded-md text-indigo-600 border-indigo-600 w-full"
        onChange={(event) => assignValue(event.target.value)}
      >
        <option disabled value="suggestions">
          Assignee...
        </option>
        <option value="">Unassigned</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.email}
          </option>
        ))}
      </select>
      <Toaster />
    </div>
  );
}

const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });
};

export default AssigneeSelect;
