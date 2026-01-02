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
  PieChart,
  MessageSquare,
  Globe,
  PlusCircle,
  Edit,
  Eye,
  Filter,
  Layers,
  CheckCircle,
  Clock,
} from "lucide-react";

const MyStartups = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  const startups = [
    {
      name: "TechStart AI",
      desc: "AI-powered automation system to streamline business operations.",
      funds: "$45,000",
      progress: 60,
      status: "active",
    },
    {
      name: "MediGrow Health",
      desc: "Smart health monitoring platform with IoT wearable integration.",
      funds: "$100,000",
      progress: 90,
      status: "completed",
    },
    {
      name: "EcoFund Green",
      desc: "Sustainability investment platform focused on renewable energy.",
      funds: "$10,000",
      progress: 25,
      status: "draft",
    },
  ];

  const filteredStartups =
    filter === "all"
      ? startups
      : startups.filter((s) => s.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
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

            <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 px-3 rounded-md bg-indigo-50">
              <Briefcase size={18} />
              <span>My Startups</span>
            </button>

            <button
              onClick={() => navigate("/investors")}
              className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50"
            >
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

      {/* mobile overlay */}
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

      {/* Main area */}
      <div className="md:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen((s) => !s)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-semibold">My Startups</h1>
              <p className="text-sm text-gray-500 hidden md:block">
                Manage and monitor your startup ventures
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

        {/* Main content */}
        <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
          {/* Create new startup */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Startups</h2>
            <button className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              <PlusCircle size={18} />
              Create New Startup
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <Filter size={18} className="text-gray-500" />
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                filter === "all" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-4 py-2 rounded-lg ${
                filter === "active" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("draft")}
              className={`px-4 py-2 rounded-lg ${
                filter === "draft" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              Draft
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg ${
                filter === "completed" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              Completed
            </button>
          </div>

          {/* Startup Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredStartups.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-indigo-600">
                    {s.name}
                  </h3>
                  {s.status === "active" && (
                    <CheckCircle className="text-green-500" size={20} />
                  )}
                  {s.status === "completed" && (
                    <Layers className="text-blue-500" size={20} />
                  )}
                  {s.status === "draft" && (
                    <Clock className="text-gray-400" size={20} />
                  )}
                </div>

                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Funding Progress</p>
                  <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden mt-1">
                    <div
                      className="bg-indigo-600 h-2"
                      style={{ width: `${s.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium mt-1">{s.progress}% funded</p>
                </div>

                <p className="mt-3 text-sm text-gray-700">
                  Total Funds Raised:{" "}
                  <span className="font-semibold text-indigo-600">
                    {s.funds}
                  </span>
                </p>

                <div className="flex gap-3 mt-5">
                  <button
  onClick={() => setSelectedStartup(s)}
  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm flex items-center gap-2 hover:bg-indigo-700"
>
  <Eye size={16} /> View Details
</button>
{/* VIEW DETAILS MODAL */}
<AnimatePresence>
  {selectedStartup && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedStartup(null)}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setSelectedStartup(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-indigo-600">
            {selectedStartup.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {selectedStartup.desc}
          </p>
        </div>

        {/* Status */}
        <div className="flex gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
            {selectedStartup.status.toUpperCase()}
          </span>
          <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
            Startup
          </span>
        </div>

        {/* Funding */}
        <div className="mb-5">
          <p className="text-sm text-gray-600 mb-1">Funding Progress</p>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-3 bg-indigo-600"
              style={{ width: `${selectedStartup.progress}%` }}
            />
          </div>
          <p className="mt-1 text-sm font-medium">
            {selectedStartup.progress}% funded
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500">Total Funds Raised</p>
            <p className="font-semibold text-indigo-600">
              {selectedStartup.funds}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500">Market</p>
            <p className="font-semibold">Technology</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500">Stage</p>
            <p className="font-semibold capitalize">
              {selectedStartup.status}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500">Website</p>
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:underline"
            >
              www.startup.com
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setSelectedStartup(null)}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Edit Startup
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
                  <button className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2">
                    <Edit size={16} /> Edit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-indigo-600">FundForge</span>. All
            rights reserved. &nbsp;|&nbsp;
            <a href="#" className="hover:text-indigo-600">
              Privacy Policy
            </a>{" "}
            &nbsp;|&nbsp;
            <a href="#" className="hover:text-indigo-600">
              Terms
            </a>
          </footer>
        </main>
      </div>

      {/* Logout modal */}
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
                  onClick={handleLogout}
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

export default MyStartups;
