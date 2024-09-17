"use client";

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
      <div className="navbar-end"></div>
    </nav>
  );
}
