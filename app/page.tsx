import prisma from "@/prisma/client";
import { Metadata } from "next/types";
import IssuesChart from "./IssuesChart";
import IssuesSummary from "./IssuesSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const close = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col md:justify-between gap-10">
        <IssuesSummary open={open} close={close} inProgress={inProgress} />
        <IssuesChart open={open} close={close} inProgress={inProgress} />
      </div>
      <div>
        <LatestIssues />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker -Dashboard",
  description: "Tracking issue is a lot more easier now",
};
