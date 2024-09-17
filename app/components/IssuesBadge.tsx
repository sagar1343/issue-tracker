import React, { ReactElement } from "react";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: string }> = {
  OPEN: { label: "Open", color: "text-red-600 bg-red-100" },
  IN_PROGRESS: { label: "In Progress", color: "text-blue-600 bg-blue-50" },
  CLOSE: { label: "Close", color: "text-green-600 bg-green-50" },
};

function IssuesBadge({ status }: Props): ReactElement {
  const { label, color } = statusMap[status];
  return (
    <div
      className={"inline px-3 py-1 rounded-full font-semibold text-xs " + color}
    >
      {label}
    </div>
  );
}

export default IssuesBadge;
