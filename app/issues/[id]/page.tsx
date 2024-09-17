import Button from "@/app/components/Button";
import IssuesBadge from "@/app/components/IssuesBadge";
import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactElement } from "react";
import { GoPencil } from "react-icons/go";
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
    <div className="grid grid-cols-1 md:grid-cols-2  items-start gap-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">{issue.title}</h1>
        <div className="flex space-x-3">
          <IssuesBadge status={issue.status} />
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <div className="py-6 border pl-3 rounded-md prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </div>
      </div>
      <div className="justify-self-start">
        <Link href={`/issues/${id}/edit`}>
          <Button>
            <GoPencil />
            Edit Issue
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default IssueDetailPage;
