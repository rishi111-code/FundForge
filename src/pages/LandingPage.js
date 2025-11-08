import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import SuccessStories from "../components/SuccessStories";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
