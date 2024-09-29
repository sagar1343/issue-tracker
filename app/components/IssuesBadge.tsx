import React, { ReactElement } from "react";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: string }> = {
  OPEN: { label: "Open", color: "badge badge-error" },
  IN_PROGRESS: { label: "In Progress", color: "badge badge-primary" },
  CLOSED: { label: "Closed", color: "badge badge-accent" },
};

function IssuesBadge({ status }: Props): ReactElement {
  const { label, color } = statusMap[status];
  return (
    <div className={"whitespace-nowrap rounded-full " + color}>{label}</div>
  );
}

export default IssuesBadge;
