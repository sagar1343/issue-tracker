"use client";

import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AssigneeSelect() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <div className="skeleton h-10" />;
  if (error) return null;

  return (
    <select
      defaultValue="suggestions"
      className="select focus:outline-offset-0 focus:outline-indigo-600 border-2 rounded-md text-indigo-600 border-indigo-600 w-full max-w-xs"
    >
      <option disabled value="suggestions">
        Assignee...
      </option>
      {users?.map((user) => (
        <option key={user.id} value={user.id}>
          {user.email}
        </option>
      ))}
    </select>
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
