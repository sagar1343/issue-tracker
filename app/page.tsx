import prisma from "@/prisma/client";
import IssuesChart from "./IssuesChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const close = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <div>
      <IssuesChart open={open} close={close} inProgress={inProgress} />
    </div>
  );
}
