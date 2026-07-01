// Overview Bio, Quick Facts and Competencies
const OVERVIEW_DATA = {
  bio: "Data scientist and ML engineer with *4+ years* of experience building end-to-end data pipelines, machine learning models, and full-stack applications. Currently working on European financial market data to determine ^Kreditz scores^ for loan eligibility. Combines strong `Python` and ML expertise with `Django`, `Flask`, and `MySQL` to deliver scalable, production-grade solutions. Reduced processing time by over *50%* through code optimization and multiprocessing architecture.",

  // Quick Facts sidepanel. NOTE: "Current Position" and "Experience" are computed automatically
  // from TRAJECTORY_DATA (current role + summed work duration) and are prepended at render time.
  quickFacts: [
    { label: "Core Expertise",   value: "Data Science & ML Engineering" },
    { label: "Education",        value: "M.Tech, NIT Bhopal" },
    { label: "GATE",             value: "AIR-3423 (Score 65.29/100)" },
    { label: "Role Base",        value: "Indore, MP, India" }
  ],

  competencies: [
    {
      title: "Data Science & Machine Learning",
      icon: "brain-circuit",
      description: "`Python`, `Pandas`, `NumPy`, `Scikit-learn`, `Matplotlib`, `Seaborn`, `Streamlit`. End-to-end ML pipelines, predictive analytics, classification models, and model performance optimization."
    },
    {
      title: "Web Development",
      icon: "code-2",
      description: "`Django`, `Flask`. REST API development with ^multiprocessing^ support. Migrated large categorization logic to a scalable Django API serving European financial markets."
    },
    {
      title: "Databases & Cloud",
      icon: "database",
      description: "`MySQL`, `MongoDB`, `AWS`, `Vertica`. Database ^indexing and optimization^ strategies that significantly reduce query execution time. End-to-end pipeline design for large dataset processing."
    },
    {
      title: "Data Engineering",
      icon: "workflow",
      description: "End-to-end data pipelines for ^large-scale dataset processing^. European financial market data handling for Sweden, Finland, Norway, and UK. Code optimization delivering *50%+* processing time reduction."
    },
    {
      title: "Analytics & Visualization",
      icon: "bar-chart-2",
      description: "`Power BI`, `Matplotlib`, `Seaborn`, `Streamlit`. Dashboard design, exploratory data analysis, and stakeholder-ready reports. Comprehensive `EDA` on real-world datasets."
    },
    {
      title: "Technical Writing",
      icon: "pen-line",
      description: "Published author on ^Medium^ covering Pandas optimization, MySQL performance tuning, Django ORM, and efficient Python practices. Making complex topics accessible to the engineering community."
    }
  ]
};
