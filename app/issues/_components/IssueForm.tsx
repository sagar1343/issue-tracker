"use client";

import Button from "@/app/components/Button";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

type IssueFormData = z.infer<typeof issueSchema>;

export default function IssueForm({ issue }: { issue?: Issue }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data: IssueFormData) => {
    try {
      setSubmitting(true);
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues/", data);
      router.push("/issues/list");
      router.refresh();
    } catch (err) {
      setSubmitting(false);
      setError("Failed to submit the issue. Please try again.");
    }
  };

  return (
    <div className="max-w-xl space-y-4">
      {error && (
        <div
          role="alert"
          className="alert alert-warning flex items-center space-x-2 p-4 border border-yellow-300 bg-yellow-100 text-yellow-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 items-start"
      >
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full"
          defaultValue={issue?.title}
          {...register("title")}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              {...field}
            />
          )}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
        <Button disabled={isSubmitting} type="submit">
          {issue ? "Update Issue" : "Submit New Issue"}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}
