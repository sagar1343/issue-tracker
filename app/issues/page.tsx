import prisma from "@/prisma/client";
import Link from "next/link";
import IssuesBadge from "../components/IssuesBadge";

async function IssuesPage() {
  const issues = await prisma.issue.findMany();
  return (
    <div className="space-y-8">
      <Link href="issues/new" className="btn btn-primary">
        New Issue
      </Link>
      <table className="table table-md">
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
                <Link href={`/issues/${issue.id}`} className="link link-primary">
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
