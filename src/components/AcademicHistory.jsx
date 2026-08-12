import React from "react";
import { mockAcademicHistory, studentInfo } from "../data/mockData";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function AcademicHistory() {
  return (
    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-50 font-sans text-on-surface">
      
      {/* Page Header */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#002a5c]">Academic History</h2>
          <p className="text-xs text-slate-500 mt-1">
            Official record of completed academic terms, grades, and grade point averages.
          </p>
        </div>
        <div className="flex gap-4 bg-slate-50 px-4 py-2 rounded border border-slate-200">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Cumulative GPA</span>
            <span className="text-lg font-bold text-slate-800">{studentInfo.cumulativeGpa}</span>
          </div>
          <div className="w-px bg-slate-200"></div>
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Credits Earned</span>
            <span className="text-lg font-bold text-slate-800">{studentInfo.creditsCompleted} FCE</span>
          </div>
        </div>
      </div>

      {/* Term history */}
      <div className="flex flex-col gap-6">
        {mockAcademicHistory.map((termData, termIdx) => (
          <div key={termIdx} className="bg-white rounded-lg border border-[#dde3ed] shadow-sm overflow-hidden">
            {/* Term Title Bar */}
            <div className="bg-slate-50 px-6 py-3 border-b border-[#dde3ed] flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-sm">{termData.term}</h3>
              <span className="text-xs text-slate-500 font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded">
                Sessional GPA: {termData.sessionalGpa}
              </span>
            </div>
            
            {/* Courses Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase">
                    <th className="px-6 py-3">Course Code</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3 text-center">Grade</th>
                    <th className="px-6 py-3 text-center">Credits</th>
                    <th className="px-6 py-3 text-center">GPA Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {termData.courses.map((course, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 text-slate-700">
                      <td className="px-6 py-3 font-bold text-slate-800">{course.code}</td>
                      <td className="px-6 py-3 font-medium">{course.title}</td>
                      <td className="px-6 py-3 text-center font-bold text-[#166534]">
                        {course.grade}
                      </td>
                      <td className="px-6 py-3 text-center font-semibold">{course.credits.toFixed(1)}</td>
                      <td className="px-6 py-3 text-center font-semibold">{course.gpa.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
