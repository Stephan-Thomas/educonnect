import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Tutorcard from "../components/reuseable/Tutorcard";
import { fakeMessages } from "../data/fakemessages";

const Tutor = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />
        <section className="bg-white text-black w-[60%] inline-block p-5">
          <h1 className="text-3xl font-bold">Find a Tutor</h1>
          <article className="space-y-3">
            {fakeMessages.map((msg) => (
              <Tutorcard
                key={msg.id}
                sender={msg.sender}
                subject={msg.subject}
                message={msg.message}
                experience={msg.experience}
              />
            ))}
          </article>
        </section>
      </div>
    </>
  );
};

export default Tutor;
