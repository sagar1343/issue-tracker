import { Status } from "@prisma/client";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Close", value: "CLOSE" },
  { label: "In Progess", value: "IN_PROGRESS" },
];

function FilterIssueStatus() {
  return (
    <select className="select text-zinc-500 select-bordered focus:outline-none rounded-md">
      {statuses.map((status) => (
        <option key={status.label} value={status.value}>
          {status.label}
        </option>
      ))}
    </select>
  );
}

export default FilterIssueStatus;
