import prisma from "@/prisma/client";
import IssueForm from "../../components/IssueForm";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}
async function EditIssuePage({ params: { id } }: Props) {
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  if (!issue) notFound();
  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
}

export default EditIssuePage;
