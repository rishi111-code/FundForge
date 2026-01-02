import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InvestorDashboard from "./pages/InvestorDashboard";
import FounderDashboard from "./pages/FounderDashboard";
import MyInvestments from "./pages/MyInvestments";
import Opportunities from "./pages/Opportunities";
import Profile from "./pages/Profile";
import MyStartups from "./pages/MyStartups";
import InvestorsPage from "./pages/InvestorsPage";
import Messages from "./pages/Messages";
import FounderProfile from "./pages/FounderProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/:role" element={<RegisterPage />} />
        <Route path="/investordashboard" element={<InvestorDashboard />} />
        <Route path="/founderdashboard" element={<FounderDashboard />} />
        <Route path="/myinvestments" element={<MyInvestments />} />
        <Route path="/opportunities" element={<Opportunities /> } />
        <Route path="/profile" element={<Profile /> } />
        <Route path="/mystartups" element={<MyStartups /> } />
        <Route path="/investorspage" element={<InvestorsPage /> } />
        <Route path="/messages" element={<Messages /> } />
        <Route path="/founderprofile" element={<FounderProfile /> } />
      </Routes>
    </Router>
  );
}

export default App;
