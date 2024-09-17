"use client";

import Button from "@/app/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";

async function DeleteIssueButton({ issueId }: { issueId: number }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [error, setError] = useState(false);

  const deleteIssue = async () => {
    try {
      await axios.delete("/api/issues/" + issueId);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };

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
                onClick={deleteIssue}
                className="py-1 bg-red-500 hover:bg-red-600"
              >
                Confirm
              </Button>
            </form>
          </div>
        </div>
      </dialog>
      {error && (
        <div className="toast toast-end">
          <div className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="text-indigo-500 h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>This issue could not be deleted.</span>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteIssueButton;
