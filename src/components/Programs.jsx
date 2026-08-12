import React from "react";
import { Award, BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { studentInfo } from "../data/mockData";

export default function Programs() {
  return (
    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-50 font-sans text-on-surface">
      
      {/* Page Header */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm">
        <h2 className="text-xl font-bold text-[#002a5c]">Subject POSt / Programs</h2>
        <p className="text-xs text-slate-500 mt-1">
          View your enrolled specialist, major, or minor programs of study.
        </p>
      </div>

      {/* Program Details Card */}
      <div className="bg-white rounded-lg border border-[#dde3ed] shadow-sm p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold tracking-wider">
                ASPECSPE1
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100">
                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                Active
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#002a5c] mt-2">Computer Science (Specialist)</h3>
            <p className="text-xs text-slate-400 mt-0.5">Faculty of Arts and Science • Year 3 Enrolment</p>
          </div>
          <div className="bg-slate-50 rounded p-3 border border-slate-200 text-center shrink-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Requirements Met</span>
            <span className="text-sm font-bold text-slate-700">7.5 / 12.0 Credits</span>
          </div>
        </div>

        {/* Requirements breakdown list */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Program Progress</h4>
          
          <div className="flex flex-col gap-2.5 text-xs">
            <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">1. Introduction to Programming (CSC108, CSC148)</span>
              <span className="font-bold text-green-700">Completed (1.0 Credit)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">2. Math Fundamentals (MAT102, MAT135, MAT136, MAT223)</span>
              <span className="font-bold text-green-700">Completed (2.0 Credits)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">3. Year 2 Core Systems & Theory (CSC207, CSC209, CSC236, CSC258, CSC263)</span>
              <span className="font-bold text-green-700">Completed (2.5 Credits)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded border border-slate-200">
              <span className="text-slate-600 font-medium">4. Year 3/4 Core Specialist Electives (including CSC358)</span>
              <span className="font-bold text-amber-700">In Progress (2.0 / 6.5 Credits)</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
