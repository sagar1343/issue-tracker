import prisma from "@/prisma/client";
import IssuesSummary from "./IssuesSummary";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const close = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <div>
      <IssuesSummary open={open} close={close} inProgress={inProgress} />
    </div>
  );
}
