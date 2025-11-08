import React from "react";
import { Briefcase, Users, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    title: "Smart Funding",
    desc: "Connect startups with investors efficiently through AI-powered matching.",
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-600" />,
    title: "Community Driven",
    desc: "Build networks and collaborate with like-minded innovators and funders.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-indigo-600" />,
    title: "Transparent Transactions",
    desc: "Track investments and campaigns with complete visibility.",
  },
  {
    icon: <Shield className="w-10 h-10 text-indigo-600" />,
    title: "Secure Platform",
    desc: "Your data and funds are protected by end-to-end encryption.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 px-10 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Platform Features</h2>
      <div className="grid md:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
