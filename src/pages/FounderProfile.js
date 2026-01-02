import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Briefcase,
  Users,
  MessageSquare,
  User,
  LogOut,
  Menu,
  X,
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
    phone: "",
    location: "",
    bio: "",
  });

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
        phone: parsed.phone || "",
        location: parsed.location || "",
        bio: parsed.bio || "",
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
  };

  const handlePasswordSave = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
  };

  const inputClass =
    "w-full px-4 py-2 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* SIDEBAR */}
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
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50">
                    <BarChart3 size={18} />
                    <span>Dashboard</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/mystartups')}>
                    <Briefcase size={18} />
                    <span>My Startups</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/investorspage')}>
                    <Users size={18} />
                    <span>Investors</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/messages')}>
                    <MessageSquare size={18} />
                    <span>Messages</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 px-3 rounded-md hover:bg-indigo-50" onClick={() => navigate('/founderprofile')}>
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

      {/* MAIN */}
      <div className="md:ml-64">
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b sticky top-0">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <h1 className="text-2xl font-semibold">Profile</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium text-indigo-600">{user.name}</span>
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6 space-y-8">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <img
                  src={previewPhoto || "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
                  alt="profile"
                  className="w-28 h-28 rounded-full border shadow"
                />
                <label className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full cursor-pointer text-white">
                  <Camera size={16} />
                  <input
                    type="file"
                    hidden
                    onChange={(e) =>
                      setPreviewPhoto(URL.createObjectURL(e.target.files[0]))
                    }
                  />
                </label>
              </div>

              <h2 className="text-xl font-bold mt-4">{formData.name}</h2>
              <p className="text-gray-500">{formData.email}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input className={inputClass} placeholder="Full Name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input className={inputClass} placeholder="Email" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input className={inputClass} placeholder="Phone" value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <input className={inputClass} placeholder="Location" value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            </div>

            <textarea
              rows={4}
              className={`${inputClass} mt-4`}
              placeholder="Short bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />

            <button
              onClick={handleSave}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
            >
              Save Profile
            </button>
          </div>

          {/* SECURITY */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Lock size={20} /> Security
            </h3>

            <input className={inputClass} type="password" placeholder="Current Password"
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })} />
            <input className={`${inputClass} mt-3`} type="password" placeholder="New Password"
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} />
            <input className={`${inputClass} mt-3`} type="password" placeholder="Confirm Password"
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })} />

            <button
              onClick={handlePasswordSave}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
            >
              Update Password
            </button>
          </div>
        </main>
      </div>

      {/* LOGOUT MODAL */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div className="bg-white rounded-xl p-6 w-80 text-center">
              <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
              <div className="flex gap-3 justify-center">
                <button onClick={() => setShowLogoutConfirm(false)} className="px-4 py-2 bg-gray-100 rounded-lg">Cancel</button>
                <button onClick={() => { localStorage.clear(); navigate("/login"); }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg">
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
