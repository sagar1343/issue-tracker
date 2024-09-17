import Button from "@/app/components/Button";
import Link from "next/link";
import { GoPencil } from "react-icons/go";

function EditIssueButton({ issueId }: { issueId: number }) {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button>
        <GoPencil />
        Edit Issue
      </Button>
    </Link>
  );
}

export default EditIssueButton;
