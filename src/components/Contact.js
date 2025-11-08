import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-10 md:px-20 bg-white text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Connected</h2>
      <p className="text-gray-600 mb-8">Join our newsletter to get the latest updates and opportunities.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-l-lg border border-gray-300 w-64"
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition">
          Subscribe
        </button>
      </div>
    </motion.section>
  );
};

export default Contact;
