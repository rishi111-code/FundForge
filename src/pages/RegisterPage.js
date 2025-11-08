import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(role || "investor");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSelectedRole(role);
  }, [role]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: selectedRole,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (err) {
      setLoading(false);
      setMessage("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-xl w-[420px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Register as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
        </h1>

        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-600"
          />

          {/* Role dropdown */}
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-600"
          >
            <option value="investor">Investor</option>
            <option value="founder">Founder</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-70"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("✅")
                ? "text-green-600"
                : message.includes("⚠️")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
