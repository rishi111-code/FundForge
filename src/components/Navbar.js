import React, { useState } from "react";
import { Link } from "react-router-dom";
import JoinModal from "./JoinModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md fixed top-0 w-full z-50">
        <Link to="/" className="text-2xl font-bold text-indigo-600">FundForge</Link>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#stories" className="hover:text-indigo-600">Success</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        <div className="flex space-x-3">
          <Link
            to="/login"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>
          <button
            onClick={() => setOpenModal(true)}
            className="px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Join Us
          </button>
        </div>
      </nav>

      {openModal && <JoinModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Navbar;
