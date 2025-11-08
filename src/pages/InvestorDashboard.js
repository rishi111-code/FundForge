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
  User,
  X,
  Globe,
  MessageSquare,
  PieChart,
  Search,
} from "lucide-react";

const InvestorDashboard = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // start closed on mobile
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

  // mock small dataset for table
  const investments = [
    { name: "TechStart", invested: "$15,000", status: "Active" },
    { name: "EcoFund", invested: "$20,000", status: "Active" },
    { name: "MediGrow", invested: "$10,000", status: "Exited" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar (fixed on the left). On md+ it's always visible. */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : 0 }}
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 shadow-lg overflow-y-auto
                    transform transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-indigo-600">FundForge</h2>
            <p className="text-sm text-gray-500 mt-1">Investor Portal</p>
          </div>

          <nav className="p-6 flex-1 flex flex-col space-y-3">
            <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 rounded-md hover:bg-indigo-50">
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50">
              <Briefcase size={18} />
              <span>My Investments</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50">
              <TrendingUp size={18} />
              <span>Opportunities</span>
            </button>

            <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50">
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

      {/* overlay for mobile when sidebar open */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-20 md:hidden bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main area (push right on md screens) */}
      <div className="md:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen((s) => !s)}
              aria-label="Open menu"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="flex items-center gap-4">
              <h1 className="text-lg md:text-2xl font-semibold">Investor Dashboard</h1>

              {/* quick search */}
              <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-lg gap-2">
                <Search size={16} className="text-gray-500" />
                <input
                  placeholder="Search projects or companies"
                  className="bg-transparent outline-none text-sm text-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-gray-500">Welcome back</p>
              <p className="font-semibold text-indigo-600">{user.name}</p>
            </div>
            <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 md:p-10 max-w-7xl mx-auto">
          {/* Stats row */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-5 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Invested</p>
                  <p className="text-2xl font-bold mt-2">$45,000</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <DollarSign className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Projects</p>
                  <p className="text-2xl font-bold mt-2">6</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <Briefcase className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">ROI This Month</p>
                  <p className="text-2xl font-bold mt-2">+8.4%</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <TrendingUp className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Global Reach</p>
                  <p className="text-2xl font-bold mt-2">12 Countries</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-md">
                  <Globe className="text-indigo-600" />
                </div>
              </div>
            </div>
          </section>

          {/* Opportunities + quick actions */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Investment Opportunities</h2>
                <div className="text-sm text-gray-500">Explore curated startups</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["TechStart", "EcoFund", "MediGrow"].map((project) => (
                  <div key={project} className="border rounded-lg p-4 hover:shadow-md transition">
                    <h3 className="text-indigo-600 font-semibold">{project}</h3>
                    <p className="text-sm text-gray-600 mt-2">Innovative startup seeking investors for expansion.</p>
                    <div className="mt-4 flex gap-3">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">View Details</button>
                      <button className="px-4 py-2 border border-indigo-100 rounded-lg text-sm">Save</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-3">
                <PieChart /> View Portfolio
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-3 mt-2">
                <Briefcase /> My Investments
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-3 mt-2">
                <MessageSquare /> Messages
              </button>
            </aside>
          </section>

          {/* Portfolio summary */}
          <section className="bg-white rounded-xl p-6 shadow mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg"><PieChart className="text-indigo-600" /></div>
              <div>
                <h3 className="font-semibold">Portfolio Summary</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Your portfolio is diversified across Technology, Healthcare and Renewable Energy.
                </p>
                <p className="text-xs text-gray-400 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </section>

          {/* Recent investments table */}
          <section className="bg-white rounded-xl p-6 shadow mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recent Investments</h3>
              <div className="text-sm text-gray-500">Showing latest 3</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3">Company</th>
                    <th className="py-3">Invested</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((it, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-4">{it.name}</td>
                      <td className="py-4">{it.invested}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${it.status === "Active" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-600"}`}>
                          {it.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent insights */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold">Market Insight</h4>
              <p className="text-sm text-gray-600 mt-3">TechStart raised Series B funding — $10M secured to expand AI analytics.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold">Announcement</h4>
              <p className="text-sm text-gray-600 mt-3">EcoFund launches green energy project to scale biofuel solutions across Asia.</p>
            </div>
          </section>

          {/* Footer (non-sticky) */}
          <footer className="text-center text-sm text-gray-500 py-6">
            © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">FundForge</span>. All rights reserved. &nbsp;|&nbsp; <a href="#" className="hover:text-indigo-600">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="hover:text-indigo-600">Terms</a>
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
              <p className="text-sm text-gray-600 mb-6">Are you sure you want to log out?</p>
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

export default InvestorDashboard;
