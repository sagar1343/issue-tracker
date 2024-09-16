import React, { ReactElement } from "react";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: string }> = {
  OPEN: { label: "Open", color: "badge-error" },
  IN_PROGRESS: { label: "In Progress", color: "badge-info" },
  CLOSE: { label: "Close", color: "badge-success" },
};
function IssuesBadge({ status }: Props): ReactElement {
  const { label, color } = statusMap[status];
  return <div className={"badge " + color}>{label}</div>;
}

export default IssuesBadge;
