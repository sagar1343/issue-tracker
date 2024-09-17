import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import DeleteIssueButton from "./DeleteIssueButton";
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
    <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
      <div className="md:col-span-5">
        <IssueDetails issue={issue} />
      </div>
      <div className="md:col-span-2 space-y-3">
        <EditIssueButton issueId={parseInt(id)} />
        <DeleteIssueButton />
      </div>
    </div>
  );
}

export default IssueDetailPage;
