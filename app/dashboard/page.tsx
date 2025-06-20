import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { fakeMessages } from "../data/fakemessages";
import Dashboardcard from "../components/reuseable/Dashboardcard";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />
        <section className="bg-white text-black w-[60%] inline-block p-5">
          <h1 className="text-3xl font-bold">Welcome Taliban!</h1>
          {/* <input type="radio" name="" id="" /> */}
          <article className="flex justify-between mt-5">
            <div className="border border-gray-100 rounded-lg p-3">
              <h2 className="font-semibold text-xl">Your Skills</h2>
              <span className="flex gap-3">
                <p className="bg-gray-100 w-fit p-1 rounded-lg">Bomb making</p>
                <p className="bg-gray-100 w-fit p-1 rounded-lg">Terrorism</p>
              </span>
            </div>
            <div className="border border-gray-100 rounded-lg p-3">
              <h2 className="font-semibold text-xl">
                Subjects You Need Help With
              </h2>
              <span>
                <p className="bg-gray-100 w-fit p-1 rounded-lg">
                  Plane Hijacking
                </p>
              </span>
            </div>
          </article>
          <article className="mt-5 border border-gray-100 rounded-lg p-3 w-full space-y-2">
            <h2 className="font-semibold text-xl">Find a Tutor</h2>
            <p>
              Browse through avaliable tutors and find a peer who can help you
              wit your studies.
            </p>
            <Link
              href="/tutor"
              className="bg-blue-600 text-white p-2 text-sm rounded-lg"
            >
              Browse Tutors
            </Link>
          </article>
          <article className="mt-5 border border-gray-100 rounded-lg p-3 space-y-2">
            <h2 className="font-semibold text-xl">Messages</h2>
            <table className="w-full border-separate">
              {fakeMessages.map((msg) => (
                <Dashboardcard
                  key={msg.id}
                  sender={msg.sender}
                  subject={msg.subject}
                  message={msg.message}
                  time={msg.time}
                />
              ))}
            </table>
          </article>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
