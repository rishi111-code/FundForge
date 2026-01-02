// ⭐ FULL UPDATED FILE WITH MORE CONTENT + BETTER LOOK

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
  Search,
  ArrowLeft,
  TrendingUpIcon,
} from "lucide-react";

const Opportunities = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [openProjectIndex, setOpenProjectIndex] = useState(null);
const [openGlobalReachIndex, setOpenGlobalReachIndex] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

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

  // ---------------------------------------------------
  // 🌟 REALISTIC + EXPANDED STARTUP OPPORTUNITIES
  // ---------------------------------------------------
  const opportunities = [
    {
      name: "TechStart AI",
      category: "AI / SaaS",
      valuation: "$4.2M",
      ask: "$250,000",
      minInvest: "$5,000",
      traction: "12k active users",
      growth: "+28% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=T",
    },
    {
      name: "EcoGreen Energy",
      category: "CleanTech",
      valuation: "$7.8M",
      ask: "$400,000",
      minInvest: "$10,000",
      traction: "250 B2B clients",
      growth: "+19% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=E",
    },
    {
      name: "MediCore Health",
      category: "HealthTech",
      valuation: "$5.5M",
      ask: "$300,000",
      minInvest: "$7,500",
      traction: "4k paying patients",
      growth: "+32% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=M",
    },

    // ⭐ NEW REALISTIC OPPORTUNITIES ADDED BELOW ----------------------

    {
      name: "FinVault",
      category: "FinTech",
      valuation: "$12.2M",
      ask: "$850,000",
      minInvest: "$15,000",
      traction: "30,000 verified investors",
      growth: "+41% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=F",
    },
    {
      name: "EduMentor",
      category: "EdTech",
      valuation: "$3.4M",
      ask: "$200,000",
      minInvest: "$2,500",
      traction: "18k students enrolled",
      growth: "+25% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=ED",
    },
    {
      name: "FreshBite Foods",
      category: "FoodTech",
      valuation: "$6.1M",
      ask: "$350,000",
      minInvest: "$5,000",
      traction: "150 commercial kitchens",
      growth: "+22% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=FB",
    },
    {
      name: "TripNow",
      category: "TravelTech",
      valuation: "$9.8M",
      ask: "$500,000",
      minInvest: "$7,000",
      traction: "50k monthly bookings",
      growth: "+18% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=TR",
    },
    {
      name: "BlockWave",
      category: "Blockchain",
      valuation: "$14.5M",
      ask: "$1.1M",
      minInvest: "$20,000",
      traction: "12 enterprise contracts",
      growth: "+52% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=B",
    },
    {
      name: "ShopEase",
      category: "E-commerce",
      valuation: "$11M",
      ask: "$600,000",
      minInvest: "$10,000",
      traction: "100k monthly active buyers",
      growth: "+30% MoM",
      logo: "https://via.placeholder.com/80x80.png?text=S",
    },
  ];

  const categories = [
    "AI / SaaS",
    "CleanTech",
    "HealthTech",
    "FinTech",
    "EdTech",
    "FoodTech",
    "TravelTech",
    "Blockchain",
    "E-commerce",
  ];

  const filteredData = opportunities.filter((o) => {
    const matchesSearch = o.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || o.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ---------------- SIDEBAR ---------------- */}
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
            
                       <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/myinvestments')}>
            
                          <Briefcase size={18} />
                          <span>My Investments</span>
                        </button>
            
                        <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 rounded-md hover:bg-indigo-50" onClick={() => navigate('/opportunities')}>
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

      {/* MAIN CONTENT */}
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

            <h1 className="text-xl md:text-2xl font-semibold">Investment Opportunities</h1>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-semibold text-indigo-600">{user.name}</p>
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* PAGE BODY */}
        <main className="p-6 md:p-10 max-w-7xl mx-auto">

          {/* Back Button */}
          <button
            onClick={() => navigate("/investordashboard")}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
            <div className="relative w-full sm:w-1/2">
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups..."
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-white border shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 bg-white border rounded-lg shadow-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((startup, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 border"
              >
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    className="w-14 h-14 rounded-lg border"
                  />
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-600 font-semibold">
                    {startup.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{startup.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{startup.traction}</p>

                <div className="mt-4 space-y-2">
                  <p className="text-sm"><strong>Valuation:</strong> {startup.valuation}</p>
                  <p className="text-sm"><strong>Funding Ask:</strong> {startup.ask}</p>
                  <p className="text-sm"><strong>Min Investment:</strong> {startup.minInvest}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <TrendingUpIcon size={16} className="text-green-600" />
                    <p className="text-green-600 text-sm font-semibold">{startup.growth}</p>
                  </div>
                </div>

              <button
  onClick={() =>
    setOpenProjectIndex(openProjectIndex === index ? null : index)
  }
  className="text-indigo-600 font-semibold hover:underline"
>
  View Project Details
</button>

{openProjectIndex === index && (
  <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm space-y-2">
    <p><strong>Business Model:</strong> Subscription based</p>
    <p><strong>Revenue:</strong> $120k ARR</p>
    <p><strong>Customers:</strong> 2,500+</p>
    <p><strong>Stage:</strong> Seed</p>
  </div>
)}
<button
  onClick={() =>
    setOpenGlobalReachIndex(openGlobalReachIndex === index ? null : index)
  }
  className="text-indigo-600 font-semibold hover:underline mt-2"
>
  Global Reach
</button>

{openGlobalReachIndex === index && (
  <div className="mt-3 flex flex-wrap gap-2">
    {["India", "USA", "UK", "Germany", "Singapore"].map((country) => (
      <span
        key={country}
        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
      >
        {country}
      </span>
    ))}
  </div>
)}

              </motion.div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No matching opportunities found.</p>
          )}

          <footer className="text-center text-sm text-gray-500 py-6 mt-12">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-indigo-600">FundForge</span>. All rights reserved.
          </footer>
        </main>
      </div>

      {/* LOGOUT MODAL */}
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
              <p className="text-sm text-gray-600 mb-6">Are you sure you want to log out?</p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
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

export default Opportunities;
