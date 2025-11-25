"use client";

import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

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
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
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
                d="M4 6h16M4 12h16M4 18h16"
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

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          CareBook
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        {/* IF USER NOT LOGGED IN */}
        {!session && (
          <>
            <Link href="/login" className="btn btn-outline btn-sm mr-2">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}

        {/* IF USER LOGGED IN */}
        {session && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-primary btn-sm">
              {session.user?.name?.split(" ")[0] || "User"}
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="px-3 py-2 border-b text-sm">
                <p className="font-semibold">{session.user?.name}</p>
                <p className="text-xs opacity-60">{session.user?.email}</p>
              </li>

              <li>
                <Link href="/profile">Profile</Link>
              </li>

              <li>
                <Link href="/add-appointment">Add Appointment</Link>
              </li>

              <li>
                <Link href="/manage-appointments">Manage Appointments</Link>
              </li>

              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-error"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
