// Career Trajectory Timeline Data
const TRAJECTORY_DATA = [
  {
    id: "isb",
    role: "Data Scientist",   // ← Update this title if your ISB role has a different name
    company: "Indian School of Business",
    location: "Hyderabad, India",
    flag: "🇮🇳",
    period: "Sep 2025 - Present",
    type: "work",
    colors: { light: "#003B71", dark: "#4A90D9" },
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b2/Indian_School_of_Business_logo.svg",
    link: "https://www.isb.edu/",
    description: "Joined ISB's analytics function, contributing to ^data-driven decision-making^ and institutional analytics. Working alongside one of India's top business school communities.",
    highlights: []
  },
  {
    id: "codenote",
    role: "Data Analyst",
    company: "CodeNote It Sol Pvt Ltd",
    location: "Indore, India",
    flag: "🇮🇳",
    period: "Jan 2023 - Aug 2025",
    type: "work",
    colors: { light: "#7C3AED", dark: "#A78BFA" },
    logo: "",
    link: "",
    description: "Worked on European financial market data to determine ^Kreditz scores^ for loan eligibility across Sweden, Finland, Norway, and UK. Focused on code optimization, ML model development, and scalable API design.",
    highlights: [
      "Optimized complex `MySQL` queries using indexing and restructuring, improving execution time by *50%+*",
      "Reduced Python script processing time by *50%* by streamlining corporate categorization code",
      "Built scalable data pipelines for ingestion, transformation, and analysis of ^high-volume datasets^",
      "Developed and deployed ML models using `Scikit-learn` for predictive analytics",
      "Migrated legacy logic to `Django`-based APIs, leveraging ^multiprocessing^ for *70% faster* execution",
      "Deployed models using `Pickle` for seamless model serialization and production deployment"
    ]
  },
  {
    id: "netlink",
    role: "Associate Data Analyst",
    company: "Netlink Soft Pvt Ltd",
    location: "Indore, India",
    flag: "🇮🇳",
    period: "Jan 2022 - Dec 2022",
    type: "work",
    colors: { light: "#0284C7", dark: "#38BDF8" },
    logo: "",
    link: "",
    description: "Supported business intelligence operations through dashboard reporting, data quality management, and database access administration.",
    highlights: [
      "Created and analyzed dashboard usage reports; detected trends using `Excel` analytics",
      "Interfaced with clients to ensure ^data integrity^ and resolve discrepancies",
      "Administered access rights and roles via `MySQL` for secure dashboard operations"
    ]
  },
  {
    id: "manit",
    role: "M.Tech, Industrial Design",
    company: "Maulana Azad National Institute of Technology",
    location: "Bhopal, India",
    flag: "🇮🇳",
    period: "Aug 2018 - Nov 2020",
    type: "education",
    colors: { light: "#B91C1C", dark: "#F87171" },
    logo: "https://logo.clearbit.com/manit.ac.in",
    link: "https://www.manit.ac.in/",
    description: "Master of Technology in ^Industrial Design^ from one of India's premier National Institutes of Technology. Qualified `GATE 2017` with *AIR 3423* (score 65.29/100) for admission.",
    score: "GATE AIR 3423"
  },
  {
    id: "lpu",
    role: "B.Tech, Mechanical Engineering",
    company: "Lovely Professional University",
    location: "Jalandhar, India",
    flag: "🇮🇳",
    period: "Aug 2011 - Nov 2015",
    type: "education",
    colors: { light: "#D97706", dark: "#FBBF24" },
    logo: "https://logo.clearbit.com/lpu.in",
    link: "https://www.lpu.in/",
    description: "Bachelor of Technology in ^Mechanical Engineering^, building strong analytical and problem-solving foundations."
  }
];
