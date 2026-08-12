import React from "react";
import { Lock, X, Clock, Calendar, Mail, AlertTriangle, ArrowRight } from "lucide-react";

export default function RestrictionModal({ isOpen, onClose, onJoinWaitlist, course, section }) {
  if (!isOpen) return null;

  // Fallbacks in case course or section is missing
  const courseCode = course?.code || "CSC358H5";
  const courseTitle = course?.title || "Principles of Computer Networks";
  const sectionName = section?.name || "LEC 0101";
  const sectionTime = section?.time || "Tuesday 3:00PM-5:00PM";
  const sectionLocation = section?.location || "MN 1190";
  const sectionInstructor = section?.instructor || "TBA";

  const restrictionDetail = section?.restrictionDetail || {
    type: "Departmental Restriction",
    reason: "This lecture section is currently reserved for Computer Science specialists.",
    temporary: true,
    reviewDate: "July 24, 2026",
    contact: "Dept of Mathematical & Computational Sciences"
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-gutter">
      {/* Dim/Blur Overlay */}
      <div 
        className="absolute inset-0 bg-[#263143]/60 backdrop-blur-overlay transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="bg-white w-full max-w-2xl rounded-xl modal-shadow flex flex-col max-h-[95vh] overflow-hidden relative z-10 animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-300 ease-out">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between px-container-padding py-6 border-b border-[#dde3ed]">
          <div className="flex items-center gap-3">
            <div className="bg-[#1a3c6e]/10 p-2 rounded-lg flex items-center justify-center">
              <Lock className="text-[#1a3c6e] w-6 h-6" />
            </div>
            <h2 className="font-sans font-bold text-[#002a5c] text-lg">Why can't I enrol?</h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal" 
            className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="px-container-padding py-6 overflow-y-auto custom-scrollbar flex-1 flex flex-col gap-6">
          {/* Course Context */}
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-slate-800 text-base">
              {courseCode} S (Winter) — {courseTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {sectionName} — {sectionTime}, {sectionLocation}, Instructor {sectionInstructor}.
            </p>
          </div>

          {/* Restriction Details Card */}
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
                {restrictionDetail.type}
              </span>
            </div>

            <div className="mt-1">
              <p className="text-sm text-slate-700 font-medium">
                {restrictionDetail.reason}
              </p>
            </div>

            <div className="h-px bg-slate-200 w-full my-1"></div>

            {/* Detail Rows */}
            <div className="flex flex-col gap-3">
              {restrictionDetail.temporary && (
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Temporary Restriction</span>
                </div>
              )}
              {restrictionDetail.reviewDate && (
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Restriction review: {restrictionDetail.reviewDate}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  Contact: {restrictionDetail.contact}
                  <a className="text-[#002a5c] hover:underline ml-1 font-semibold" href="#">Contact Dept</a>
                </div>
              </div>
            </div>
          </div>

          {/* Timetable Link */}
          <div>
            <a className="inline-flex items-center gap-1.5 text-acorn-blue text-xs font-bold hover:underline group" href="#">
              <span>View this section in Timetable Builder</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Warning Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 items-start mt-2">
            <AlertTriangle className="w-5 h-5 text-warning-text shrink-0 mt-0.5" />
            <p className="text-xs text-warning-text leading-relaxed">
              When this restriction lifts, enrolment is not guaranteed — the course may already be full. Consider a backup option.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-container-padding py-4 border-t border-slate-200 bg-slate-50 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:items-center rounded-b-xl">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded border border-slate-200 text-slate-600 font-semibold hover:bg-slate-100 transition-colors bg-white shadow-sm text-xs w-full sm:w-auto"
          >
            Close
          </button>
          <button 
            onClick={() => {
              onJoinWaitlist();
              onClose();
            }}
            className="px-5 py-2 rounded bg-[#002a5c] text-white font-semibold hover:bg-[#001b3f] transition-colors shadow-sm text-xs w-full sm:w-auto flex justify-center items-center"
          >
            Join Waitlist Instead
          </button>
        </div>
      </div>
    </div>
  );
}
