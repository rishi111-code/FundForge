import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  BarChart3,
  Briefcase,
  DollarSign,
  LogOut,
  Menu,
  TrendingUp,
  Users,
  User,
  X,
  MessageSquare,
  PlusCircle,
  Search,
  MapPin,
  Wallet,
  ArrowRight,
} from "lucide-react";

const InvestorsPage = () => {
  const [user, setUser] = useState(null);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else navigate("/login");
  }, [navigate]);

  if (!user) return null;

 const investors = [
  {
    name: "Amit Sharma",
    type: "Angel Investor",
    range: "₹5L - ₹25L",
    location: "Mumbai",
    interests: ["FinTech", "AI", "SaaS"],
    status: "Active",
    experience: "12+ years in early-stage startups",
    portfolio: ["PayMate", "CredFlow", "LoanKart"],
    email: "amit.sharma@angelmail.com",
  },
  {
    name: "Innovate Venture Partners",
    type: "VC Firm",
    range: "₹50L - ₹5Cr",
    location: "Bangalore",
    interests: ["DeepTech", "HealthTech"],
    status: "Open",
    experience: "Series A–C investments",
    portfolio: ["MediCore", "HealthifyX"],
    email: "contact@innovatevp.com",
  },
  {
    name: "Growth Catalyst Fund",
    type: "Seed Fund",
    range: "₹10L - ₹1Cr",
    location: "Delhi",
    interests: ["E-commerce", "EdTech"],
    status: "Reviewing",
    experience: "Seed-stage specialist fund",
    portfolio: ["EduSmart", "ShopQuick"],
    email: "info@growthcatalyst.in",
  },
  {
    name: "NextGen Angels Network",
    type: "Angel Network",
    range: "₹2L - ₹20L",
    location: "Ahmedabad",
    interests: ["AI", "Consumer Apps", "Blockchain"],
    status: "Active",
    experience: "100+ angel members",
    portfolio: ["BlockPay", "QuickCart"],
    email: "connect@nextgenangels.com",
  },
  {
    name: "BluePeak Capital",
    type: "VC Firm",
    range: "₹1Cr - ₹10Cr",
    location: "Pune",
    interests: ["SaaS", "Cloud", "AI"],
    status: "Open",
    experience: "Enterprise SaaS focused VC",
    portfolio: ["CloudOps", "ScaleCRM"],
    email: "hello@bluepeak.vc",
  },
  {
    name: "LaunchPad Ventures",
    type: "Startup Accelerator",
    range: "₹5L - ₹50L",
    location: "Hyderabad",
    interests: ["Consumer Tech", "Mobility"],
    status: "Active",
    experience: "Accelerated 150+ startups",
    portfolio: ["MoveIt", "FoodSprint"],
    email: "apply@launchpad.io",
  },
];


  const filteredInvestors = investors.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* SIDEBAR (same as MyStartups) */}
      <motion.aside
        initial={false}
        animate={{ x: 0 }}
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 shadow-lg transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-indigo-600">FundForge</h2>
            <p className="text-sm text-gray-500 mt-1">Founder Portal</p>
          </div>

          <nav className="p-6 flex-1 flex flex-col gap-3">

            <button
              onClick={() => navigate("/founder-dashboard")}
              className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50"
            >
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate("/my-startups")}
              className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <Briefcase size={18} />
              <span>My Startups</span>
            </button>

            <button className="flex items-center gap-3 py-2 px-3 rounded-md bg-indigo-50 text-indigo-600 font-medium">
              <Users size={18} />
              <span>Investors</span>
            </button>

            <button
              onClick={() => navigate("/messages")}
              className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50"
            >
              <MessageSquare size={18} />
              <span>Messages</span>
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50"
            >
              <User size={18} />
              <span>Profile</span>
            </button>

          </nav>

          <div className="p-6 border-t border-gray-200">
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium w-full"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MAIN PAGE */}
      <div className="md:ml-64">

        {/* HEADER (same theme as others) */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen((s) => !s)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Investors</h1>
              <p className="text-sm text-gray-500 hidden md:block">
                Explore investors and funding partners
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm text-gray-500">Logged in as</p>
              <p className="font-semibold text-indigo-600">{user.name}</p>
            </div>

            <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">

          {/* Search + Filter */}
          <div className="mb-6 bg-white p-5 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="col-span-2">
              <label className="text-sm font-semibold text-gray-700">Search Investors</label>
              <div className="flex items-center mt-2 bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name..."
                  className="w-full bg-transparent outline-none ml-2"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Location</label>
              <select className="mt-2 w-full bg-gray-100 rounded-lg px-3 py-2">
                <option>All</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Delhi</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">Category</label>
              <select className="mt-2 w-full bg-gray-100 rounded-lg px-3 py-2">
                <option>All</option>
                <option>Angel Investor</option>
                <option>VC Firm</option>
                <option>Seed Fund</option>
              </select>
            </div>
          </div>

          {/* INVESTOR CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInvestors.map((inv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {inv.name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      inv.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : inv.status === "Open"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {inv.status}
                  </span>
                </div>

                <p className="flex items-center text-gray-700 mt-2">
                  <Briefcase size={18} className="mr-2 text-indigo-600" />
                  {inv.type}
                </p>

                <p className="flex items-center text-gray-700 mt-2">
                  <Wallet size={18} className="mr-2 text-purple-600" />
                  Investment Range:
                  <span className="ml-1 font-medium">{inv.range}</span>
                </p>

                <p className="flex items-center text-gray-700 mt-2">
                  <MapPin size={18} className="mr-2 text-red-500" />
                  {inv.location}
                </p>

                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-600">Interests:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {inv.interests.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

             <button
  onClick={() => setSelectedInvestor(inv)}
  className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
>
  View Details <ArrowRight size={18} />
</button>

              </motion.div>
            ))}
          </div>
          <AnimatePresence>
  {selectedInvestor && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <div>
            <h2 className="text-xl font-semibold text-indigo-600">
              {selectedInvestor.name}
            </h2>
            <p className="text-sm text-gray-500">{selectedInvestor.type}</p>
          </div>
          <button onClick={() => setSelectedInvestor(null)}>
            <X />
          </button>
        </div>

        {/* DETAILS */}
        <div className="space-y-3 text-sm text-gray-700">
          <p><strong>Location:</strong> {selectedInvestor.location}</p>
          <p><strong>Investment Range:</strong> {selectedInvestor.range}</p>
          <p><strong>Experience:</strong> {selectedInvestor.experience}</p>
          <p><strong>Contact:</strong> {selectedInvestor.email}</p>

          <div>
            <p className="font-semibold mt-3">Focus Areas</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedInvestor.interests.map((tag, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mt-3">Portfolio</p>
            <ul className="list-disc ml-5 mt-1">
              {selectedInvestor.portfolio.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate("/messages")}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
          >
            Message Investor
          </button>
          <button
            onClick={() => setSelectedInvestor(null)}
            className="flex-1 border py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-indigo-600">FundForge</span>. All
            rights reserved.
          </footer>
        </main>
      </div>

      {/* LOGOUT MODAL */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <h3 className="text-lg font-semibold mb-2">Confirm Logout</h3>
              <p className="text-sm text-gray-600 mb-4">
                Are you sure you want to log out?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvestorsPage;
