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
} from "lucide-react";

const FounderDashboard = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile default closed
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
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

  // sample data
  const projects = ["TechStart AI", "MediGrow", "EcoFund"];
  const recent = [
    { title: "Investor from Singapore joined your network", desc: "Mr. Tan Wei invested $25,000 in TechStart AI." },
    { title: "MediGrow completed Series A funding", desc: "Raised $100,000 from multiple investors." },
  ];
  const team = [
    { name: "Riya Patel", role: "CTO" },
    { name: "Karan Shah", role: "COO" },
    { name: "Amit Mehta", role: "Head of Marketing" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar - fixed always on left, but hidden on mobile with translate */}
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
            <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 px-3 rounded-md hover:bg-indigo-50">
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50">
              <Briefcase size={18} />
              <span>My Startups</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50">
              <Users size={18} />
              <span>Investors</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50">
              <MessageSquare size={18} />
              <span>Messages</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-50">
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

      {/* Main content area — offset on md screens to match sidebar width */}
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
              <h1 className="text-xl md:text-2xl font-semibold">Founder Dashboard</h1>
              <p className="text-sm text-gray-500 hidden md:block">Overview of your startups and investor activity</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm text-gray-500">Welcome back</p>
              <p className="font-semibold text-indigo-600">{user.name}</p>
            </div>

            <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
          {/* Top stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Funds Raised</p>
                  <p className="text-2xl font-bold mt-1">$120,000</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <DollarSign className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Investors</p>
                  <p className="text-2xl font-bold mt-1">15</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <Users className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Growth Rate</p>
                  <p className="text-2xl font-bold mt-1">+18%</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <TrendingUp className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Market Reach</p>
                  <p className="text-2xl font-bold mt-1">8 Countries</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <Globe className="text-indigo-600" />
                </div>
              </div>
            </div>
          </section>

          {/* Active projects + quick actions */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Active Projects</h2>
                <p className="text-sm text-gray-500">Manage and view project details</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <div key={p} className="border rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <h3 className="text-indigo-600 font-semibold">{p}</h3>
                      <Briefcase className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Ongoing project with steady investor engagement.</p>
                    <div className="mt-4 flex gap-3">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">View</button>
                      <button className="px-4 py-2 border rounded-lg text-sm">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-3">
                <PieChart /> Portfolio
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-3 mt-2">
                <Briefcase /> Funding Requests
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-3 mt-2">
                <MessageSquare /> Messages
              </button>
            </aside>
          </section>

          {/* Team */}
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-4">Core Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {team.map((m) => (
                <div key={m.name} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
                  <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {m.name.charAt(0)}
                  </div>
                  <p className="mt-3 font-semibold">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent updates */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recent.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold text-indigo-600">{r.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{r.desc}</p>
              </div>
            ))}
          </section>

          {/* Footer (non-sticky) */}
          <footer className="text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">FundForge</span>. All rights reserved. &nbsp;|&nbsp; <a href="#" className="hover:text-indigo-600">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="hover:text-indigo-600">Terms</a>
          </footer>
        </main>
      </div>

      {/* Logout confirmation modal */}
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
              <p className="text-sm text-gray-600 mb-4">Are you sure you want to log out?</p>
              <div className="flex justify-center gap-3">
                <button onClick={() => setShowLogoutConfirm(false)} className="px-4 py-2 rounded-lg bg-gray-100">Cancel</button>
                <button onClick={handleLogout} className="px-4 py-2 rounded-lg bg-red-600 text-white">Logout</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FounderDashboard;
