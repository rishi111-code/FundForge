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
  ArrowLeft,
  Search,
  Filter,
  PieChart,
} from "lucide-react";

const MyInvestments = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

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

  const investments = [
    { company: "TechStart", amount: 15000, status: "Active", date: "2024-04-21", roi: "12%" },
    { company: "EcoFund", amount: 20000, status: "Active", date: "2024-02-10", roi: "10%" },
    { company: "MediGrow", amount: 10000, status: "Exited", date: "2023-11-18", roi: "15%" },
  ];

  const filteredInvestments = investments.filter((inv) => {
    const matchesSearch = inv.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || inv.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ------------------------- SIDEBAR ------------------------- */}
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
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50">
                    <BarChart3 size={18} />
                    <span>Dashboard</span>
                  </button>
      
                 <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 rounded-md hover:bg-indigo-50" onClick={() => navigate('/myinvestments')}>
      
                    <Briefcase size={18} />
                    <span>My Investments</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/opportunities')}>
                    <TrendingUp size={18} />
                    <span>Opportunities</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/profile')}>
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
      

      {/* ------------------------- MAIN CONTENT ------------------------- */}
      <div className="md:ml-64">

        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen((s) => !s)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <h1 className="text-xl md:text-2xl font-semibold">My Investments</h1>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-semibold text-indigo-600">{user.name}</p>
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 md:p-10 max-w-7xl mx-auto">

          {/* Back button */}
          <button
            onClick={() => navigate("/investordashboard")}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>

          {/* -------- Summary Cards -------- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-sm text-gray-500">Total Invested</p>
              <h2 className="text-3xl font-bold mt-2 text-indigo-600">$45,000</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-sm text-gray-500">Active Investments</p>
              <h2 className="text-3xl font-bold mt-2 text-green-600">2</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-sm text-gray-500">Portfolio ROI</p>
              <h2 className="text-3xl font-bold mt-2 text-purple-600">12.3%</h2>
            </div>
          </div>

          {/* -------- Search + Filters -------- */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">

            {/* Search */}
            <div className="relative w-full sm:w-1/2">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search investments..."
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-white border shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div>
              <select
                className="px-4 py-2 border bg-white rounded-lg shadow-sm"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="Exited">Exited</option>
              </select>
            </div>
          </div>

          {/* -------- Investments Table -------- */}
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <PieChart size={20} className="text-indigo-600" />
              Investment Portfolio
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3">Company</th>
                    <th className="py-3">Amount</th>
                    <th className="py-3">ROI</th>
                    <th className="py-3">Status</th>
                    <th className="py-3">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredInvestments.map((inv, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-4">{inv.company}</td>
                      <td className="py-4">${inv.amount.toLocaleString()}</td>
                      <td className="py-4 text-indigo-600 font-semibold">{inv.roi}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            inv.status === "Active"
                              ? "bg-green-50 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-4">{inv.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredInvestments.length === 0 && (
                <p className="text-center text-gray-500 py-6">No matching investments found.</p>
              )}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-6 mt-10">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-indigo-600">FundForge</span>. All rights reserved.
          </footer>
        </main>
      </div>

      {/* ------------------------- LOGOUT MODAL ------------------------- */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
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
              <p className="text-sm text-gray-600 mb-6">
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

export default MyInvestments;
