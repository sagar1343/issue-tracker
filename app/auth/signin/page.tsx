"use client";

import Image from "next/image";
import bugBanner from "../../../public/BugBanner.jpg";

const SignInPage = () => {
  return (
    <div className="h-custom hero flex flex-col md:flex-row md:items-center md:justify-around">
      <div className="md:basis-1/2">
        <Image src={bugBanner} alt="BugBanner" />
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot your password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
