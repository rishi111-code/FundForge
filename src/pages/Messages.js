import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Users,
  User,
  MessageSquare,
  LogOut,
  Menu,
  X,
  Send,
  Circle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) navigate("/login");
    else setUser(JSON.parse(stored));
  }, [navigate]);

  const chats = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Angel Investor",
      lastMsg: "Let's discuss your pitch",
      online: true,
    },
    {
      id: 2,
      name: "Innovate Venture Partners",
      role: "VC Firm",
      lastMsg: "Please share the deck",
      online: false,
    },
    {
      id: 3,
      name: "Growth Catalyst",
      role: "Fund Manager",
      lastMsg: "We will review soon",
      online: true,
    },
  ];

  const messages = [
    { from: "them", text: "Hello! I reviewed your startup.", time: "10:30 AM" },
    { from: "you", text: "Great! Would love your feedback.", time: "10:32 AM" },
    { from: "them", text: "Please share the pitch deck.", time: "10:35 AM" },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
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
      
                  <button className="flex items-center gap-3 text-indigo-600 font-medium py-2 px-3 rounded-md hover:bg-indigo-50" onClick={() => navigate('/messages')}>
                    <MessageSquare size={18} />
                    <span>Messages</span>
                  </button>
      
                  <button className="flex items-center gap-3 text-gray-700 py-2 rounded-md hover:bg-gray-50" onClick={() => navigate('/founderprofile')}>
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
        {/* HEADER */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <div>
              <h1 className="text-xl font-semibold">Messages</h1>
              <p className="text-sm text-gray-500 hidden md:block">
                Communicate with investors & partners
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-gray-500">Welcome</p>
              <p className="font-semibold text-indigo-600">{user.name}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CHAT LIST */}
          <div className="bg-white rounded-xl shadow p-4 h-[75vh] flex flex-col">
            <h2 className="font-semibold mb-4">Conversations</h2>
            <div className="space-y-2 overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`p-3 rounded-lg cursor-pointer border transition ${
                    selectedChat?.id === chat.id
                      ? "bg-indigo-50 border-indigo-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{chat.name}</p>
                    <Circle
                      size={10}
                      className={chat.online ? "text-green-500" : "text-gray-300"}
                      fill="currentColor"
                    />
                  </div>
                  <p className="text-xs text-gray-500">{chat.role}</p>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMsg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CHAT WINDOW */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-4 h-[75vh] flex flex-col">
            {!selectedChat ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                Select a conversation to start chatting
              </div>
            ) : (
              <>
                <div className="border-b pb-3 mb-4">
                  <h2 className="font-semibold">{selectedChat.name}</h2>
                  <p className="text-sm text-gray-500">{selectedChat.role}</p>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`max-w-md p-3 rounded-xl ${
                        msg.from === "you"
                          ? "ml-auto bg-indigo-600 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 border-t pt-3 mt-3">
                  <input
                    className="flex-1 bg-gray-100 rounded-lg px-4 py-2 outline-none"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="p-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                    <Send size={18} />
                  </button>
                </div>
              </>
            )}
          </div>
        </main>

        <footer className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} <span className="text-indigo-600 font-semibold">FundForge</span>
        </footer>
      </div>
    </div>
  );
};

export default Messages;
