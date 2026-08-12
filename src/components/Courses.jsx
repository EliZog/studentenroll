import React, { useState, useRef } from "react";
import { 
  Search, 
  ShoppingCart, 
  Trash2, 
  Sparkles
} from "lucide-react";
import CourseModal from "./CourseModal";
import RestrictionModal from "./RestrictionModal";
import { programBackups, mockCourses, registrationFaqs } from "../data/mockData";

export default function Courses({
  cartPlanA,
  setCartPlanA,
  cartPlanB,
  setCartPlanB,
  enrolledCourses,
  setEnrolledCourses,
  waitlistedCourses,
  setWaitlistedCourses
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("A"); // "A" or "B"

  // Ref to focus search input
  const searchInputRef = useRef(null);

  // Autocomplete state
  const [searchQuery, setSearchQuery] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Restriction Modal states (decoupled from search course modal selection)
  const [restrictionOpen, setRestrictionOpen] = useState(false);
  const [restrictionCourse, setRestrictionCourse] = useState(null);
  const [restrictionSection, setRestrictionSection] = useState(null);

  // Backup program select state
  const [selectedProgram, setSelectedProgram] = useState("Computer Science Specialist");

  // Get active cart
  const currentCart = selectedPlan === "A" ? cartPlanA : cartPlanB;
  const setCurrentCart = selectedPlan === "A" ? setCartPlanA : setCartPlanB;

  // Autocomplete filtered list
  const autocompleteCourses = mockCourses.filter(course => 
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Trigger search focus from cart button
  const handleFocusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      setShowAutocomplete(true);
    }
  };

  // Add course to specific cart plan
  const handleAddToCart = (course, sectionWithTut, plan) => {
    const targetCart = plan === "A" ? cartPlanA : cartPlanB;
    const setTargetCart = plan === "A" ? setCartPlanA : setCartPlanB;

    if (targetCart.some(c => c.code === course.code)) return;
    setTargetCart([...targetCart, { ...course, selectedSection: sectionWithTut }]);
  };

  // Enrol flow
  const handleEnrol = (course, sectionWithTut) => {
    if (sectionWithTut.restricted) {
      setRestrictionCourse(course);
      setRestrictionSection(sectionWithTut);
      setRestrictionOpen(true);
    } else {
      // Remove from carts
      setCartPlanA(cartPlanA.filter(c => c.code !== course.code));
      setCartPlanB(cartPlanB.filter(c => c.code !== course.code));
      
      setEnrolledCourses([...enrolledCourses, { ...course, selectedSection: sectionWithTut }]);
    }
  };

  // Modify existing enrolment section choices
  const handleModifyEnrolment = (courseCode, sectionWithTut) => {
    if (sectionWithTut.restricted) {
      const course = mockCourses.find(c => c.code === courseCode);
      setRestrictionCourse(course);
      setRestrictionSection(sectionWithTut);
      setRestrictionOpen(true);
    } else {
      setEnrolledCourses(enrolledCourses.map(c => 
        c.code === courseCode ? { ...c, selectedSection: sectionWithTut } : c
      ));
    }
  };

  // Modify existing waitlist section choices
  const handleModifyWaitlist = (courseCode, sectionWithTut) => {
    setWaitlistedCourses(waitlistedCourses.map(c => 
      c.code === courseCode ? { ...c, selectedSection: sectionWithTut } : c
    ));
  };

  // Update existing cart section choices
  const handleUpdateCart = (courseCode, sectionWithTut, plan) => {
    if (plan === "A") {
      setCartPlanA(cartPlanA.map(c => 
        c.code === courseCode ? { ...c, selectedSection: sectionWithTut } : c
      ));
    } else {
      setCartPlanB(cartPlanB.map(c => 
        c.code === courseCode ? { ...c, selectedSection: sectionWithTut } : c
      ));
    }
  };

  // Waitlist callback from modal
  const handleJoinWaitlist = () => {
    if (!restrictionCourse || !restrictionSection) return;

    // Remove from carts
    setCartPlanA(cartPlanA.filter(c => c.code !== restrictionCourse.code));
    setCartPlanB(cartPlanB.filter(c => c.code !== restrictionCourse.code));

    // Remove from enrolled courses if swapping to waitlist
    setEnrolledCourses(enrolledCourses.filter(c => c.code !== restrictionCourse.code));

    setWaitlistedCourses([
      ...waitlistedCourses,
      {
        ...restrictionCourse,
        selectedSection: restrictionSection,
        waitlistPosition: restrictionSection.waitlistCount + 1
      }
    ]);
  };

  // Remove action
  const handleRemove = (courseCode, type) => {
    if (type === "cart-A") {
      setCartPlanA(cartPlanA.filter(c => c.code !== courseCode));
    } else if (type === "cart-B") {
      setCartPlanB(cartPlanB.filter(c => c.code !== courseCode));
    } else if (type === "enrolled") {
      setEnrolledCourses(enrolledCourses.filter(c => c.code !== courseCode));
    } else if (type === "waitlisted") {
      setWaitlistedCourses(waitlistedCourses.filter(c => c.code !== courseCode));
    }
  };

  // Generate backup plan
  const handleGenerateBackup = () => {
    const backups = programBackups[selectedProgram];
    if (!backups) return;

    const newBackupCourses = [];
    backups.forEach(item => {
      // Find course in mockCourses
      const course = mockCourses.find(c => c.code === item.code);
      if (!course) return;

      // Find lecture section matching sectionId
      const section = course.sections.find(s => s.id === item.sectionId);
      if (!section) return;

      // Find tutorial section matching tutorialId (decoupled)
      const tutorial = course.tutorials?.find(t => t.id === item.tutorialId) || null;

      const sectionWithTut = {
        ...section,
        selectedTutorial: tutorial
      };

      // Ensure not already enrolled/waitlisted/in Cart B
      const isAlreadyAdded = enrolledCourses.some(c => c.code === course.code) ||
                            waitlistedCourses.some(c => c.code === course.code) ||
                            cartPlanB.some(c => c.code === course.code);

      if (!isAlreadyAdded) {
        newBackupCourses.push({
          ...course,
          selectedSection: sectionWithTut
        });
      }
    });

    setCartPlanB([...cartPlanB, ...newBackupCourses]);
  };

  return (
    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-50 font-sans text-on-surface">
      
      {/* Top Banner Control: Stacked search bar under title/subtitle */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4 shrink-0">
        <div>
          <h2 className="text-xl font-bold text-[#002a5c]">Course Enrolment</h2>
          <p className="text-xs text-slate-500 mt-1 font-medium">Manage enrolled courses and configure enrolment cart plans.</p>
        </div>
        
        {/* Search Bar - Vertically Stacked Underneath */}
        <div className="relative w-full max-w-md z-40">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search course code or title..."
              value={searchQuery}
              onFocus={() => setShowAutocomplete(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAutocomplete(true);
              }}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-acorn-blue text-xs transition-all bg-white font-medium shadow-xs"
            />
          </div>
          
          {/* Autocomplete Dropdown */}
          {showAutocomplete && searchQuery && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setShowAutocomplete(false)}></div>
              <div className="absolute left-0 top-full mt-1.5 w-full bg-white rounded-lg border border-slate-200 shadow-md py-1 z-40 overflow-y-auto max-h-64 custom-scrollbar text-xs font-semibold">
                {autocompleteCourses.length === 0 ? (
                  <div className="p-3 text-slate-400 text-center">No courses match query.</div>
                ) : (
                  autocompleteCourses.map(course => (
                    <button
                      key={course.code}
                      onClick={() => {
                        setSelectedCourse(course);
                        setIsSearchOpen(true);
                        setShowAutocomplete(false);
                        setSearchQuery("");
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-[#002a5c]">{course.code}</span>
                      <span className="text-[11.5px] text-slate-500 font-medium truncate">{course.title}</span>
                    </button>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Panel Content Split: Enrolled / Waitlisted / Cart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column: Enrolled & Waitlisted */}
        <div className="flex flex-col gap-6">
          
          {/* Enrolled Courses */}
          <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wider">
              Enrolled Courses ({enrolledCourses.length})
            </h3>
            {enrolledCourses.length === 0 ? (
              <div className="text-center text-xs text-slate-400 py-10 border border-dashed border-slate-200 rounded bg-slate-50/30">
                You are not enrolled in any courses for this term. Search courses above to begin.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {enrolledCourses.map(course => (
                  <div key={course.code} className="border border-green-200 bg-green-50/10 rounded-lg p-4 flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedCourse(course);
                            setIsSearchOpen(true);
                          }}
                          className="font-bold text-sm text-[#166534] hover:underline"
                        >
                          {course.code}
                        </button>
                        <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-[9px] font-bold uppercase tracking-wider">
                          Active Enrolled
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-700 text-xs mt-1">{course.title}</h4>
                      <p className="text-xs text-slate-500 mt-2 font-medium">
                        {course.selectedSection?.name} — {course.selectedSection?.time} ({course.selectedSection?.location})
                      </p>
                      {course.selectedSection?.selectedTutorial && (
                        <p className="text-xs text-slate-500 font-medium">
                          {course.selectedSection.selectedTutorial.name} — {course.selectedSection.selectedTutorial.time} ({course.selectedSection.selectedTutorial.location})
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleRemove(course.code, "enrolled")}
                      className="text-slate-400 hover:text-red-600 transition-colors p-1"
                      aria-label="Drop course"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Waitlisted Courses */}
          <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-wider">
              Waitlisted Courses ({waitlistedCourses.length})
            </h3>
            {waitlistedCourses.length === 0 ? (
              <div className="text-center text-xs text-slate-400 py-10 border border-dashed border-slate-200 rounded bg-slate-50/30">
                No waitlisted courses.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {waitlistedCourses.map(course => (
                  <div key={course.code} className="border border-amber-200 bg-amber-50/10 rounded-lg p-4 flex flex-col gap-3 relative">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedCourse(course);
                              setIsSearchOpen(true);
                            }}
                            className="font-bold text-sm text-amber-700 hover:underline"
                          >
                            {course.code}
                          </button>
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold uppercase tracking-wider">
                            Waitlist #{course.waitlistPosition}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-700 text-xs mt-1">{course.title}</h4>
                        <p className="text-xs text-slate-500 mt-2 font-medium">
                          {course.selectedSection?.name} — {course.selectedSection?.time} ({course.selectedSection?.location})
                        </p>
                        {course.selectedSection?.selectedTutorial && (
                          <p className="text-xs text-slate-500 font-medium">
                            {course.selectedSection.selectedTutorial.name} — {course.selectedSection.selectedTutorial.time} ({course.selectedSection.selectedTutorial.location})
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemove(course.code, "waitlisted")}
                        className="text-slate-400 hover:text-red-600 transition-colors p-1"
                        aria-label="Remove waitlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Waitlist Probability & Analytics Widget */}
                    {course.waitlistAnalytics && (
                      <div className="pt-3.5 border-t border-amber-100 flex flex-wrap gap-x-4 gap-y-2 text-[10.5px] font-semibold text-slate-700">
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 font-medium">Odds of entry:</span>
                          <span className={`px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider ${course.waitlistAnalytics.likelihoodColor}`}>
                            {course.waitlistAnalytics.likelihood} ({course.waitlistAnalytics.historicalOdds})
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 font-medium">Drop Rate:</span>
                          <span className="text-slate-600 font-bold">{course.waitlistAnalytics.dropRate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-slate-400 font-medium">Deadline:</span>
                          <span className="text-slate-600 font-bold">{course.waitlistDeadline}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Enrolment Cart (Plan A & B) & Backup Planner */}
        <div className="flex flex-col gap-6">
          
          {/* Enrolment Cart Container */}
          <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm flex flex-col gap-4">
            
            {/* Cart Header with Plan A & B Tabs */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <ShoppingCart className="w-4 h-4 text-acorn-blue" />
                <span>Enrolment Cart</span>
              </h3>
              
              <div className="flex bg-slate-100 p-0.5 rounded border border-slate-200">
                <button
                  onClick={() => setSelectedPlan("A")}
                  className={`px-4 py-1 rounded text-xs font-bold transition-all ${
                    selectedPlan === "A"
                      ? "bg-white text-acorn-blue shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Plan A (Primary)
                </button>
                <button
                  onClick={() => setSelectedPlan("B")}
                  className={`px-4 py-1 rounded text-xs font-bold transition-all ${
                    selectedPlan === "B"
                      ? "bg-white text-acorn-blue shadow-xs"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Plan B (Backup)
                </button>
              </div>
            </div>

            {/* Cart list items */}
            {currentCart.length === 0 ? (
              <div className="text-center text-xs text-slate-400 py-12 border border-dashed border-slate-200 rounded bg-slate-50/20 flex flex-col gap-3 justify-center items-center">
                <span>Your Enrolment Cart for Plan {selectedPlan} is currently empty.</span>
                <button
                  onClick={handleFocusSearch}
                  className="px-5 py-2 bg-[#002a5c] hover:bg-[#001b3f] text-white rounded text-xs font-bold shadow-sm transition-all"
                >
                  Search & Add Course
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {currentCart.map(course => (
                  <div key={course.code} className="border border-slate-200 bg-slate-50/50 rounded-lg p-4 flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedCourse(course);
                            setIsSearchOpen(true);
                          }}
                          className="font-bold text-sm text-slate-800 hover:underline"
                        >
                          {course.code}
                        </button>
                        <span className="px-2 py-0.5 rounded bg-[#e7eeff] text-[#002a5c] text-[9px] font-bold uppercase tracking-wider">
                          Pending
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-700 text-xs mt-1">{course.title}</h4>
                      <p className="text-xs text-slate-500 mt-2 font-medium">
                        {course.selectedSection?.name} — {course.selectedSection?.time} ({course.selectedSection?.location})
                      </p>
                      {course.selectedSection?.selectedTutorial && (
                        <p className="text-xs text-slate-500 font-medium">
                          {course.selectedSection.selectedTutorial.name} — {course.selectedSection.selectedTutorial.time} ({course.selectedSection.selectedTutorial.location})
                        </p>
                      )}

                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => handleEnrol(course, course.selectedSection)}
                          className="px-3.5 py-1.5 bg-[#002a5c] hover:bg-[#001b3f] text-white rounded text-[10px] font-bold uppercase transition-colors shadow-xs"
                        >
                          Enrol Course
                        </button>
                        <button
                          onClick={() => handleRemove(course.code, `cart-${selectedPlan}`)}
                          className="px-3.5 py-1.5 border border-slate-200 hover:bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase bg-white transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Timetable Backup Planner Widget */}
            <div className="mt-4 border-t border-slate-100 pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Timetable Backup Planner Tool</span>
              </div>
              
              <div className="bg-[#fefce8] border border-[#fef08a] rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex-1">
                  <p className="font-semibold text-warning-text">Generate Recommended Cart Backup Plan</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Select a UofT program to automatically populate Plan B backup courses.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto items-center">
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="px-2 py-1.5 border border-[#fef08a] bg-white rounded text-xs focus:outline-none focus:ring-1 focus:ring-amber-400 font-semibold"
                  >
                    <option value="Computer Science Specialist">CS Specialist</option>
                    <option value="Commerce Specialist">Commerce Spec</option>
                    <option value="Statistics Major">Stats Major</option>
                  </select>
                  <button
                    onClick={handleGenerateBackup}
                    className="px-3 py-1.5 bg-[#854d0e] hover:bg-[#713f12] text-white font-bold rounded text-xs transition-colors shrink-0"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Collapsible FAQ Accordion Widget */}
      <div className="bg-white rounded-lg border border-[#dde3ed] p-5 shadow-sm shrink-0">
        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3 uppercase tracking-wider">
          Registration & Waitlist FAQ
        </h3>
        <div className="flex flex-col gap-3 mt-4">
          {registrationFaqs.map((faq, idx) => {
            const isFaqOpen = expandedFaq === idx;
            return (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden transition-all bg-white font-medium">
                <button
                  onClick={() => setExpandedFaq(isFaqOpen ? null : idx)}
                  className="w-full text-left px-4 py-3.5 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition-colors font-bold text-xs text-[#002a5c]"
                >
                  <span>{faq.question}</span>
                  <span className="text-slate-400 text-base leading-none font-semibold">{isFaqOpen ? "−" : "+"}</span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden text-xs text-slate-600 leading-relaxed ${
                    isFaqOpen ? "max-h-40 border-t border-slate-100 p-4 opacity-100 bg-[#fafcfd]/50" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Search Overlay Popup */}
      <CourseModal
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
          setTimeout(() => {
            setSelectedCourse(null);
          }, 300);
        }}
        selectedCourse={selectedCourse}
        onAddToCart={handleAddToCart}
        onEnrol={handleEnrol}
        onModifyEnrolment={handleModifyEnrolment}
        onModifyWaitlist={handleModifyWaitlist}
        onUpdateCart={handleUpdateCart}
        enrolledCourses={enrolledCourses}
        waitlistedCourses={waitlistedCourses}
        cartPlanA={cartPlanA}
        cartPlanB={cartPlanB}
        selectedPlan={selectedPlan}
      />

      {/* Restriction Modal Overlay */}
      <RestrictionModal
        isOpen={restrictionOpen}
        onClose={() => {
          setRestrictionOpen(false);
          setRestrictionCourse(null);
          setRestrictionSection(null);
        }}
        onJoinWaitlist={handleJoinWaitlist}
        course={restrictionCourse}
        section={restrictionSection}
      />

    </div>
  );
}
