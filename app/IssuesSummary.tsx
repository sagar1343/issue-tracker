import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  open: number;
  close: number;
  inProgress: number;
}

function IssuesSummary({ open, close, inProgress }: Props) {
  const containers: { label: string; count: number; status: Status }[] = [
    { label: "Open Issues", count: open, status: "OPEN" },
    { label: "Closed Issues", count: close, status: "CLOSED" },
    { label: "In Progress Issues", count: inProgress, status: "IN_PROGRESS" },
  ];
  return (
    <ul className="flex gap-4 text-sm">
      {containers.map((container) => (
        <li
          key={container.label}
          className="border shadow-sm rounded-md py-3 px-5"
        >
          <div>
            <Link href={`/issues/list?status=${container.status}`}>
              {container.label}
            </Link>
            <h3 className="font-semibold text-2xl">{container.count}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default IssuesSummary;
