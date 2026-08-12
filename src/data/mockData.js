export const studentInfo = {
  name: "Elias Miller",
  studentNumber: "1006548231",
  email: "elias.miller@mail.utoronto.ca",
  college: "UTM (University of Toronto Mississauga)",
  faculty: "Faculty of Arts and Science",
  program: "Computer Science (Specialist) - Year 3",
  status: "Registered",
  sessionalGpa: 3.85,
  cumulativeGpa: 3.79,
  creditsCompleted: 10.0,
  creditsRequired: 20.0
};

export const mockCourses = [
  {
    code: "CSC358H5",
    title: "Principles of Computer Networks",
    term: "Winter 2027 (S)",
    department: "Department of Mathematical & Computational Sciences",
    description: "Computer networks, with focus on Internet protocols and architectures. Topics include: physical layer standards, data link protocols (Ethernet, Wi-Fi), packet switching, routing algorithms, transport layer protocols (TCP, UDP), network applications, congestion control, and resource allocation.",
    syllabusUrl: "#",
    nextOffering: "Winter 2028 (S)",
    waitlistDeadline: "January 18, 2027",
    suggestedAlternatives: [
      { code: "CSC369H5", title: "Operating Systems" },
      { code: "CSC324H5", title: "Principles of Programming Languages" }
    ],
    pastInstructors: [
      { name: "Dr. Alan Turing", rating: 4.8, takeAgain: "94%", reviewsCount: 42 },
      { name: "Prof. Grace Hopper", rating: 4.9, takeAgain: "96%", reviewsCount: 38 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "91%",
      dropRate: "2.4 students/day"
    },
    sections: [
      {
        id: "csc358-lec0101",
        name: "LEC 0101",
        time: "Tuesday 3:00 PM - 5:00 PM",
        day: "Tuesday",
        startHour: 15,
        endHour: 17,
        location: "MN 1190",
        instructor: "Dr. Alan Turing",
        enrolled: 120,
        capacity: 120,
        waitlistCount: 11,
        restricted: true,
        restrictionDetail: {
          type: "Departmental Restriction",
          reason: "This lecture section is currently reserved for Computer Science specialists.",
          temporary: true,
          reviewDate: "July 24, 2026",
          contact: "Dept of Mathematical & Computational Sciences",
          openEnrolmentDate: "August 15, 2026 @ 9:00 AM"
        }
      },
      {
        id: "csc358-lec0102",
        name: "LEC 0102",
        time: "Tuesday 6:00 PM - 8:00 PM",
        day: "Tuesday",
        startHour: 18,
        endHour: 20,
        location: "MN 1190",
        instructor: "Dr. Alan Turing",
        enrolled: 85,
        capacity: 120,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "csc358-tut0101",
        name: "TUT 0101",
        time: "Thursday 1:00 PM - 2:00 PM",
        day: "Thursday",
        startHour: 13,
        endHour: 14,
        location: "MN 1220"
      },
      {
        id: "csc358-tut0102",
        name: "TUT 0102",
        time: "Thursday 2:00 PM - 3:00 PM",
        day: "Thursday",
        startHour: 14,
        endHour: 15,
        location: "MN 1220"
      }
    ]
  },
  {
    code: "CSC343H1",
    title: "Introduction to Databases",
    term: "Fall 2026 (F)",
    department: "Department of Computer Science",
    description: "Introduction to database management systems. The relational model, relational algebra, SQL query language, database design (entity-relationship modeling, normal forms), database application programming (databases on the Web, JDBC), transaction management fundamentals (concurrency, recovery).",
    syllabusUrl: "#",
    nextOffering: "Fall 2027 (F)",
    waitlistDeadline: "September 15, 2026",
    suggestedAlternatives: [
      { code: "CSC309H1", title: "Programming on the Web" },
      { code: "CSC343H5", title: "Introduction to Databases (UTM)" }
    ],
    pastInstructors: [
      { name: "Dr. Edgar Codd", rating: 4.6, takeAgain: "88%", reviewsCount: 55 },
      { name: "Prof. Donald Chamberlin", rating: 4.3, takeAgain: "82%", reviewsCount: 30 }
    ],
    waitlistAnalytics: {
      likelihood: "Medium",
      likelihoodColor: "text-amber-600 bg-amber-50 border-amber-200",
      historicalOdds: "68%",
      dropRate: "1.2 students/day"
    },
    sections: [
      {
        id: "csc343-lec0101",
        name: "LEC 0101",
        time: "Monday 10:00 AM - 12:00 PM",
        day: "Monday",
        startHour: 10,
        endHour: 12,
        location: "BA 1160",
        instructor: "Dr. Edgar Codd",
        enrolled: 250,
        capacity: 250,
        waitlistCount: 42,
        restricted: true,
        restrictionDetail: {
          type: "Priority Enrolment",
          reason: "Priority is given to Year 3/4 Computer Science students in the Faculty of Arts & Science.",
          temporary: true,
          reviewDate: "August 12, 2026",
          contact: "Undergraduate CS Office",
          openEnrolmentDate: "August 20, 2026 @ 9:00 AM"
        }
      }
    ],
    tutorials: [
      {
        id: "csc343-tut0101",
        name: "TUT 0101",
        time: "Wednesday 10:00 AM - 11:00 AM",
        day: "Wednesday",
        startHour: 10,
        endHour: 11,
        location: "BA 2220"
      }
    ]
  },
  {
    code: "CSC148H1",
    title: "Introduction to Computer Science",
    term: "Fall 2026 (F)",
    department: "Department of Computer Science",
    description: "Abstract data types and data structures (stacks, queues, lists, trees, graphs). Object-oriented programming: inheritance, interfaces, polymorphism. Recursion, algorithm analysis (big-O notation), sorting and searching. Software engineering concepts: testing, debugging.",
    syllabusUrl: "#",
    nextOffering: "Winter 2027 (S)",
    waitlistDeadline: "September 15, 2026",
    suggestedAlternatives: [
      { code: "CSC108H1", title: "Introduction to Computer Programming" },
      { code: "APS105H1", title: "Computer Fundamentals" }
    ],
    pastInstructors: [
      { name: "Prof. Campbell", rating: 4.5, takeAgain: "90%", reviewsCount: 112 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "95%",
      dropRate: "4.1 students/day"
    },
    sections: [
      {
        id: "csc148-lec0101",
        name: "LEC 0101",
        time: "Wednesday 2:00 PM - 4:00 PM",
        day: "Wednesday",
        startHour: 14,
        endHour: 16,
        location: "CON HALL",
        instructor: "Prof. Campbell",
        enrolled: 480,
        capacity: 500,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "csc148-tut0101",
        name: "TUT 0101",
        time: "Friday 11:00 AM - 12:00 PM",
        day: "Friday",
        startHour: 11,
        endHour: 12,
        location: "BA 3150"
      }
    ]
  },
  {
    code: "MAT137Y1",
    title: "Calculus with Proofs",
    term: "Full Year 2026-2027 (Y)",
    department: "Department of Mathematics",
    description: "A theoretical course in calculus, emphasizing proofs, conceptual understanding, and computational skills. Real numbers, limits, continuity, derivatives, Mean Value Theorem, Riemann integration, Fundamental Theorem of Calculus, sequences, series, Taylor series, vector calculus overview.",
    syllabusUrl: "#",
    nextOffering: "Full Year 2027-2028 (Y)",
    waitlistDeadline: "September 22, 2026",
    suggestedAlternatives: [
      { code: "MAT135H1", title: "Calculus I" },
      { code: "MAT157Y1", title: "Analysis I" }
    ],
    pastInstructors: [
      { name: "Alfonso Gracia-Saz", rating: 4.9, takeAgain: "98%", reviewsCount: 160 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "88%",
      dropRate: "3.5 students/day"
    },
    sections: [
      {
        id: "mat137-lec0101",
        name: "LEC 0101",
        time: "Monday & Wednesday 4:00 PM - 5:00 PM",
        day: "Monday",
        startHour: 16,
        endHour: 17,
        days: ["Monday", "Wednesday"],
        location: "MC 252",
        instructor: "Alfonso Gracia-Saz",
        enrolled: 180,
        capacity: 200,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "mat137-tut0101",
        name: "TUT 0101",
        time: "Friday 2:00 PM - 4:00 PM",
        day: "Friday",
        startHour: 14,
        endHour: 16,
        location: "MC 404"
      }
    ]
  },
  {
    code: "MAT223H1",
    title: "Linear Algebra I",
    term: "Fall 2026 (F)",
    department: "Department of Mathematics",
    description: "Systems of linear equations, matrix algebra, determinants, vector spaces, linear transformations, eigenvalues and eigenvectors, orthogonality, Gram-Schmidt process, and applications.",
    syllabusUrl: "#",
    nextOffering: "Winter 2027 (S)",
    waitlistDeadline: "September 15, 2026",
    suggestedAlternatives: [
      { code: "MAT240H1", title: "Algebra I" }
    ],
    pastInstructors: [
      { name: "Prof. Newton", rating: 4.2, takeAgain: "75%", reviewsCount: 65 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "92%",
      dropRate: "3.8 students/day"
    },
    sections: [
      {
        id: "mat223-lec0101",
        name: "LEC 0101",
        time: "Thursday 10:00 AM - 12:00 PM",
        day: "Thursday",
        startHour: 10,
        endHour: 12,
        location: "MP 102",
        instructor: "Prof. Newton",
        enrolled: 290,
        capacity: 300,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "mat223-tut0101",
        name: "TUT 0101",
        time: "Thursday 1:00 PM - 2:00 PM",
        day: "Thursday",
        startHour: 13,
        endHour: 14,
        location: "MP 204"
      }
    ]
  },
  {
    code: "MGT120H1",
    title: "Introduction to Financial Accounting",
    term: "Fall 2026 (F)",
    department: "Rotman Commerce",
    description: "An introduction to financial accounting for business. Covers general ledger entries, financial statements, cash flow statements, and analysis of corporate financial reports.",
    syllabusUrl: "#",
    nextOffering: "Winter 2027 (S)",
    waitlistDeadline: "September 15, 2026",
    suggestedAlternatives: [
      { code: "MGT120H5", title: "Financial Accounting UTM" }
    ],
    pastInstructors: [
      { name: "Prof. Ledger", rating: 4.1, takeAgain: "79%", reviewsCount: 40 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "85%",
      dropRate: "2.1 students/day"
    },
    sections: [
      {
        id: "mgt120-lec0101",
        name: "LEC 0101",
        time: "Wednesday 9:00 AM - 11:00 AM",
        day: "Wednesday",
        startHour: 9,
        endHour: 11,
        location: "WO 30",
        instructor: "Prof. Ledger",
        enrolled: 180,
        capacity: 200,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "mgt120-tut0101",
        name: "TUT 0101",
        time: "Friday 10:00 AM - 11:00 AM",
        day: "Friday",
        startHour: 10,
        endHour: 11,
        location: "WO 35"
      }
    ]
  },
  {
    code: "ECO101H1",
    title: "Principles of Microeconomics",
    term: "Fall 2026 (F)",
    department: "Department of Economics",
    description: "An introductory course describing the pricing system, supply and demand, cost curves, market configurations, monopoly power, and government interventions.",
    syllabusUrl: "#",
    nextOffering: "Winter 2027 (S)",
    waitlistDeadline: "September 15, 2026",
    suggestedAlternatives: [
      { code: "ECO105Y1", title: "Introduction to Economics" }
    ],
    pastInstructors: [
      { name: "Dr. Adam Smith", rating: 4.7, takeAgain: "92%", reviewsCount: 140 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "90%",
      dropRate: "2.9 students/day"
    },
    sections: [
      {
        id: "eco101-lec0101",
        name: "LEC 0101",
        time: "Tuesday 10:00 AM - 12:00 PM",
        day: "Tuesday",
        startHour: 10,
        endHour: 12,
        location: "WI 1016",
        instructor: "Dr. Adam Smith",
        enrolled: 320,
        capacity: 400,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "eco101-tut0101",
        name: "TUT 0101",
        time: "Thursday 4:00 PM - 5:00 PM",
        day: "Thursday",
        startHour: 16,
        endHour: 17,
        location: "WI 1018"
      }
    ]
  },
  {
    code: "MAT133Y1",
    title: "Calculus and Linear Algebra for Commerce",
    term: "Full Year 2026-2027 (Y)",
    department: "Department of Mathematics",
    description: "Mathematics for Rotman Commerce students. Optimization, functions of multiple variables, matrices, determinants, vector calculations, simple and compound interest.",
    syllabusUrl: "#",
    nextOffering: "Full Year 2027-2028 (Y)",
    waitlistDeadline: "September 22, 2026",
    suggestedAlternatives: [
      { code: "MAT135H1", title: "Calculus I" }
    ],
    pastInstructors: [
      { name: "Prof. Euler", rating: 4.4, takeAgain: "86%", reviewsCount: 90 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "87%",
      dropRate: "2.3 students/day"
    },
    sections: [
      {
        id: "mat133-lec0101",
        name: "LEC 0101",
        time: "Wednesday 12:00 PM - 2:00 PM",
        day: "Wednesday",
        startHour: 12,
        endHour: 14,
        location: "SS 2135",
        instructor: "TBA",
        enrolled: 280,
        capacity: 300,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "mat133-tut0101",
        name: "TUT 0101",
        time: "Friday 9:00 AM - 10:00 AM",
        day: "Friday",
        startHour: 9,
        endHour: 10,
        location: "SS 1085"
      }
    ]
  },
  {
    code: "STA260H5",
    title: "Probability & Statistics II",
    term: "Winter 2027 (S)",
    department: "Department of Mathematical & Computational Sciences",
    description: "Hypothesis testing, estimation, linear regression models, analysis of variance, non-parametric procedures, and maximum likelihood statistics.",
    syllabusUrl: "#",
    nextOffering: "Winter 2028 (S)",
    waitlistDeadline: "January 18, 2027",
    suggestedAlternatives: [
      { code: "STA258H5", title: "Probability & Statistics II UTM" }
    ],
    pastInstructors: [
      { name: "Prof. Bayes", rating: 4.6, takeAgain: "91%", reviewsCount: 45 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "92%",
      dropRate: "1.9 students/day"
    },
    sections: [
      {
        id: "sta260-lec0101",
        name: "LEC 0101",
        time: "Monday 2:00 PM - 4:00 PM",
        day: "Monday",
        startHour: 14,
        endHour: 16,
        location: "DH 2060",
        instructor: "Prof. Bayes",
        enrolled: 110,
        capacity: 150,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "sta260-tut0101",
        name: "TUT 0101",
        time: "Wednesday 3:00 PM - 4:00 PM",
        day: "Wednesday",
        startHour: 15,
        endHour: 16,
        location: "DH 3012"
      }
    ]
  },
  {
    code: "CSC108H5",
    title: "Introduction to Computer Programming",
    term: "Fall 2026 (F)",
    department: "Department of Mathematical & Computational Sciences",
    description: "An introduction to computer programming using Python. Covers variables, functions, conditional blocks, iteration, lists, dictionaries, string utilities, and files.",
    syllabusUrl: "#",
    nextOffering: "Winter 2027 (S)",
    waitlistDeadline: "September 15, 2026",
    suggestedAlternatives: [
      { code: "CSC108H1", title: "Introduction to Programming St.G" }
    ],
    pastInstructors: [
      { name: "Prof. Guido", rating: 4.8, takeAgain: "95%", reviewsCount: 210 }
    ],
    waitlistAnalytics: {
      likelihood: "High",
      likelihoodColor: "text-green-600 bg-green-50 border-green-200",
      historicalOdds: "94%",
      dropRate: "4.8 students/day"
    },
    sections: [
      {
        id: "csc108-lec0101",
        name: "LEC 0101",
        time: "Friday 9:00 AM - 11:00 AM",
        day: "Friday",
        startHour: 9,
        endHour: 11,
        location: "IB 120",
        instructor: "Prof. Guido",
        enrolled: 300,
        capacity: 350,
        waitlistCount: 0,
        restricted: false
      }
    ],
    tutorials: [
      {
        id: "csc108-tut0101",
        name: "TUT 0101",
        time: "Friday 11:00 AM - 12:00 PM",
        day: "Friday",
        startHour: 11,
        endHour: 12,
        location: "IB 130"
      }
    ]
  }
];

export const programBackups = {
  "Computer Science Specialist": [
    { code: "CSC358H5", sectionId: "csc358-lec0101", tutorialId: "csc358-tut0101" },
    { code: "CSC343H1", sectionId: "csc343-lec0101", tutorialId: "csc343-tut0101" },
    { code: "MAT223H1", sectionId: "mat223-lec0101", tutorialId: "mat223-tut0101" }
  ],
  "Commerce Specialist": [
    { code: "MGT120H1", sectionId: "mgt120-lec0101", tutorialId: "mgt120-tut0101" },
    { code: "ECO101H1", sectionId: "eco101-lec0101", tutorialId: "eco101-tut0101" },
    { code: "MAT133Y1", sectionId: "mat133-lec0101", tutorialId: "mat133-tut0101" }
  ],
  "Statistics Major": [
    { code: "STA260H5", sectionId: "sta260-lec0101", tutorialId: "sta260-tut0101" },
    { code: "MAT223H1", sectionId: "mat223-lec0101", tutorialId: "mat223-tut0101" },
    { code: "CSC108H5", sectionId: "csc108-lec0101", tutorialId: "csc108-tut0101" }
  ]
};

export const mockAcademicHistory = [
  {
    term: "Fall 2024",
    courses: [
      { code: "CSC108H5", title: "Introduction to Computer Programming", grade: "A", credits: 0.5, gpa: 4.0 },
      { code: "MAT102H5", title: "Mathematical Proofs", grade: "B+", credits: 0.5, gpa: 3.3 },
      { code: "MAT135H5", title: "Calculus I", grade: "A-", credits: 0.5, gpa: 3.7 },
      { code: "UTM115H5", title: "Communication in Science", grade: "A", credits: 0.5, gpa: 4.0 }
    ],
    sessionalGpa: 3.75
  },
  {
    term: "Winter 2025",
    courses: [
      { code: "CSC148H5", title: "Introduction to Computer Science", grade: "A+", credits: 0.5, gpa: 4.0 },
      { code: "MAT136H5", title: "Calculus II", grade: "A", credits: 0.5, gpa: 4.0 },
      { code: "MAT223H5", title: "Linear Algebra I", grade: "A-", credits: 0.5, gpa: 3.7 },
      { code: "STA256H5", title: "Probability & Statistics I", grade: "B", credits: 0.5, gpa: 3.0 }
    ],
    sessionalGpa: 3.68
  },
  {
    term: "Fall 2025",
    courses: [
      { code: "CSC207H5", title: "Software Design", grade: "A", credits: 0.5, gpa: 4.0 },
      { code: "CSC236H5", title: "Introduction to the Theory of Computation", grade: "A-", credits: 0.5, gpa: 3.7 },
      { code: "CSC258H5", title: "Computer Organization", grade: "A", credits: 0.5, gpa: 4.0 },
      { code: "STA260H5", title: "Probability & Statistics II", grade: "B+", credits: 0.5, gpa: 3.3 }
    ],
    sessionalGpa: 3.75
  },
  {
    term: "Winter 2026",
    courses: [
      { code: "CSC209H5", title: "Software Tools and Systems Programming", grade: "A+", credits: 0.5, gpa: 4.0 },
      { code: "CSC263H5", title: "Data Structures and Analysis", grade: "A", credits: 0.5, gpa: 4.0 },
      { code: "MAT244H5", title: "Ordinary Differential Equations", grade: "A-", credits: 0.5, gpa: 3.7 },
      { code: "MAT202H5", title: "Introduction to Discrete Mathematics", grade: "A", credits: 0.5, gpa: 4.0 }
    ],
    sessionalGpa: 3.92
  }
];

export const mockFinancialAccount = {
  balance: 3450.00,
  invoiceDate: "July 15, 2026",
  dueDate: "August 31, 2026",
  minimumToRegister: 0.00,
  incidentalFees: 720.00,
  tuitionFees: 2730.00,
  transactions: [
    { id: "tx001", date: "2026-07-16", description: "Tuition Fees - Fall 2026", amount: 2730.00, type: "charge" },
    { id: "tx002", date: "2026-07-16", description: "Incidental Fees - Fall 2026", amount: 720.00, type: "charge" },
    { id: "tx003", date: "2026-08-01", description: "OSAP Funding Pending Deferral", amount: 3450.00, type: "deferral" }
  ]
};

export const registrationFaqs = [
  {
    question: "When does priority registration lift for restricted courses?",
    answer: "Priority registration restriction periods end on defined dates depending on course codes and departments. For Fall term courses, priority restrictions typically lift around mid-to-late August. View the specific restriction lift date directly on the blocked course information popup inside ACORN."
  },
  {
    question: "How is the waitlist entry likelihood calculated?",
    answer: "Waitlist entry likelihood (High/Medium/Low) is an estimate based on historical enrollment trends of the previous three academic years, your active waitlist position, and the historical drop velocity (drops per day) for each specific course code."
  },
  {
    question: "What happens when my waitlist position shifts to a confirmed enrolment?",
    answer: "ACORN will automatically enrol you in the course and notify you via a top-bar alert notification. You do not need to manually accept; the course status will transition from 'Waitlisted' to 'Active Enrolled'."
  },
  {
    question: "Can I join multiple waitlists for the same requirement?",
    answer: "Yes, but U of T limits total active registrations plus waitlisted credits per semester (usually up to 3.0 credits per term). If you get enrolled from a waitlist that creates a conflict, you should drop your alternative course section promptly."
  }
];
