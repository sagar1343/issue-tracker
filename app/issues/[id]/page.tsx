import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}

async function IssueDetailPage({ params }: Props): Promise<ReactElement> {
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
      <div className="md:col-span-5">
        <IssueDetails issue={issue} />
      </div>
      {session && (
        <div className="md:col-span-2 flex flex-col gap-4">
          <AssigneeSelect issue={issue} />
          <EditIssueButton issueId={parseInt(params.id)} />
          <DeleteIssueButton issueId={parseInt(params.id)} />
        </div>
      )}
    </div>
  );
}

export default IssueDetailPage;
