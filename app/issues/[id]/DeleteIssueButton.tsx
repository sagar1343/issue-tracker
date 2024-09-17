import Button from "@/app/components/Button";
import { MdDelete } from "react-icons/md";

function DeleteIssueButton() {
  return (
    <Button className="bg-red-500">
      <MdDelete />
      Delete Issue
    </Button>
  );
}

export default DeleteIssueButton;
