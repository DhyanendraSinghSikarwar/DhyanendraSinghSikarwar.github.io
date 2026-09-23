// Canned Q&A for the "Ask about my work" widget.
// Fully client-side (no API/backend) — keyword-matched against the visitor's question.
// Each entry: keywords (matched case-insensitively, substring match) + answer (plain text, formatText() markers allowed).
const CHATBOT_QUICK_QUESTIONS = [
  "What do you currently do?",
  "What are your core skills?",
  "Tell me about your projects",
  "How much experience do you have?",
  "What's your education?",
  "How can I contact you?"
];

const CHATBOT_QA = [
  {
    keywords: ["current", "currently", "now", "role", "job", "doing", "work at", "isb"],
    answer: "I'm currently a *Data Scientist (Manager)* at the ^Indian School of Business^, building ML-based lead scoring models for academic programs — covering feature engineering, model training, evaluation, and deployment."
  },
  {
    keywords: ["experience", "years", "how long", "background"],
    answer: "I have *5 years* of experience in machine learning, deep learning, and data analysis — spanning roles at ISB, CodeNote IT Solutions, and Netlink Soft."
  },
  {
    keywords: ["skill", "tech stack", "technologies", "tools", "stack", "expertise", "good at"],
    answer: "My core stack: `Python` (Pandas, NumPy, Scikit-learn), `SQL`, `AWS`, plus deep learning (`TensorFlow`, `PyTorch`), Generative AI (`LLMs`, `RAG`, `LangChain`), and MLOps (`Docker`, `MLflow`). I also work with `Django` APIs and `MySQL` optimization."
  },
  {
    keywords: ["project", "built", "built something", "portfolio project", "real estate"],
    answer: "My flagship project is an *ML-Powered Real Estate Intelligence Tool* — a Random Forest price predictor (R²=0.901) with a Streamlit/Plotly dashboard covering 246+ listings, plus a hybrid TF-IDF recommender system. Check the Projects tab for full details."
  },
  {
    keywords: ["education", "degree", "college", "university", "study", "studied", "gate", "manit", "lpu"],
    answer: "I hold an ^M.Tech in Industrial Design^ from MANIT Bhopal (qualified GATE 2017, AIR 3423) and a ^B.Tech in Mechanical Engineering^ from Lovely Professional University."
  },
  {
    keywords: ["contact", "reach", "email", "phone", "hire", "linkedin", "connect", "available", "opportunit"],
    answer: "Best way to reach me is email — dhyanendra.manit@gmail.com — or connect on LinkedIn. I'm open to select roles & collaborations; use the *Hire* button in the footer to start a conversation."
  },
  {
    keywords: ["ml", "machine learning", "model", "ai", "genai", "llm"],
    answer: "I work across the ML lifecycle — regression/classification/clustering, feature engineering, hyperparameter tuning (GridSearchCV), plus Generative AI: LLMs, RAG pipelines, and prompt engineering."
  },
  {
    keywords: ["codenote"],
    answer: "At CodeNote IT Solutions, I optimized MySQL queries (50%+ faster), built ML models for European financial market Kreditz scoring, and migrated legacy logic to Django APIs (70% faster with multiprocessing)."
  },
  {
    keywords: ["netlink"],
    answer: "At Netlink Soft, I worked as an Associate Data Analyst — building dashboard usage reports, ensuring data integrity for clients, and administering secure MySQL access."
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: "You can download my résumé using the \"Résumé (PDF)\" button in the header — it opens a customizable builder where you can pick sections and export as PDF or Word."
  }
];

// Fallback answer when nothing matches.
const CHATBOT_FALLBACK = "I don't have a canned answer for that yet — try one of the quick questions above, or reach out directly via the contact details in the footer.";
