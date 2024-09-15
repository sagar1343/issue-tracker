import React from "react";

export default function NewIssuePage() {
  return (
    <div className="max-w-xl flex flex-col space-y-3 items-start">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full"
      />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Description"
      />
      <button className="btn text-white btn-primary">Submit New Issue</button>
    </div>
  );
}
