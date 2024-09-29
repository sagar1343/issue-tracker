"use client";

import { signOut } from "next-auth/react";

const SignOutPage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="card bg-neutral text-neutral-content h-full w-full">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Confirm Sign Out</h2>
          <p>Are you sure you want to sign out ?</p>
          <div className="card-actions">
            <button
              onClick={() =>
                signOut({ callbackUrl: process.env.ROOT_HOME || "/" })
              }
              className="btn btn-primary"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOutPage;
