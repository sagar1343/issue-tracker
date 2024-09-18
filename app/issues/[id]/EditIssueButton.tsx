import Button from "@/app/components/Button";
import Link from "next/link";
import { GoPencil } from "react-icons/go";

function EditIssueButton({ issueId }: { issueId: number }) {
  return (
    <Link href={"/issues/edit/" + issueId}>
      <Button>
        <GoPencil />
        Edit Issue
      </Button>
    </Link>
  );
}

export default EditIssueButton;
