import { FaSort } from "react-icons/fa";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import IssuesBadge from "../../components/IssuesBadge";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
}

interface Props {
  issues: Issue[];
  searchParams: IssueQuery;
}

export const columns: {
  label: string;
  value: keyof Issue;
  className?: string;
}[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status" },
  { label: "Created", value: "createdAt", className: "hidden md:block" },
];

function IssueTable({ issues, searchParams }: Props) {
  return (
    <table className="table table-md border">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.value} className={column.className}>
              <Link
                href={{ query: { ...searchParams, orderBy: column.value } }}
              >
                {column.label}
                <FaSort className="inline" />
              </Link>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {issues.map((issue) => (
          <tr key={issue.id} className="hover">
            <td>
              <Link
                href={`/issues/${issue.id}`}
                className="link text-indigo-600 "
              >
                {issue.title}
              </Link>
            </td>
            <td>
              <IssuesBadge status={issue.status} />
            </td>
            <td className="hidden md:block">
              {issue.createdAt.toDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IssueTable;
