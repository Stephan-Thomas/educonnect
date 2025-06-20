"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditProfileModal, {
  ProfileData,
} from "../components/reuseable/EditProfileModal";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [profile, setProfile] = useState<ProfileData>({
    name: "The Taliban",
    email: "thetaliban@terror.com",
    school: "Afganistan school of terrorism",
    location: "Afghanistan",
    skills: ["Bomb making", "Terrorism"],
    helpWith: ["Plane Hijacking"],
  });

  return (
    <>
      <Navbar />
      <div className="flex bg-white">
        <Sidebar />
        <section className="bg-white text-black w-[60%] inline-block p-5">
          <h1 className="text-3xl font-bold">Profile</h1>

          <article className="flex items-center justify-between p-5 w-full">
            <div className="flex gap-5">
              <span className="bg-blue-600 text-white font-semibold rounded-full h-20 w-20 text-2xl flex justify-center items-center">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <span>
                <h1 className="text-2xl">{profile.name}</h1>
                <p className="text-gray-500">{profile.email}</p>
              </span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white h-fit p-2 rounded-lg"
            >
              Edit Profile
            </button>
          </article>

          <hr className="border-gray-200 w-[90%] block m-auto" />

          <article className="w-full space-y-3 my-5">
            <h2 className="text-xl">Personal Information</h2>
            <table className="w-full text-gray-500">
              <tbody>
                <tr>
                  <td>FULL NAME</td>
                  <td className="py-3">{profile.name}</td>
                </tr>
                <tr>
                  <td>EMAIL</td>
                  <td className="py-3">{profile.email}</td>
                </tr>
                <tr>
                  <td>SCHOOL</td>
                  <td className="py-3">{profile.school}</td>
                </tr>
                <tr>
                  <td>LOCATION</td>
                  <td className="py-3">{profile.location}</td>
                </tr>
              </tbody>
            </table>
          </article>

          <hr className="border-gray-200 w-[90%] block m-auto" />

          <article className="flex justify-between my-5">
            <div className="p-3">
              <h2 className="text-xl">Your Skills</h2>
              <span className="flex gap-3 flex-wrap">
                {profile.skills.map((skill, i) => (
                  <p
                    key={i}
                    className="bg-gray-100 text-gray-500 w-fit p-1 rounded-lg"
                  >
                    {skill}
                  </p>
                ))}
              </span>
            </div>
            <div className="p-3">
              <h2 className="text-xl">Subjects You Need Help With</h2>
              <span className="flex gap-3 flex-wrap">
                {profile.helpWith.map((subject, i) => (
                  <p
                    key={i}
                    className="bg-gray-100 text-gray-500 w-fit p-1 rounded-lg"
                  >
                    {subject}
                  </p>
                ))}
              </span>
            </div>
          </article>

          <hr className="border-gray-200 w-[90%] block m-auto" />

          <button className="block m-auto border border-gray-200 text-black p-2 rounded-lg my-5 hover:cursor-pointer">
            Log Out
          </button>
        </section>
      </div>

      {isModalOpen && (
        <EditProfileModal
          profile={profile}
          onClose={() => setIsModalOpen(false)}
          onSave={setProfile}
        />
      )}
    </>
  );
}
