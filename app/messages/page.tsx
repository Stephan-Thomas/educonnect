import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Messagecard from "../components/reuseable/Messagecard";
import { fakeMessages } from "../data/fakemessages";

const Messages = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />
        <section className="bg-white text-black w-[60%] inline-block p-5">
          <h1 className="text-3xl font-bold">Messages</h1>
          <section className="space-y-3">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search messages"
              className="border border-gray-100 rounded-lg placeholder:text-lg outline-none p-3 w-full"
            />
            <article className="space-y-3">
              {fakeMessages.map((msg) => (
                <Messagecard
                  key={msg.id}
                  sender={msg.sender}
                  message={msg.message}
                  time={msg.time}
                />
              ))}
            </article>
          </section>
        </section>
      </div>
    </>
  );
};

export default Messages;
