"use client";

import { Status } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

function FilterIssueStatus() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(status: string): void {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (searchParams.get("orderBy")) {
      params.append("orderBy", searchParams.get("orderBy")!);
      params.append("order", searchParams.get("order")!);
    }
    const query = params.size ? "?" + params.toString() : "";
    router.push("/issues/list" + query);
  }

  return (
    <select
      onChange={(event) => handleChange(event.target.value)}
      className="select min-h-4 h-auto text-zinc-500 select-bordered focus:outline-none rounded-md"
      defaultValue={searchParams.get("status") || ""}
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
