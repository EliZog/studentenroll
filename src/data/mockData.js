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
    sections: [
      {
        id: "csc358-lec0101",
        name: "LEC 0101",
        time: "Tuesday 3:00 PM - 5:00 PM",
        day: "Tuesday",
        startHour: 15,
        endHour: 17,
        location: "MN 1190",
        instructor: "TBA",
        enrolled: 120,
        capacity: 120,
        waitlistCount: 11,
        restricted: true,
        restrictionDetail: {
          type: "Departmental Restriction",
          reason: "This lecture section is currently reserved for Computer Science specialists.",
          temporary: true,
          reviewDate: "July 24, 2026",
          contact: "Dept of Mathematical & Computational Sciences"
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
          contact: "Undergraduate CS Office"
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
    sections: [
      {
        id: "mat223-lec0101",
        name: "LEC 0101",
        time: "Thursday 10:00 AM - 12:00 PM",
        day: "Thursday",
        startHour: 10,
        endHour: 12,
        location: "MP 102",
        instructor: "TBA",
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
    sections: [
      {
        id: "csc108-lec0101",
        name: "LEC 0101",
        time: "Friday 9:00 AM - 11:00 AM",
        day: "Friday",
        startHour: 9,
        endHour: 11,
        location: "IB 120",
        instructor: "TBA",
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
