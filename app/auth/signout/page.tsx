"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import bugBanner from "../../../public/BugBanner.jpg";
import Link from "next/link";

const SignOutPage = () => {
  return (
    <div className="w-full h-custom flex justify-center items-center">
      <div className="card lg:card-side gap-2 md:items-center">
        <div className="basis-2/3">
          <Image
            src={bugBanner}
            alt="BugBanner"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="card-body justify-center items-center text-center">
          <h2 className="card-title text-3xl font-bold mb-4">Sign Out</h2>
          <p className="mb-4 text-lg text-gray-700">
            Are you sure you want to sign out? You will need to log in again to
            access your account.
          </p>

          <div className="card-actions">
            <button
              onClick={() =>
                signOut({
                  callbackUrl: process.env.NEXT_PUBLIC_ROOT_HOME || "/",
                })
              }
              className="btn btn-primary mr-2"
            >
              Sign Out
            </button>
            <Link href="/" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOutPage;
