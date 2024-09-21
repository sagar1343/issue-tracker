import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssuesAction from "./IssuesAction";
import IssueTable, { columns, IssueQuery } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
}

async function IssuesPage({ searchParams }: Props) {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
  });

  return (
    <div className="space-y-8">
      <IssuesAction />
      <IssueTable issues={issues} searchParams={searchParams} />
    </div>
  );
}

export default IssuesPage;

export const dynamic = "force-dynamic";
