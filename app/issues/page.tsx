import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";
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
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </td>
              <td>
                <IssuesBadge status={issue.status} />
              </td>
              <td className="hidden md:block">
                {issue.createdAt.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssuesPage;
