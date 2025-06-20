import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white py-5 border border-gray-100">
      <p className="text-black ml-10">
        EDU<span className="text-blue-600">Connect</span>
      </p>
      <div className="flex justify-between w-[10%] text-blue-600 mr-10">
        <button className="hover:bg-blue-600 hover:text-white hover:cursor-pointer rounded p-1">
          Log in
        </button>
        <button className="hover:bg-blue-600 hover:text-white hover:cursor-pointer rounded p-1">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
