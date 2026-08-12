import React from "react";
import { 
  Bell, 
  Calendar, 
  DollarSign, 
  GraduationCap, 
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock
} from "lucide-react";
import { studentInfo, mockFinancialAccount } from "../data/mockData";

export default function Dashboard({ setActiveTab, enrolledCount, waitlistedCount }) {
  // Helper to format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(val);
  };

  return (
    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-50 font-sans text-on-surface">
      
      {/* Top Banner Message */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#002a5c] leading-tight">
            Welcome back, {studentInfo.name}!
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {studentInfo.program} • Student ID: {studentInfo.studentNumber}
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab("courses")}
            className="px-4 py-2 bg-[#002a5c] hover:bg-[#001b3f] text-white text-xs font-semibold rounded shadow-sm transition-colors"
          >
            Enrol in Courses
          </button>
          <button 
            onClick={() => setActiveTab("finances")}
            className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold rounded shadow-sm transition-colors bg-white"
          >
            View Invoice
          </button>
        </div>
      </div>

      {/* Grid of Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Alerts & Messages (Main Wide Card) */}
        <div className="md:col-span-2 bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Bell className="w-5 h-5 text-acorn-blue" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Important Notifications</h3>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Notification 1 */}
            <div className="bg-amber-50 border border-amber-200 rounded p-4 flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-warning-text mt-0.5 shrink-0" />
              <div className="text-xs text-warning-text">
                <span className="font-bold">Course Enrolment Starts Soon:</span> Your enrolment window for the 2026-2027 Fall/Winter term begins on <span className="font-bold">July 14, 2026 at 9:00 AM</span>. Be sure to have your courses in your Enrolment Cart beforehand.
              </div>
            </div>

            {/* Notification 2 */}
            <div className="bg-blue-50 border border-blue-100 rounded p-4 flex gap-3 items-start">
              <DollarSign className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
              <div className="text-xs text-blue-800">
                <span className="font-bold">Fall 2026 Invoice Posted:</span> Your tuition invoice for Fall 2026 has been generated. The deadline for minimum payment to register or request tuition deferral is <span className="font-bold">August 31, 2026</span>.
              </div>
            </div>
          </div>
        </div>

        {/* Academic Summary Widget */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <TrendingUp className="w-5 h-5 text-acorn-blue" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Academic Record</h3>
          </div>
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <span className="text-xs text-slate-500 font-medium">Cumulative GPA</span>
              <span className="text-lg font-bold text-slate-800">{studentInfo.cumulativeGpa}</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <span className="text-xs text-slate-500 font-medium">Credits Completed</span>
              <span className="text-sm font-semibold text-slate-800">
                {studentInfo.creditsCompleted} / {studentInfo.creditsRequired} FCE
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Sessional GPA (Last Term)</span>
              <span className="text-sm font-semibold text-slate-800">{studentInfo.sessionalGpa}</span>
            </div>

            {/* Progress bar */}
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mb-1">
                <span>DEGREE PROGRESS</span>
                <span>50%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-acorn-blue rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Second Row Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Enrolled Courses widget */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <GraduationCap className="w-5 h-5 text-acorn-blue" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Course Summary</h3>
          </div>
          <div className="flex flex-col gap-4 flex-1 justify-between">
            <div className="flex justify-around items-center py-4 bg-slate-50 rounded">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#002a5c]">{enrolledCount}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Enrolled</div>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-700">{waitlistedCount}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Waitlisted</div>
              </div>
            </div>
            
            <button
              onClick={() => setActiveTab("courses")}
              className="mt-2 w-full py-2 bg-slate-100 hover:bg-[#e7eeff] hover:text-[#002a5c] text-slate-600 rounded text-xs font-semibold transition-all flex items-center justify-center gap-1 group"
            >
              <span>View Enrolment Cart</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Timetable widget */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Calendar className="w-5 h-5 text-acorn-blue" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Today's Timetable</h3>
          </div>
          <div className="flex flex-col gap-3 flex-1 justify-center">
            {enrolledCount === 0 && waitlistedCount === 0 ? (
              <div className="text-center text-xs text-slate-400 py-6">
                No classes scheduled for today.
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded border-l-4 border-acorn-blue">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-700">CSC358H5 LEC 0102</p>
                    <p className="text-slate-500">6:00 PM - 8:00 PM • MN 1190</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveTab("timetable")}
              className="w-full py-2 bg-slate-100 hover:bg-[#e7eeff] hover:text-[#002a5c] text-slate-600 rounded text-xs font-semibold transition-all flex items-center justify-center gap-1 group"
            >
              <span>Weekly Timetable</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Financial Widget */}
        <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <DollarSign className="w-5 h-5 text-acorn-blue" />
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Financial Overview</h3>
          </div>
          <div className="flex flex-col gap-3 flex-1 justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-slate-400 font-bold uppercase">Account Balance</span>
              <span className="text-2xl font-bold text-red-600 leading-none">
                {formatCurrency(mockFinancialAccount.balance)}
              </span>
              <span className="text-[10px] text-slate-400 mt-1">Due Date: {mockFinancialAccount.dueDate}</span>
            </div>

            <button
              onClick={() => setActiveTab("finances")}
              className="w-full py-2 bg-slate-100 hover:bg-[#e7eeff] hover:text-[#002a5c] text-slate-600 rounded text-xs font-semibold transition-all flex items-center justify-center gap-1 group"
            >
              <span>Detailed Account Invoice</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
