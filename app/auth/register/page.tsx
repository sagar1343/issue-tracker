"use client";

import Image from "next/image";
import Link from "next/link";
import bugBanner from "../../../public/BugBanner.jpg";
import GoogleSignInButton from "../GoogleSignInButton";

const RegisterPage = () => {
  return (
    <div className="h-custom hero flex flex-col md:flex-row md:items-center md:justify-around">
      <div className="md:basis-1/2">
        <Image src={bugBanner} alt="BugBanner" />
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
        <form className="card-body text-neutral">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label>
              <span className="label-text">Already have an account?</span>{" "}
              <Link
                href="/auth/signin"
                className="link link-primary underline link-hover"
              >
                Sign in
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
            <div className="divider label-text">or</div>
            <GoogleSignInButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
