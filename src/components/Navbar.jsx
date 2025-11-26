"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-primary transition">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="hover:text-primary transition">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/doctors" className="hover:text-primary transition">
          Doctors
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b shadow-sm">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              className="h-6 w-6"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-3 shadow-lg bg-base-100 rounded-xl border"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          CareBook
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-[15px]">{links}</ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-3">
        {/* UNAUTHENTICATED USER */}
        {!session && (
          <>
            <Link
              href="/login"
              className="btn btn-outline btn-sm px-4 rounded-full"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary btn-sm px-4 rounded-full"
            >
              Register
            </Link>
          </>
        )}

        {/* LOGGED-IN USER */}
        {session && (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="avatar">
                <div className="w-9 rounded-full ring ring-primary/40 ring-offset-base-100 ring-offset-2">
                  <Image
                    src={
                      session.user?.image ||
                      "https://ui-avatars.com/api/?name=" + session.user?.name
                    }
                    alt="User Avatar"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <span className="font-medium hidden md:block">
                {session.user?.name?.split(" ")[0]}
              </span>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu shadow-xl bg-base-100 rounded-xl w-56 border p-2"
            >
              {/* User info box */}
              <li className="p-3 hover:bg-transparent cursor-default border-b">
                <div className="flex flex-col">
                  <p className="font-semibold">{session.user?.name}</p>
                  <p className="text-xs opacity-60">{session.user?.email}</p>
                </div>
              </li>

              {/* Appointments */}
              <li>
                <Link href="/appointments/manage" className="font-medium">
                  Manage Appointments
                </Link>
              </li>

              {/* Logout */}
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-error font-medium"
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
