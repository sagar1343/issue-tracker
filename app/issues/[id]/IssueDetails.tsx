import IssuesBadge from "@/app/components/IssuesBadge";
import { Issue } from "@prisma/client";
import ReactMarkdown from "react-markdown";

function IssueDetails({ issue }: { issue: Issue }) {
  return (
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
  );
}

export default IssueDetails;
