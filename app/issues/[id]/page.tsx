import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}
async function IssueDetailPage({
  params: { id },
}: Props): Promise<ReactElement> {
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-start gap-4">
      <IssueDetails issue={issue} />
      <div className="justify-self-start">
        <EditIssueButton issueId={parseInt(id)} />
      </div>
    </div>
  );
}

export default IssueDetailPage;
