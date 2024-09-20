import Link from "next/link";
import Button from "../components/Button";
import FilterIssueStatus from "./FilterIssueStatus";

function IssuesAction() {
  return (
    <div className="flex justify-between">
      <FilterIssueStatus />
      <Link href="issues/new">
        <Button className="w-auto">New Issue</Button>
      </Link>
    </div>
  );
}

export default IssuesAction;
