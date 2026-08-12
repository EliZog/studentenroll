import React, { useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Programs from "./components/Programs";
import Timetable from "./components/Timetable";
import AcademicHistory from "./components/AcademicHistory";
import Finances from "./components/Finances";
import { studentInfo } from "./data/mockData";
import { Bell, User, LogOut } from "lucide-react";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [utorid, setUtorid] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  // State shared between tabs
  const [cartPlanA, setCartPlanA] = useState([]);
  const [cartPlanB, setCartPlanB] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [waitlistedCourses, setWaitlistedCourses] = useState([]);
  const [showWaitlistOnSchedule, setShowWaitlistOnSchedule] = useState(false); // Waitlisted courses on timetable are off by default
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleLogin = (id) => {
    setUtorid(id);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUtorid("");
    setActiveTab("dashboard");
    setCartPlanA([]);
    setCartPlanB([]);
    setEnrolledCourses([]);
    setWaitlistedCourses([]);
    setShowWaitlistOnSchedule(false);
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard";
      case "courses":
        return "Courses";
      case "programs":
        return "Programs of Study";
      case "timetable":
        return "Timetable & Exams";
      case "history":
        return "Academic History";
      case "finances":
      case "payment":
        return "Financial Account";
      default:
        return "ACORN";
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">
      
      {/* Top Header Bar */}
      <header className="bg-[#002a5c] text-white py-3 px-6 flex justify-between items-center shadow-md border-b border-[#001636] z-50 shrink-0 select-none">
        
        {/* Crest & Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-10 bg-white flex items-center justify-center rounded-sm font-extrabold text-[#002a5c] text-[10px] border border-[#001b3f] shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#002a5c]"></div>
              <span className="mt-1">U T</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-semibold text-slate-200 tracking-wider">UNIVERSITY OF TORONTO</span>
              <span className="text-lg font-black tracking-widest text-white mt-0.5">ACORN</span>
            </div>
          </div>

          <div className="w-px h-6 bg-slate-400/30 hidden md:block"></div>
          
          <h1 className="text-sm font-semibold tracking-wide hidden md:block">
            {getPageTitle()}
          </h1>
        </div>

        {/* User profile, notifications, search */}
        <div className="flex items-center gap-4 relative">
          
          {/* Notifications Bell */}
          <button 
            onClick={() => setActiveTab("dashboard")}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors relative"
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5 text-slate-200" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
          </button>

          {/* User Settings Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/10 transition-all font-medium text-sm select-none"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="hidden sm:inline">{studentInfo.name}</span>
            </button>

            {/* Dropdown Card */}
            {showUserDropdown && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowUserDropdown(false)}></div>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded border border-slate-200 shadow-md py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-xs font-semibold text-slate-700">
                  <div className="px-4 py-2 border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[9px]">
                    UTORid: {utorid}
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab("dashboard");
                      setShowUserDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    Profile & Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 border-t border-slate-100 font-bold"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

      </header>

      {/* Main Screen Content */}
      <div className="flex-1 flex overflow-hidden w-full relative">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab === "payment" ? "finances" : activeTab}
          setActiveTab={setActiveTab}
          studentName={studentInfo.name}
          onLogout={handleLogout}
        />

        {/* Dynamic Inner Page */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === "dashboard" && (
            <Dashboard 
              setActiveTab={setActiveTab} 
              enrolledCount={enrolledCourses.length} 
              waitlistedCount={waitlistedCourses.length} 
            />
          )}
          {activeTab === "courses" && (
            <Courses
              cartPlanA={cartPlanA}
              setCartPlanA={setCartPlanA}
              cartPlanB={cartPlanB}
              setCartPlanB={setCartPlanB}
              enrolledCourses={enrolledCourses}
              setEnrolledCourses={setEnrolledCourses}
              waitlistedCourses={waitlistedCourses}
              setWaitlistedCourses={setWaitlistedCourses}
            />
          )}
          {activeTab === "programs" && <Programs />}
          {activeTab === "timetable" && (
            <Timetable 
              enrolledCourses={enrolledCourses} 
              waitlistedCourses={waitlistedCourses} 
              showWaitlistOnSchedule={showWaitlistOnSchedule}
              setShowWaitlistOnSchedule={setShowWaitlistOnSchedule}
              cartPlanA={cartPlanA}
              cartPlanB={cartPlanB}
            />
          )}
          {activeTab === "history" && <AcademicHistory />}
          {(activeTab === "finances" || activeTab === "payment") && (
            <Finances 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />
          )}
        </main>
      </div>

    </div>
  );
}
