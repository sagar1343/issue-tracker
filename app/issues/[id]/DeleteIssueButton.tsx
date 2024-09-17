"use client";

import Button from "@/app/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { MdDelete } from "react-icons/md";

async function DeleteIssueButton({ issueId }: { issueId: number }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <>
      <div onClick={() => modalRef.current?.showModal()}>
        <Button className="bg-red-500 hover:bg-red-600">
          <MdDelete />
          Delete Issue
        </Button>
      </div>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Deletion</h3>
          <p className="py-3">
            Are you sure want to delete this issue? this action cannot be
            change.
          </p>
          <div className="modal-action justify-start mt-2">
            <form method="dialog" className="flex space-x-3">
              <Button className="py-1 bg-gray-500 hover:bg-gray-600">
                Close
              </Button>
              <Button
                onClick={async () => {
                  await axios.delete("/api/issues/  " + issueId);
                  router.push("/issues");
                }}
                className="py-1 bg-red-500 hover:bg-red-600"
              >
                Confirm
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default DeleteIssueButton;
