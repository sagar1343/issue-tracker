import prisma from "@/prisma/client";
import Link from "next/link";
import IssuesBadge from "./components/IssuesBadge";
import Image from "next/image";

async function LatestIssues() {
  const latestIssues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignToUser: true,
    },
  });

  return (
    <div className="card card-compact card-bordered">
      <div className="card-body">
        <div className="card-title">Latest Issues</div>
        {latestIssues.map((issue, index) => (
          <div
            key={issue.id}
            className={`flex justify-between ${
              index === 0 ? "" : "border-t"
            } py-2`}
          >
            <div className="flex flex-col items-start gap-1">
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <IssuesBadge status={issue.status} />
            </div>
            {issue.assignToUser && (
              <div className="w-10">
                <Image
                  src={issue.assignToUser.image!}
                  alt="asignee-image"
                  height={25}
                  width={25}
                  referrerPolicy="no-referrer"
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestIssues;
