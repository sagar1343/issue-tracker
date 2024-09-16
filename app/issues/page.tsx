import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";

async function IssuesPage() {
  const issues = await prisma.issue.findMany();
  return (
    <div className="space-y-8">
      <Link href="issues/new" className="btn btn-primary">
        New Issue
      </Link>
      <table className="table">
        <thead>
          <th>Issue</th>
          <th>Status</th>
          <th className="hidden md:block">Created At</th>
        </thead>
        <tbody>
          {issues.map((issues) => (
            <tr>
              <td>{issues.title}</td>
              <td>{issues.status}</td>
              <td className="hidden md:block">
                {issues.createdAt.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IssuesPage;
