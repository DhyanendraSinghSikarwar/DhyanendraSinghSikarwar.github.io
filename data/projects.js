// Projects Data — sourced from Dhyanendra's resume (Projects section)
// Each entry: id, title, period (optional), tags (tech stack pills), summary, highlights (bullets), link (optional)
const PROJECTS_DATA = [
  {
    id: "real-estate-intel",
    title: "ML-Powered Real Estate Intelligence Tool",
    icon: "home",
    tags: ["Python", "Scikit-learn", "Streamlit", "Plotly", "GridSearchCV"],
    summary: "End-to-end ML system for real-estate price prediction, market insight visualization, and property recommendation — built and shipped independently.",
    highlights: [
      "Developed a `Random Forest` price predictor (^R²=0.901^, ^MAE=0.116^) using target encoding, tuned via `GridSearchCV` (5-fold cross-validation)",
      "Built an interactive `Streamlit`/`Plotly` dashboard covering *246+* property listings; geospatial heatmaps revealed *25%* premium pricing in top sectors",
      "Created a hybrid recommender system combining `TF-IDF`, price scaling, and location proximity — generating top-5 property matches via weighted cosine similarity"
    ],
    link: ""
  }
];
