import { Issue } from "@prisma/client";
import Link from "next/link";
import IssuesBadge from "../../components/IssuesBadge";

function IssueTable({ issues }: { issues: Issue[] }) {
  return (
    <table className="table table-md border">
      <thead>
        <tr>
          <th>Issue</th>
          <th>Status</th>
          <th className="hidden md:block">Created At</th>
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
