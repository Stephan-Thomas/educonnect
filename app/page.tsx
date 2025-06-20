import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black h-screen flex flex-col items-center gap-8 pt-20">
        <h1 className="text-5xl">Connect with Expert Tutors</h1>
        <p>
          EduConnect is an online platform that helps you find and connect with
          experienced tutors for personalised learning support
        </p>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white rounded-md border py-1 px-3 font-medium hover:cursor-pointer">
            Find a Tutor
          </button>
          <button className="rounded-md border border-gray-300 p-1 px-3 font-medium hover:cursor-pointer">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
