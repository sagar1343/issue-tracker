import React, { ReactElement } from "react";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: string }> = {
  OPEN: { label: "Open", color: "badge-primary" },
  IN_PROGRESS: { label: "In Progress", color: "badge-secondary" },
  CLOSE: { label: "Close", color: "badge-accent" },
};
function IssuesBadge({ status }: Props): ReactElement {
  const { label, color } = statusMap[status];
  return <div className={"badge rounded-sm " + color}>{label}</div>;
}

export default IssuesBadge;
