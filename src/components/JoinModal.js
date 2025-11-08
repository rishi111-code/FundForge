import React from "react";
import { useNavigate } from "react-router-dom";

const JoinModal = ({ setOpenModal }) => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    setOpenModal(false);
    navigate(`/register/${role}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center relative">
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Join FundForge</h2>
        <p className="text-gray-600 mb-6">Select your role to continue</p>

        <div className="flex justify-around">
          <button
            onClick={() => handleSelect("investor")}
            className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            Investor
          </button>
          <button
            onClick={() => handleSelect("founder")}
            className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            Founder
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
