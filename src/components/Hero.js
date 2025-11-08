import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-32 pb-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
    >
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Empowering <span className="text-yellow-300">Startups</span> & Connecting <span className="text-yellow-300">Investors</span>
        </h1>
        <p className="text-lg mb-8 text-gray-100">
          FundForge is your gateway to innovation — helping entrepreneurs raise funds and investors discover promising projects.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-full font-semibold hover:bg-yellow-300 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="https://img.freepik.com/premium-vector/investors-with-digital-stock-market-graph-candlestick-chart-set-people-traders-investing-money-finance-assets-investment-concept-flat-vector-illustration-isolated-white-background_98702-1802.jpg?w=2000"
          alt="investment illustration"
          className="rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
