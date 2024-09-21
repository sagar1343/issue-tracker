import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import IssuesAction from "./IssuesAction";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import Pagination from "./Pagination";

interface Props {
  searchParams: IssueQuery;
}

async function IssuesPage({ searchParams }: Props) {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where: { status } });

  return (
    <div className="flex flex-col space-y-8">
      <IssuesAction />
      <IssueTable issues={issues} searchParams={searchParams} />
      <div className="self-end">
        <Pagination
          itemCount={issueCount}
          pageSize={pageSize}
          currentPage={page}
        />
      </div>
    </div>
  );
}

export default IssuesPage;

export const dynamic = "force-dynamic";
