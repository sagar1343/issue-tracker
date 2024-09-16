"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function NewIssuePage() {
  return (
    <div className="max-w-xl flex flex-col space-y-3 items-start">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
      />
      <SimpleMDE
        className="textarea textarea-bordered w-full"
        placeholder="Description"
      />
      <button className="btn btn-primary">Submit New Issue</button>
    </div>
  );
}
