"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  // Simple helper functions - no state needed
  const getAvatarUrl = (user) => {
    if (!user) return "";
    return user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}&background=3B82F6&color=fff`;
  };

  const getUserInitial = (user) => {
    return user?.name?.charAt(0).toUpperCase() || "U";
  };

  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-primary transition-colors duration-200 font-medium text-gray-700 hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="hover:text-primary transition-colors duration-200 font-medium text-gray-700 hover:text-primary">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/doctors" className="hover:text-primary transition-colors duration-200 font-medium text-gray-700 hover:text-primary">
          Doctors
        </Link>
      </li>
      {session && (
        <li>
          <Link href="/appointments/manage" className="hover:text-primary transition-colors duration-200 font-medium text-gray-700 hover:text-primary">
            My Appointments
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 border-b shadow-sm">
      
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-base-200 transition-colors">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-56 p-2 shadow-2xl bg-base-100 rounded-box border space-y-1"
          >
            {links}
            {/* Mobile auth links */}
            {!session && (
              <>
                <div className="divider my-1"></div>
                <li>
                  <Link href="/login" className="font-medium text-gray-700">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="font-medium text-primary">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent px-2 hover:scale-105 transition-transform duration-200"
        >
          CareBook
        </Link>
      </div>

      {/* CENTER MENU - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 text-[15px] font-medium">
          {links}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-3">
        {/* UNAUTHENTICATED USER - Desktop */}
        {!session && (
          <>
            <Link
              href="/login"
              className="btn btn-ghost btn-sm hidden sm:flex hover:bg-base-200 transition-colors font-medium text-gray-700"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary btn-sm px-6 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </>
        )}

        {/* LOGGED-IN USER */}
        {session && (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar placeholder hover:bg-base-200 transition-colors"
            >
              <div className="w-8 rounded-full bg-gradient-to-br from-primary to-blue-600 text-primary-content">
                {session.user?.image ? (
                  <Image
                    src={getAvatarUrl(session.user)}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-sm font-bold">{getUserInitial(session.user)}</span>
                )}
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu shadow-2xl bg-base-100 rounded-box w-64 border mt-4 p-0 space-y-1"
            >
              {/* User Header */}
              <li className="p-4 border-b bg-gradient-to-r from-primary/5 to-blue-100/30 rounded-t-box">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary/20">
                      {session.user?.image ? (
                        <Image
                          src={getAvatarUrl(session.user)}
                          alt="User Avatar"
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                          {getUserInitial(session.user)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{session.user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                  </div>
                </div>
              </li>

              {/* Menu Items */}
              <li className="p-2">
                <Link 
                  href="/appointments/manage" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors text-gray-700 font-medium"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  My Appointments
                </Link>
              </li>

              <li className="p-2">
                <Link 
                  href="/doctors" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors text-gray-700 font-medium"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Find Doctors
                </Link>
              </li>

              <div className="divider my-0"></div>

              <li className="p-2">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-error/10 text-error transition-colors w-full text-left font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                  </svg>
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