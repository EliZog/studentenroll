import React, { useState, useEffect } from "react";
import { X, Users, Calendar, AlertTriangle } from "lucide-react";

export default function CourseModal({ 
  isOpen, 
  onClose, 
  selectedCourse,
  onAddToCart, 
  onEnrol,
  onModifyEnrolment,
  onModifyWaitlist,
  onUpdateCart,
  enrolledCourses,
  waitlistedCourses,
  cartPlanA,
  cartPlanB,
  selectedPlan
}) {
  // Retain the last selected course during the fade-out transition
  const [activeCourse, setActiveCourse] = useState(null);

  // Form states
  const [selectedLec, setSelectedLec] = useState("");
  const [selectedTut, setSelectedTut] = useState("");
  const [error, setError] = useState("");

  // Collapsible Timetable state
  const [showModalTimetable, setShowModalTimetable] = useState(true);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  // Check if course already exists in enrolled, waitlist, or carts
  const enrolledInstance = activeCourse ? enrolledCourses.find(c => c.code === activeCourse.code) : null;
  const waitlistInstance = activeCourse ? waitlistedCourses.find(c => c.code === activeCourse.code) : null;
  const cartAInstance = activeCourse ? cartPlanA.find(c => c.code === activeCourse.code) : null;
  const cartBInstance = activeCourse ? cartPlanB.find(c => c.code === activeCourse.code) : null;

  const activeInstance = enrolledInstance || waitlistInstance || cartAInstance || cartBInstance;

  const currentSavedLec = activeInstance?.selectedSection?.id || "";
  const currentSavedTut = activeInstance?.selectedSection?.selectedTutorial?.id || "";

  const isChanged = (selectedLec !== currentSavedLec) || (selectedTut !== currentSavedTut);

  // Keep a local copy of the course so it doesn't disappear during exit animation
  useEffect(() => {
    if (selectedCourse) {
      setActiveCourse(selectedCourse);
      
      // Auto-select current configuration if user is already enrolled/waitlisted/carted
      const enrolledInst = enrolledCourses.find(c => c.code === selectedCourse.code);
      const waitlistInst = waitlistedCourses.find(c => c.code === selectedCourse.code);
      const cartAInst = cartPlanA.find(c => c.code === selectedCourse.code);
      const cartBInst = cartPlanB.find(c => c.code === selectedCourse.code);
      const inst = enrolledInst || waitlistInst || cartAInst || cartBInst;

      if (inst && inst.selectedSection) {
        setSelectedLec(inst.selectedSection.id || "");
        if (inst.selectedSection.selectedTutorial) {
          setSelectedTut(inst.selectedSection.selectedTutorial.id || "");
        } else {
          setSelectedTut("");
        }
      } else {
        setSelectedLec("");
        setSelectedTut("");
      }
      setError("");
    }
  }, [selectedCourse, enrolledCourses, waitlistedCourses, cartPlanA, cartPlanB]);

  // If there has never been an active course yet, don't render anything
  if (!activeCourse) return null;

  const handleAction = (actionType, plan = "A") => {
    // Find selected lecture section
    const lecObj = activeCourse.sections.find(s => s.id === selectedLec);
    if (!lecObj) {
      setError("Please select a Lecture section.");
      return;
    }

    // Find selected tutorial section (if course has tutorials)
    let tutObj = null;
    if (activeCourse.tutorials && activeCourse.tutorials.length > 0) {
      tutObj = activeCourse.tutorials.find(t => t.id === selectedTut);
      if (!tutObj) {
        setError("Please select a Tutorial/Practical section.");
        return;
      }
    }

    const sectionWithTut = {
      ...lecObj,
      selectedTutorial: tutObj
    };

    if (actionType === "cart") {
      onAddToCart(activeCourse, sectionWithTut, plan);
      onClose();
    } else if (actionType === "enrol") {
      onEnrol(activeCourse, sectionWithTut);
      onClose();
    }
  };

  // Modify / Save Changes action handlers
  const handleSaveChanges = () => {
    const lecObj = activeCourse.sections.find(s => s.id === selectedLec);
    if (!lecObj) {
      setError("Please select a Lecture section.");
      return;
    }

    let tutObj = null;
    if (activeCourse.tutorials && activeCourse.tutorials.length > 0) {
      tutObj = activeCourse.tutorials.find(t => t.id === selectedTut);
      if (!tutObj) {
        setError("Please select a Tutorial/Practical section.");
        return;
      }
    }

    const sectionWithTut = {
      ...lecObj,
      selectedTutorial: tutObj
    };

    if (enrolledInstance) {
      onModifyEnrolment(activeCourse.code, sectionWithTut);
    } else if (waitlistInstance) {
      onModifyWaitlist(activeCourse.code, sectionWithTut);
    } else if (cartAInstance) {
      onUpdateCart(activeCourse.code, sectionWithTut, "A");
    } else if (cartBInstance) {
      onUpdateCart(activeCourse.code, sectionWithTut, "B");
    }
    onClose();
  };

  // Compile timetable mapping for live preview inside modal
  const getModalEvents = () => {
    const events = [];

    // 1. Enrolled courses (shown as muted background, ignoring the current course to avoid self-conflict warnings)
    enrolledCourses.forEach(course => {
      if (course.code === activeCourse.code) return; // Prevent self-overlap bug

      const section = course.selectedSection;
      if (!section) return;

      const eventDetails = {
        code: course.code,
        name: section.name,
        color: "bg-blue-50/50 border-blue-200/50 text-[#002a5c]/60",
        isCurrentCourse: false,
        isPreview: false
      };

      if (section.days) {
        section.days.forEach(day => {
          events.push({ ...eventDetails, day, start: section.startHour, end: section.endHour });
        });
      } else {
        events.push({ ...eventDetails, day: section.day, start: section.startHour, end: section.endHour });
      }

      if (section.selectedTutorial) {
        const tut = section.selectedTutorial;
        events.push({
          code: course.code,
          name: tut.name,
          color: "bg-slate-50/50 border-slate-200/30 text-slate-400",
          day: tut.day,
          start: tut.startHour,
          end: tut.endHour,
          isCurrentCourse: false,
          isPreview: false
        });
      }
    });

    // 2. Cart courses (Plan A or B based on active cart tab context, ignoring current course to avoid self-conflict)
    const activeCart = selectedPlan === "A" ? cartPlanA : cartPlanB;
    const cartColor = selectedPlan === "A"
      ? "bg-purple-50/50 border-purple-200/50 text-purple-800/60"
      : "bg-emerald-50/50 border-emerald-200/50 text-emerald-800/60";

    activeCart.forEach(course => {
      if (course.code === activeCourse.code) return; // Prevent self-overlap bug

      const section = course.selectedSection;
      if (!section) return;

      const eventDetails = {
        code: course.code,
        name: section.name,
        color: cartColor,
        isCurrentCourse: false,
        isPreview: false
      };

      if (section.days) {
        section.days.forEach(day => {
          events.push({ ...eventDetails, day, start: section.startHour, end: section.endHour });
        });
      } else {
        events.push({ ...eventDetails, day: section.day, start: section.startHour, end: section.endHour });
      }

      if (section.selectedTutorial) {
        const tut = section.selectedTutorial;
        events.push({
          code: course.code,
          name: tut.name,
          color: "bg-slate-50/50 border-slate-200/30 text-slate-400",
          day: tut.day,
          start: tut.startHour,
          end: tut.endHour,
          isCurrentCourse: false,
          isPreview: false
        });
      }
    });

    // 3. Live configuration preview blocks (Lecture & Tutorial selected in form)
    const lecObj = activeCourse.sections.find(s => s.id === selectedLec);
    if (lecObj) {
      const lecDetails = {
        code: activeCourse.code,
        name: `${lecObj.name} (Preview)`,
        color: "bg-amber-100 border-amber-500 border-dashed text-amber-900 font-bold",
        isCurrentCourse: true,
        isPreview: true,
        start: lecObj.startHour,
        end: lecObj.endHour
      };

      if (lecObj.days) {
        lecObj.days.forEach(day => {
          events.push({ ...lecDetails, day });
        });
      } else {
        events.push({ ...lecDetails, day: lecObj.day });
      }
    }

    if (activeCourse.tutorials) {
      const tutObj = activeCourse.tutorials.find(t => t.id === selectedTut);
      if (tutObj) {
        events.push({
          code: activeCourse.code,
          name: `${tutObj.name} (Preview)`,
          color: "bg-amber-50 border-amber-400 border-dashed text-amber-800 font-bold",
          day: tutObj.day,
          start: tutObj.startHour,
          end: tutObj.endHour,
          isCurrentCourse: true,
          isPreview: true
        });
      }
    }

    return events;
  };

  const modalEvents = getModalEvents();

  const getEventForCell = (day, hour) => {
    const cellEvents = modalEvents.filter(e => e.day === day && hour >= e.start && hour < e.end);
    if (cellEvents.length === 0) return null;

    // Conflict detection: preview slot overlaps active classes
    if (cellEvents.length > 1) {
      const preview = cellEvents.find(e => e.isPreview);
      const background = cellEvents.find(e => !e.isPreview);
      return {
        code: "CONFLICT",
        name: `Overlaps ${background?.code}`,
        color: "bg-red-100 border-red-500 text-red-700 border-2 font-bold animate-pulse text-[8px]",
        start: Math.min(...cellEvents.map(e => e.start)),
        end: Math.max(...cellEvents.map(e => e.end))
      };
    }

    return cellEvents[0];
  };

  return (
    <div 
      className={`fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-gutter transition-all duration-300 ease-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop blur overlay */}
      <div 
        className={`absolute inset-0 bg-[#263143]/60 backdrop-blur-overlay transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Container: width scale and slide transitions */}
      <div 
        className={`bg-white w-full max-w-6xl rounded-xl modal-shadow flex flex-col h-[85vh] overflow-hidden relative z-10 transition-all duration-300 ease-out transform ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-container-padding py-4 border-b border-[#dde3ed] shrink-0 bg-white z-10">
          <h2 className="font-bold text-[#002a5c] text-lg">Select Sections</h2>
          
          <div className="flex items-center gap-4">
            {/* Show/Hide Timetable Toggle Control */}
            <button
              onClick={() => setShowModalTimetable(!showModalTimetable)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs transition-colors bg-white shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-acorn-blue" />
              <span>{showModalTimetable ? "Hide Timetable" : "Show Timetable"}</span>
            </button>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two column split */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Column 1: Course Selection Form - Sized w-[380px] when open, engulfs to w-full when closed */}
          <div 
            className={`flex flex-col overflow-hidden shrink-0 bg-white transition-all duration-300 ease-in-out ${
              showModalTimetable ? "w-[380px]" : "w-full"
            }`}
          >
            {/* Course Header */}
            <div className="p-5 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#002a5c]">{activeCourse.code}</h3>
                <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-500 text-[8px] font-bold tracking-wider">
                  {activeCourse.term}
                </span>
              </div>
              <h4 className="font-bold text-slate-700 text-xs mt-0.5">{activeCourse.title}</h4>
              <p className="text-[9px] text-slate-400 mt-0.5">{activeCourse.department}</p>
            </div>

            {/* Form Body (Scrollable) */}
            <div className="p-5 overflow-y-auto custom-scrollbar flex-1 flex flex-col gap-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-2.5 rounded shrink-0">
                  {error}
                </div>
              )}

              {/* Status Banner Notification - Enrolled */}
              {enrolledInstance && (
                <div className="bg-green-50 border border-green-200 text-green-800 text-xs p-3.5 rounded-lg flex flex-col gap-1 shrink-0">
                  <div className="font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 block animate-pulse"></span>
                    <span>Currently Enrolled</span>
                  </div>
                  <p className="text-[11px] text-green-700 font-medium">
                    You are registered in lecture section <b>{enrolledInstance.selectedSection?.name}</b>
                    {enrolledInstance.selectedSection?.selectedTutorial ? ` and tutorial section ${enrolledInstance.selectedSection.selectedTutorial.name}` : ''}.
                    {isChanged && <span className="text-amber-700 block mt-1 font-bold">⚠️ You have selected different sections. Click "Save Changes" below to update your enrolment.</span>}
                  </p>
                </div>
              )}

              {/* Status Banner Notification - Waitlisted */}
              {waitlistInstance && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3.5 rounded-lg flex flex-col gap-1 shrink-0">
                  <div className="font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block animate-pulse"></span>
                    <span>Currently Waitlisted (Position #{waitlistInstance.waitlistPosition})</span>
                  </div>
                  <p className="text-[11px] text-amber-700 font-medium">
                    You are waitlisted for lecture section <b>{waitlistInstance.selectedSection?.name}</b>
                    {waitlistInstance.selectedSection?.selectedTutorial ? ` and tutorial section ${waitlistInstance.selectedSection.selectedTutorial.name}` : ''}.
                    {isChanged && <span className="text-amber-800 block mt-1 font-bold">⚠️ You have selected different sections. Click "Modify Waitlist" below to update your choice.</span>}
                  </p>
                </div>
              )}

              {/* Status Banner Notification - Cart (Plan A or B) */}
              {(cartAInstance || cartBInstance) && (
                <div className="bg-purple-50 border border-purple-200 text-purple-800 text-xs p-3.5 rounded-lg flex flex-col gap-1 shrink-0">
                  <div className="font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500 block animate-pulse"></span>
                    <span>Pending in Cart (Plan {cartAInstance ? "A" : "B"})</span>
                  </div>
                  <p className="text-[11px] text-purple-700 font-medium">
                    This course is in your Cart.
                    {isChanged && <span className="text-purple-800 block mt-1 font-bold">⚠️ Click "Update Cart" below to save section modifications.</span>}
                  </p>
                </div>
              )}

              {/* Course Description */}
              <div className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded">
                {activeCourse.description}
              </div>

              {/* Lecture Radio Select */}
              <div className="flex flex-col gap-2">
                <h5 className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">Select Lecture Section</h5>
                <div className="flex flex-col gap-2">
                  {activeCourse.sections.map(section => (
                    <label 
                      key={section.id}
                      className={`border rounded-lg p-3 flex items-start gap-2.5 cursor-pointer transition-all hover:bg-slate-50/50 ${
                        selectedLec === section.id 
                          ? "border-acorn-blue bg-blue-50/10 shadow-xs" 
                          : "border-slate-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name="lecture"
                        value={section.id}
                        checked={selectedLec === section.id}
                        onChange={() => setSelectedLec(section.id)}
                        className="mt-1 text-acorn-blue focus:ring-acorn-blue"
                      />
                      <div className="flex-1 flex justify-between items-start gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs text-slate-800">{section.name}</span>
                            {section.restricted && (
                              <span className="px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-100 text-[8px] font-bold uppercase">
                                Restricted
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 mt-1">{section.time}</p>
                          <p className="text-[9px] text-slate-400 mt-0.5">{section.location} • {section.instructor}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1 justify-end">
                            <Users className="w-3 h-3 text-slate-400" />
                            <span>{section.enrolled}/{section.capacity}</span>
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tutorial/Practical Radio Select */}
              {activeCourse.tutorials && activeCourse.tutorials.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h5 className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">Select Practical / Tutorial Section</h5>
                  <div className="flex flex-col gap-2">
                    {activeCourse.tutorials.map(tut => (
                      <label 
                        key={tut.id}
                        className={`border rounded-lg p-3 flex items-start gap-2.5 cursor-pointer transition-all hover:bg-slate-50/50 ${
                          selectedTut === tut.id 
                            ? "border-acorn-blue bg-blue-50/10 shadow-xs" 
                            : "border-slate-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name="tutorial"
                          value={tut.id}
                          checked={selectedTut === tut.id}
                          onChange={() => setSelectedTut(tut.id)}
                          className="mt-1 text-acorn-blue focus:ring-acorn-blue"
                        />
                        <div className="flex-1 text-left">
                          <span className="font-bold text-xs text-slate-800">{tut.name}</span>
                          <p className="text-xs text-slate-600 mt-1">{tut.time}</p>
                          <p className="text-[9px] text-slate-400 mt-0.5">{tut.location}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Form Footer */}
            <div className="p-3.5 border-t border-slate-200 bg-slate-50 flex justify-end gap-2 shrink-0">
              {activeInstance ? (
                // Modify/Save Changes Button Mode
                <>
                  <button
                    onClick={onClose}
                    className="px-3.5 py-1.5 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded text-xs font-semibold bg-white transition-colors"
                  >
                    Close
                  </button>
                  <button
                    disabled={!isChanged}
                    onClick={handleSaveChanges}
                    className={`px-4 py-1.5 rounded font-bold text-xs shadow-xs transition-colors text-white ${
                      isChanged 
                        ? "bg-[#002a5c] hover:bg-[#001b3f]" 
                        : "bg-slate-300 cursor-not-allowed opacity-80"
                    }`}
                  >
                    {enrolledInstance ? "Save Changes" : waitlistInstance ? "Modify Waitlist" : "Update Cart"}
                  </button>
                </>
              ) : (
                // Default Add / Enrol Button Mode
                <>
                  <button
                    onClick={() => handleAction("cart", "A")}
                    className="px-3 py-1.5 border rounded font-semibold text-xs shadow-xs transition-colors bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    Add Plan A
                  </button>
                  <button
                    onClick={() => handleAction("cart", "B")}
                    className="px-3 py-1.5 border rounded font-semibold text-xs shadow-xs transition-colors bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    Add Plan B
                  </button>
                  <button
                    onClick={() => handleAction("enrol")}
                    className="px-3 py-1.5 rounded font-semibold text-xs shadow-xs transition-colors text-white bg-[#002a5c] hover:bg-[#001b3f]"
                  >
                    Enrol
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Column 2: Live Preview Timetable Grid - Sized flex-1 (engulfs space when visible, shrinks to w-0 when hidden) */}
          <div 
            className={`transition-all duration-300 ease-in-out flex flex-col overflow-hidden bg-slate-50/40 ${
              showModalTimetable ? "flex-1 opacity-100 border-l border-[#dde3ed]" : "w-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="p-4 border-b border-[#dde3ed] flex justify-between items-center shrink-0 bg-white">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-acorn-blue" />
                <span>Schedule Preview</span>
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex flex-wrap gap-2 text-[8px] font-bold">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-blue-50 border border-blue-200 block opacity-55"></span><span className="text-slate-500">Active Classes</span></span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-100 border border-amber-500 border-dashed block"></span><span className="text-slate-600">Selected Preview</span></span>
                </div>
                {modalEvents.some(e => e.code === "CONFLICT") && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-[10px] p-2 rounded flex items-center gap-1.5 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>Warning: Schedule Conflict!</span>
                  </div>
                )}
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded bg-white">
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <th className="w-12 p-1.5 text-[8px] font-bold text-slate-400 border-r border-slate-100">Time</th>
                      {days.map(d => (
                        <th key={d} className="p-1.5 text-[8px] font-bold text-slate-500 border-r border-slate-100 uppercase">{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {hours.map(hour => (
                      <tr key={hour} className="h-9 border-b border-slate-100">
                        <td className="p-1 text-[8px] font-bold text-slate-400 border-r border-slate-100 bg-slate-50/20 align-middle">
                          {hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`}
                        </td>
                        {days.map(day => {
                          const event = getEventForCell(day, hour);
                          const isStart = event && event.start === hour;
                          const duration = event ? event.end - event.start : 1;

                          if (event && !isStart) return null;

                          return (
                            <td
                              key={day}
                              rowSpan={isStart ? duration : 1}
                              className={`p-0.5 border-r border-slate-100 align-middle relative ${
                                event ? "" : "hover:bg-slate-50/10"
                              }`}
                            >
                              {event ? (
                                <div className={`h-full rounded px-1.5 py-1 flex flex-col justify-center text-[8px] font-bold leading-tight overflow-hidden ${event.color}`}>
                                  <span className="truncate">{event.code}</span>
                                  <span className="text-[7px] opacity-85 truncate">{event.name}</span>
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
          </div>

        </div>

      </div>
    </div>
  );
}
