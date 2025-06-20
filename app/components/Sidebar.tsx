"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { TbDashboardFilled } from "react-icons/tb";
import { LuMessageSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="h-screen w-64 bg-white shadow-lg p-4 border border-gray-100">
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className={`flex font-medium w-fit py-1 px-8 ${
            pathname === "/dashboard"
              ? "text-blue-600 font-bold bg-blue-100 rounded"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <TbDashboardFilled /> Dashboard
        </Link>
        <Link
          href="/tutor"
          className={`flex font-medium w-fit py-1 px-8 ${
            pathname === "/tutor"
              ? "text-blue-600 font-bold bg-blue-100 rounded"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <CiSearch />
          Find a Tutor
        </Link>
        <Link
          href="/messages"
          className={`flex font-medium w-fit py-1 px-8 ${
            pathname === "/messages"
              ? "text-blue-600 font-bold bg-blue-100 rounded"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <LuMessageSquare /> Messages
        </Link>
        <Link
          href="/profile"
          className={`flex font-medium w-fit py-1 px-8 ${
            pathname === "/profile"
              ? "text-blue-600 font-bold bg-blue-100 rounded"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <CgProfile />
          Profile
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
