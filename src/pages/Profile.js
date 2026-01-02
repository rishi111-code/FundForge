import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  BarChart3,
  Briefcase,
  LogOut,
  Menu,
  User,
  X,
  TrendingUp,
  TrendingUpIcon,
  ArrowLeft,
  Camera,
  Lock,
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [previewPhoto, setPreviewPhoto] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    phone: "",
    location: "",
  });

  // Password fields
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setFormData({
        name: parsed.name || "",
        email: parsed.email || "",
        bio: parsed.bio || "",
        phone: parsed.phone || "",
        location: parsed.location || "",
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewPhoto(URL.createObjectURL(file));
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile Updated Successfully!");
  };

  const handlePasswordSave = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    alert("Password Updated Successfully!");
  };

  const inputClass =
    "w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
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
            
                        <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/opportunities')}>
                          <TrendingUp size={18} />
                          <span>Opportunities</span>
                        </button>
            
                        <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 rounded-md hover:bg-indigo-50" onClick={() => navigate('/profile')}>
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

      {/* Main Content */}
      <div className="md:ml-64">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen((s) => !s)}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <h1 className="text-xl md:text-2xl font-semibold">My Profile</h1>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-semibold text-indigo-600">{user.name}</p>
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="p-6 md:p-10 max-w-4xl mx-auto">

          <button
            onClick={() => navigate("/investordashboard")}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 border"
          >
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={
                    previewPhoto ||
                    "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  }
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border shadow"
                />

                <label className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer">
                  <Camera size={16} />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                  />
                </label>
              </div>

              <h2 className="text-2xl font-bold mt-4">{formData.name}</h2>
              <p className="text-gray-500">{formData.email}</p>
            </div>

            {/* Form */}
            <div className="mt-8 space-y-5">
              <div>
                <label className="font-semibold">Full Name</label>
                <input
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="font-semibold">Email Address</label>
                <input
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="font-semibold">Phone</label>
                <input
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="font-semibold">Location</label>
                <input
                  className={inputClass}
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="font-semibold">Bio</label>
                <textarea
                  className={inputClass}
                  rows={4}
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                onClick={handleSave}
                className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
              >
                Save Changes
              </button>

              {/* ---------------- CHANGE PASSWORD SECTION ---------------- */}
              <div className="mt-10 border-t pt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lock size={20} /> Change Password
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="font-semibold">Current Password</label>
                    <input
                      type="password"
                      className={inputClass}
                      placeholder="Enter current password"
                      value={passwordData.currentPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          currentPassword: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="font-semibold">New Password</label>
                    <input
                      type="password"
                      className={inputClass}
                      placeholder="Enter new password"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="font-semibold">Confirm New Password</label>
                    <input
                      type="password"
                      className={inputClass}
                      placeholder="Confirm new password"
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={handlePasswordSave}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
                  >
                    Update Password
                  </button>
                </div>
              </div>
              {/* ---------------- END CHANGE PASSWORD SECTION ---------------- */}

            </div>
          </motion.div>

          <footer className="text-center text-sm text-gray-500 py-6 mt-12">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-indigo-600">FundForge</span>.
            All rights reserved.
          </footer>
        </main>
      </div>

      {/* Logout Modal */}
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

export default Profile;
