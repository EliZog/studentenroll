import React, { useState } from "react";
import { 
  LayoutDashboard, 
  User, 
  GraduationCap, 
  Calendar, 
  History, 
  DollarSign, 
  CreditCard, 
  ExternalLink, 
  LogOut,
  ChevronDown,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, studentName, onLogout }) {
  const [academicsOpen, setAcademicsOpen] = useState(true);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <aside className="w-sidebar-width bg-white border-r border-[#dde3ed] flex flex-col h-full select-none shrink-0 font-sans text-on-surface">
      {/* Student Badge Info */}
      <div className="p-6 border-b border-[#dde3ed] flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-[#dde3ed]">
            <User className="text-acorn-blue w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm text-[#002a5c] leading-tight truncate w-[170px]">{studentName}</div>
            <div className="text-xs text-slate-500 leading-tight">1006548231</div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#166534] animate-pulse"></span>
          <span className="text-[11px] font-semibold text-[#166534] uppercase tracking-wider bg-green-50 px-1.5 py-0.5 rounded">
            Registered
          </span>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar flex flex-col gap-4 text-[13px] font-medium text-slate-700">
        
        {/* Core section */}
        <ul className="flex flex-col px-3 gap-0.5">
          <li>
            <button
              onClick={() => handleTabClick("dashboard")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all ${
                activeTab === "dashboard"
                  ? "bg-[#e7eeff] text-[#002a5c] font-semibold border-l-4 border-acorn-blue"
                  : "hover:bg-slate-50 hover:text-on-surface"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-slate-500" />
              <span>Dashboard</span>
            </button>
          </li>
        </ul>

        {/* Academics Section */}
        <div className="flex flex-col gap-1">
          <div className="px-6 text-[10px] font-bold text-slate-400 tracking-widest uppercase">Academics</div>
          <ul className="flex flex-col px-3 gap-0.5">
            {/* Enrol & Manage Expandable */}
            <li>
              <button
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded hover:bg-slate-50 hover:text-on-surface transition-all"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-slate-500" />
                  <span>Enrol & Manage</span>
                </div>
                {academicsOpen ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
              </button>

              {academicsOpen && (
                <ul className="ml-7 mt-0.5 flex flex-col gap-0.5 border-l border-slate-200 pl-2">
                  <li>
                    <button
                      onClick={() => handleTabClick("courses")}
                      className={`w-full text-left px-3 py-2 rounded transition-all ${
                        activeTab === "courses"
                          ? "bg-[#e7eeff] text-[#002a5c] font-semibold"
                          : "hover:bg-slate-50 hover:text-on-surface text-slate-600"
                      }`}
                    >
                      Courses
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleTabClick("programs")}
                      className={`w-full text-left px-3 py-2 rounded transition-all ${
                        activeTab === "programs"
                          ? "bg-[#e7eeff] text-[#002a5c] font-semibold"
                          : "hover:bg-slate-50 hover:text-on-surface text-slate-600"
                      }`}
                    >
                      Programs
                    </button>
                  </li>
                </ul>
              )}
            </li>

            {/* Timetable */}
            <li>
              <button
                onClick={() => handleTabClick("timetable")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all ${
                  activeTab === "timetable"
                    ? "bg-[#e7eeff] text-[#002a5c] font-semibold border-l-4 border-acorn-blue"
                    : "hover:bg-slate-50 hover:text-on-surface"
                }`}
              >
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Timetable & Exams</span>
              </button>
            </li>

            {/* Academic History */}
            <li>
              <button
                onClick={() => handleTabClick("history")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all ${
                  activeTab === "history"
                    ? "bg-[#e7eeff] text-[#002a5c] font-semibold border-l-4 border-acorn-blue"
                    : "hover:bg-slate-50 hover:text-on-surface"
                }`}
              >
                <History className="w-4 h-4 text-slate-500" />
                <span>Academic History</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Finances Section */}
        <div className="flex flex-col gap-1">
          <div className="px-6 text-[10px] font-bold text-slate-400 tracking-widest uppercase">Finances</div>
          <ul className="flex flex-col px-3 gap-0.5">
            {/* Financial Account */}
            <li>
              <button
                onClick={() => handleTabClick("finances")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all ${
                  activeTab === "finances"
                    ? "bg-[#e7eeff] text-[#002a5c] font-semibold border-l-4 border-acorn-blue"
                    : "hover:bg-slate-50 hover:text-on-surface"
                }`}
              >
                <DollarSign className="w-4 h-4 text-slate-500" />
                <span>Financial Account</span>
              </button>
            </li>

            {/* Make a Payment */}
            <li>
              <button
                onClick={() => handleTabClick("payment")}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all ${
                  activeTab === "payment"
                    ? "bg-[#e7eeff] text-[#002a5c] font-semibold border-l-4 border-acorn-blue"
                    : "hover:bg-slate-50 hover:text-on-surface"
                }`}
              >
                <CreditCard className="w-4 h-4 text-slate-500" />
                <span>Make a Payment</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Portal links */}
        <div className="flex flex-col gap-1 mt-auto">
          <div className="px-6 text-[10px] font-bold text-slate-400 tracking-widest uppercase">External portals</div>
          <ul className="flex flex-col px-3 gap-0.5">
            <li>
              <a
                href="https://q.utoronto.ca/"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between px-3 py-2.5 rounded hover:bg-slate-50 hover:text-on-surface transition-all text-slate-600"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <span>Quercus</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </li>
          </ul>
        </div>

      </nav>

      {/* Logout footer */}
      <div className="p-4 border-t border-[#dde3ed] bg-slate-50">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded border border-slate-200 bg-white hover:bg-red-50 hover:text-red-700 hover:border-red-200 text-slate-600 font-semibold transition-all text-xs active:translate-y-[1px]"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
