"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="navbar border-b bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <FaBug color="black" />
        </Link>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-black"
                    : "text-zinc-500 hover:text-zinc-700"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end px-4 ">
        <AuthStatus />
      </div>
    </nav>
  );
}

function AuthStatus() {
  const { status, data: session } = useSession();
  return (
    <>
      {status == "loading" && <span className="skeleton h-4 w-12" />}
      {status === "unauthenticated" && (
        <Link
          className="font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer"
          href="api/auth/signin"
        >
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src={session.user?.image!}
                width={25}
                height={25}
                alt="user-image"
                referrerPolicy="no-referrer"
                fetchPriority="high"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            <li className="dropdown-label">
              <Link className="hover:bg-inherit hover:cursor-default" href="">
                {session.user?.email}
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-indigo-600 hover:text-white"
                href="api/auth/signout"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
