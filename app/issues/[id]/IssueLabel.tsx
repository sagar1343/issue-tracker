"use client";
import { Issue, Status } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";

function IssueLabel({ issue }: { issue: Issue }) {
  const statusMap: Record<Status, { label: string; value: Status }> = {
    OPEN: { label: "Open", value: "OPEN" },
    CLOSED: { label: "Closed", value: "CLOSED" },
    IN_PROGRESS: { label: "In Progress", value: "IN_PROGRESS" },
  };

  const assignValue = (value: Status) => {
    axios
      .patch("/api/issues/" + issue.id, { status: value })
      .then(() => toast.success("Status updated successfully."))
      .catch(() => toast.error("Changes could not be saved."));
  };

  return (
    <div>
      <select
        defaultValue={issue.status || ""}
        className="select text-zinc-500 select-bordered focus:outline-none rounded-md w-full"
        onChange={(event) => assignValue(event.target.value as Status)}
      >
        <option disabled value="">
          Status
        </option>
        {Object.values(statusMap).map((status) => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default IssueLabel;
