import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-10 px-10 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">FundForge</h1>
        <p className="text-gray-200 text-center md:text-right">
          © {new Date().getFullYear()} FundForge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
