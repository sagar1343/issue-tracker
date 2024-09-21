import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssuesAction from "./IssuesAction";
import IssueTable from "./IssueTable";

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
      <IssueTable issues={issues} />
    </div>
  );
}

export default IssuesPage;

export const dynamic = "force-dynamic";
