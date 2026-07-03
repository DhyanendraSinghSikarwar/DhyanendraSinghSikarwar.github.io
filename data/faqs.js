// FAQ Data
const FAQS_DATA = [
  {
    question: "Tell me about your most impressive project.",
    answer: "The ML-Powered Real Estate Intelligence Tool is probably the most complete end-to-end system I've built independently.<br><br>It has three layers: a *Random Forest* price predictor (R²=0.901, MAE=0.116) with target encoding and 5-fold GridSearchCV tuning; a `Streamlit`/`Plotly` dashboard over *246+ listings* with geospatial heatmaps that revealed *25% premium pricing* in top sectors; and a hybrid recommender system using ^TF-IDF^, price scaling, and location proximity to generate top-5 property matches via weighted cosine similarity.<br><br>Building all three layers — ML, visualization, and recommendation — into one cohesive tool is what made it interesting."
  },
  {
    question: "How did you achieve 50%+ processing time reduction at CodeNote?",
    answer: "Profile first, never guess. I used Python's cProfile and line_profiler to find where time was actually being spent — which was almost always not where people assumed.<br><br>The biggest wins came from three places: replacing row-wise iteration with vectorized `Pandas` and `NumPy` operations; restructuring the corporate categorization logic to eliminate nested conditionals and redundant computations; and migrating the core pipeline to a `Django` API with ^multiprocessing^ so jobs ran concurrently instead of sequentially.<br><br>The 50% figure is the conservative aggregate. Some individual modules improved by 70%+ after vectorization alone. The Django migration on its own delivered *70% faster* execution for the API-facing workloads."
  },
  {
    question: "How do you approach ML model deployment?",
    answer: "I treat production constraints as first-class requirements, not afterthoughts. Before writing a single line of model code, I ask: how will this be served, what latency is acceptable, and how will it be retrained?<br><br>For the Kreditz scoring pipeline at CodeNote, the answer was `Pickle` serialization into a `Django` API with multiprocessing. That choice kept the API stateless, made model updates a file swap, and scaled horizontally without code changes.<br><br>An ML model that achieves 95% accuracy in a notebook but fails silently in production is worse than one that scores 85% and is reliable, observable, and maintainable."
  },
  {
    question: "What was the Kreditz project about?",
    answer: "Kreditz is a credit scoring product for European financial markets — Sweden, Finland, Norway, and UK. The core challenge was taking raw bank transaction data and extracting signals that predict loan eligibility.<br><br>My work covered the full pipeline: ingesting high-volume financial datasets, transforming and categorizing transactions (corporate vs. personal, by merchant type, etc.), and feeding clean features into ML models for scoring. The categorization logic was the most complex part — it had accumulated technical debt and was running too slowly for production volumes, which is where the *50%+ optimization* work came in.<br><br>The final system was a `Django` API with ^multiprocessing^ that could process thousands of records concurrently."
  },
  {
    question: "What problems do you most enjoy solving?",
    answer: "Problems where the gap between a naive solution and a good solution is large. Those are the ones where engineering judgment actually matters.<br><br>Reducing processing time from 10 minutes to 4 minutes isn't glamorous, but it changes what's feasible in production. Building a recommender that returns results in milliseconds instead of seconds changes whether users actually engage with it.<br><br>I'm also drawn to problems that span multiple disciplines — where you need to understand the business context, the data, and the engineering tradeoffs simultaneously. Pure ML with no deployment path or pure engineering with no analytical depth are both less interesting to me than the intersection."
  },
  {
    question: "Why do you write technical blogs?",
    answer: "Writing forces precision. You can have a fuzzy intuition about why something works and still ship functional code. But explaining it to someone else — especially in writing, where you can't fill gaps with hand-waving — requires real understanding.<br><br>The Pandas optimization article came from a project where I was genuinely frustrated by slow code and had to research the internals to fix it properly. Writing it up was how I made sure I actually understood what I'd done rather than just cargo-culting a solution.<br><br>The feedback loop is also useful. Comments and questions from readers regularly reveal edge cases or misconceptions I hadn't considered."
  },
  {
    question: "How do you stay current with the field?",
    answer: "Deliberately and selectively. There's too much noise in ML/data science to follow everything.<br><br>I focus on foundational papers and implementations rather than the latest benchmark leaderboard entries. I read the `Pandas`, `Scikit-learn`, and `Django` changelogs when new versions drop. And I pick one or two new tools per quarter to actually build something with — that's the only way to know if something is genuinely useful or just well-marketed.<br><br>Currently going deeper on LLM integration for structured data tasks, and advanced SQL optimization for analytical workloads."
  }
];
