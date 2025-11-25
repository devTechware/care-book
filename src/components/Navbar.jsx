import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about-us">About Us</Link>
      </li>

      <li>
        <Link href="/doctors">Doctors</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-bold text-primary">
          CareBook
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn btn-outline btn-sm mr-2">
          Login
        </Link>
        <Link href="/register" className="btn btn-primary btn-sm">
          Register
        </Link>
      </div>
    </div>
  );
}
