import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import Link from "next/link";
import IssuesBadge from "../components/IssuesBadge";
import IssuesAction from "./IssuesAction";

interface Props {
  searchParams: { status: Status };
}
async function IssuesPage({ searchParams }: Props) {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status: status },
  });

  return (
    <div className="space-y-8">
      <IssuesAction />
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
    </div>
  );
}

export default IssuesPage;

export const dynamic = "force-dynamic";
