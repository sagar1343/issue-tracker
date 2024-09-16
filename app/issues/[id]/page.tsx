import IssuesBadge from "@/app/components/IssuesBadge";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}
async function IssueDetailPage({
  params: { id },
}: Props): Promise<ReactElement> {
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold">{issue.title}</h1>
      <div className="flex space-x-3">
        <IssuesBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <div className="card border-t-2 border-b-2 pb-3 prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </div>
    </div>
  );
}

export default IssueDetailPage;
