import React from "react";
import AOS from "aos";

const stories = [
  {
    name: "TechNova",
    story: "Raised $2M in seed funding via FundForge within 3 months!",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "GreenBrew",
    story: "Connected with 5 major investors and scaled nationwide.",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Medify",
    story: "Funded $1.5M and reached 100k+ users in just 6 months.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section id="stories" className="py-20 bg-gray-50 px-10 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800" data-aos="fade-up">
        Success Stories
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {stories.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            data-aos="zoom-in"
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-600">{s.name}</h3>
            <p className="text-gray-600 mt-3">{s.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
