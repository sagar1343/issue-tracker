import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaCaretDown, FaCaretUp } from "react-icons/fa";
import IssuesBadge from "../../components/IssuesBadge";

enum Order {
  Ascending = "asc",
  Descending = "desc",
}

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  order: Order;
  page: string;
}

interface Props {
  issues: Issue[];
  searchParams: IssueQuery;
}

function IssueTable({ issues, searchParams }: Props) {
  return (
    <table className="table table-md border">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.value} className={column.className}>
              <div className="flex items-center gap-1">
                {column.label}
                <div className="flex flex-col -gap-2=">
                  <Link
                    href={{
                      query: {
                        ...searchParams,
                        orderBy: column.value,
                        order: Order.Ascending,
                      },
                    }}
                  >
                    <FaAngleUp />
                  </Link>
                  <Link
                    href={{
                      query: {
                        ...searchParams,
                        orderBy: column.value,
                        order: Order.Descending,
                      },
                    }}
                  >
                    <FaAngleDown />
                  </Link>
                </div>
              </div>
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

const columns: {
  label: string;
  value: keyof Issue;
  className?: string;
}[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status" },
  { label: "Created", value: "createdAt", className: "hidden md:block" },
];

export const columnNames = columns.map((column) => column.value);
