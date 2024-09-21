"use client";

import { Status } from "@prisma/client";
import { useRouter } from "next/navigation";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSE" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

function FilterIssueStatus() {
  const router = useRouter();

  function handleChange(status: string) {
    const query = status ? "?status=" + status : "";
    router.push("/issues/" + query);
  }

  return (
    <select
      onChange={(event) => handleChange(event.target.value)}
      className="select text-zinc-500 select-bordered focus:outline-none rounded-md"
    >
      {statuses.map((status) => (
        <option key={status.label} value={status.value || ""}>
          {status.label}
        </option>
      ))}
    </select>
  );
}

export default FilterIssueStatus;
