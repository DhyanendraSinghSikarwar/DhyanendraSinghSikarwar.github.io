// Overview Bio, Quick Facts and Competencies
const OVERVIEW_DATA = {
  bio: "Highly motivated Data Scientist with *3+ years* of experience in data analysis, machine learning, and database optimization. Currently at the ^Indian School of Business^, with prior experience building end-to-end ML pipelines and scalable APIs on European financial market data. Proficient in `Python`, `SQL`, and `AWS`, with hands-on expertise in predictive modeling, code optimization (achieving *50%+ processing time reduction*), and data pipeline engineering.",

  // Quick Facts sidepanel. NOTE: "Current Position" and "Experience" are computed automatically
  // from TRAJECTORY_DATA (current role + summed work duration) and are prepended at render time.
  quickFacts: [
    { label: "Core Expertise",   value: "Data Science & Machine Learning" },
    { label: "Education",        value: "M.Tech, MANIT Bhopal" },
    { label: "GATE 2017",        value: "AIR 3423 · Score 65.29/100" },
    { label: "Role Base",        value: "Indore, MP, India" }
  ],

  competencies: [
    {
      title: "Machine Learning",
      icon: "brain-circuit",
      description: "^Regression^, ^Classification^, ^Clustering^, Feature Engineering, Model Evaluation. End-to-end ML pipelines with `Scikit-learn`. Deployed models via `Pickle` for seamless serialization. ^GridSearchCV^ hyperparameter tuning."
    },
    {
      title: "Python & Data Engineering",
      icon: "code-2",
      description: "`Python`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Shell Scripting`. Built scalable data pipelines for ingestion, transformation, and analysis of high-volume datasets. *50%+* processing time reduction via ^code optimization^."
    },
    {
      title: "Web Development & APIs",
      icon: "server",
      description: "`Django`-based REST APIs with ^multiprocessing^ for *70% faster* execution. Migrated legacy processing logic to production-grade API services serving European financial markets."
    },
    {
      title: "Databases & Cloud",
      icon: "database",
      description: "`MySQL` optimization via indexing and query restructuring — *50%+* execution time improvement. `AWS` cloud services. `DBeaver`, `Linear`. Secure dashboard access administration."
    },
    {
      title: "Analytics & Visualization",
      icon: "bar-chart-2",
      description: "`Power BI`, `Matplotlib`, `Seaborn`, `Streamlit`, `Plotly`. Geospatial heatmaps and interactive dashboards. Comprehensive EDA on real-world datasets including *246+ real estate listings*."
    },
    {
      title: "Recommender & NLP Systems",
      icon: "sparkles",
      description: "Hybrid recommender system using ^TF-IDF^, price scaling, and ^location proximity^; top-5 property matches with ^weighted cosine similarity^. `MS Excel` analytics for trend detection and dashboard reporting."
    }
  ]
};
