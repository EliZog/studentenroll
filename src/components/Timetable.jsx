import React, { useState } from "react";

export default function Timetable({ 
  enrolledCourses, 
  waitlistedCourses,
  showWaitlistOnSchedule,
  setShowWaitlistOnSchedule,
  cartPlanA,
  cartPlanB
}) {
  const [activeScheduleView, setActiveScheduleView] = useState("enrolled"); // "enrolled", "planA", "planB"
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  // Helper to convert 24h to 12h label
  const getHourLabel = (h) => {
    if (h === 12) return "12:00 PM";
    if (h > 12) return `${h - 12}:00 PM`;
    return `${h}:00 AM`;
  };

  // Compile all timetable events from enrolled, waitlisted, and cart preview courses
  const getEvents = () => {
    const events = [];
    
    // 1. Enrolled courses (Always included)
    const activeCourses = [
      ...enrolledCourses.map(c => ({ ...c, status: "Enrolled" }))
    ];

    // 2. Add Cart courses based on selected view
    if (activeScheduleView === "planA" && cartPlanA) {
      activeCourses.push(...cartPlanA.map(c => ({ ...c, status: "Cart A" })));
    } else if (activeScheduleView === "planB" && cartPlanB) {
      activeCourses.push(...cartPlanB.map(c => ({ ...c, status: "Cart B" })));
    }

    // 3. Add Waitlist courses if checked
    if (showWaitlistOnSchedule && waitlistedCourses) {
      activeCourses.push(...waitlistedCourses.map(c => ({ ...c, status: "Waitlisted" })));
    }

    activeCourses.forEach(course => {
      const section = course.selectedSection;
      if (!section) return;

      // Color maps
      let baseColor = "bg-blue-50 border-blue-200 text-[#002a5c]"; // Enrolled
      if (course.status === "Waitlisted") {
        baseColor = "bg-amber-50 border-amber-200 text-amber-900";
      } else if (course.status === "Cart A") {
        baseColor = "bg-purple-50 border-purple-200 text-purple-800";
      } else if (course.status === "Cart B") {
        baseColor = "bg-emerald-50 border-emerald-200 text-emerald-800";
      }

      // 1. Lecture event
      if (section.days) {
        // Multi-day meeting (e.g. MAT137 Mon & Wed)
        section.days.forEach(dayName => {
          events.push({
            code: course.code,
            type: "LEC",
            section: section.name,
            day: dayName,
            start: section.startHour,
            end: section.endHour,
            location: section.location,
            colorClass: baseColor,
            status: course.status
          });
        });
      } else {
        // Single-day meeting
        events.push({
          code: course.code,
          type: "LEC",
          section: section.name,
          day: section.day,
          start: section.startHour,
          end: section.endHour,
          location: section.location,
          colorClass: baseColor,
          status: course.status
        });
      }

      // 2. Tutorial event (if present)
      if (section.tutorial) {
        const tut = section.tutorial;
        
        let tutColor = "bg-slate-50 border-slate-200 text-slate-700";
        if (course.status === "Waitlisted") {
          tutColor = "bg-amber-50/50 border-amber-100 text-amber-700";
        } else if (course.status === "Cart A") {
          tutColor = "bg-purple-50/30 border-purple-100 text-purple-700";
        } else if (course.status === "Cart B") {
          tutColor = "bg-emerald-50/30 border-emerald-100 text-emerald-700";
        }

        events.push({
          code: course.code,
          type: "TUT",
          section: tut.name,
          day: tut.day,
          start: tut.startHour,
          end: tut.endHour,
          location: tut.location,
          colorClass: tutColor,
          status: course.status
        });
      }
    });

    return events;
  };

  const events = getEvents();

  // Find if an event matches a cell
  const getEventForCell = (day, hour) => {
    return events.find(e => e.day === day && hour >= e.start && hour < e.end);
  };

  return (
    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-50 font-sans text-on-surface">
      
      {/* Page Header with Filters */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#002a5c]">Weekly Timetable</h2>
            <p className="text-xs text-slate-500 mt-1">
              Select calendar views to preview different enrolment plans alongside registered courses.
            </p>
          </div>
          <div className="flex items-center gap-2 border border-slate-200 rounded px-3 py-2 bg-slate-50 shrink-0">
            <input
              id="waitlistToggleMain"
              type="checkbox"
              checked={showWaitlistOnSchedule}
              onChange={(e) => setShowWaitlistOnSchedule(e.target.checked)}
              className="rounded text-acorn-blue focus:ring-acorn-blue w-4 h-4 cursor-pointer"
            />
            <label htmlFor="waitlistToggleMain" className="text-xs font-semibold text-slate-600 select-none cursor-pointer">
              Show Waitlisted Courses
            </label>
          </div>
        </div>

        {/* Timetable view segmented options */}
        <div className="flex border-t border-slate-100 pt-3">
          <div className="flex bg-slate-100 p-0.5 rounded border border-slate-200">
            <button
              onClick={() => setActiveScheduleView("enrolled")}
              className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                activeScheduleView === "enrolled"
                  ? "bg-white text-acorn-blue shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Active Enrolled
            </button>
            <button
              onClick={() => setActiveScheduleView("planA")}
              className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                activeScheduleView === "planA"
                  ? "bg-white text-acorn-blue shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Preview Plan A
            </button>
            <button
              onClick={() => setActiveScheduleView("planB")}
              className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                activeScheduleView === "planB"
                  ? "bg-white text-acorn-blue shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Preview Plan B
            </button>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-4 shadow-sm overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          {/* Header Row */}
          <thead>
            <tr>
              <th className="w-20 p-2 text-center text-xs font-bold text-slate-400 border-b border-slate-200">Time</th>
              {days.map(day => (
                <th key={day} className="p-2 text-center text-xs font-bold text-slate-600 border-b border-slate-200 bg-slate-50/50 uppercase tracking-wider">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Calendar Body */}
          <tbody>
            {hours.map(hour => (
              <tr key={hour} className="h-16 group">
                {/* Time column */}
                <td className="p-2 text-center text-[11px] font-semibold text-slate-400 border-r border-slate-100 border-b border-slate-100 align-top pt-1 bg-slate-50/30">
                  {getHourLabel(hour)}
                </td>

                {/* Days columns */}
                {days.map(day => {
                  const event = getEventForCell(day, hour);
                  
                  // Check if this cell is the start of the event, so we can span it down
                  const isStart = event && event.start === hour;
                  const duration = event ? event.end - event.start : 1;

                  if (event && !isStart) {
                    // Return null because this slot is covered by rowSpan of the starting cell
                    return null;
                  }

                  return (
                    <td 
                      key={day} 
                      rowSpan={isStart ? duration : 1}
                      className={`p-1.5 border-r border-slate-100 border-b border-slate-100 align-top transition-colors ${
                        event ? "" : "hover:bg-slate-50/50"
                      }`}
                    >
                      {event ? (
                        <div className={`h-full rounded-md border p-2 flex flex-col justify-between overflow-hidden shadow-xs text-left ${event.colorClass}`}>
                          <div>
                            <div className="flex justify-between items-start gap-1">
                              <span className="font-bold text-xs">{event.code}</span>
                              <span className="text-[9px] font-bold uppercase px-1 rounded bg-white/60">
                                {event.type}
                              </span>
                            </div>
                            <p className="text-[10px] opacity-90 mt-0.5">{event.section}</p>
                          </div>
                          <div className="mt-2 flex justify-between items-center text-[9px] font-semibold">
                            <span>{event.location}</span>
                            {event.status === "Waitlisted" && (
                              <span className="text-amber-800 uppercase tracking-wider text-[8px] bg-amber-200/50 px-1 rounded font-bold">
                                Waitlist
                              </span>
                            )}
                            {event.status === "Cart A" && (
                              <span className="text-purple-800 uppercase tracking-wider text-[8px] bg-purple-200/50 px-1 rounded font-bold">
                                Plan A
                              </span>
                            )}
                            {event.status === "Cart B" && (
                              <span className="text-emerald-800 uppercase tracking-wider text-[8px] bg-emerald-200/50 px-1 rounded font-bold">
                                Plan B
                              </span>
                            )}
                          </div>
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
