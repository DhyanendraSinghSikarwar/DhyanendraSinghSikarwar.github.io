// FAQ Data
const FAQS_DATA = [
  {
    question: "What kind of problems do you most enjoy solving?",
    answer: "Problems at the intersection of data scale and business impact. At CodeNote, the challenge wasn't just building an ML model — it was making it fast enough to process millions of European financial records reliably, then packaging it into an API that could run in production without breaking. That combination of algorithmic thinking, engineering, and real-world constraints is what I find most engaging."
  },
  {
    question: "How did you reduce processing time by 50%?",
    answer: "It came down to profiling first, not guessing. I identified the bottlenecks — redundant loops, unvectorized operations, and sequential processing where parallelism was possible. The key changes were replacing row-wise iteration with vectorized `Pandas` and `NumPy` operations, restructuring the categorization logic to eliminate nested conditionals, and migrating the core pipeline to a `Django` API with `multiprocessing` so jobs could run concurrently.<br><br>The 50% figure was conservative. Some modules improved by over 70% after vectorization alone."
  },
  {
    question: "How do you approach building ML models for production?",
    answer: "I treat production as a constraint from day one, not an afterthought. That means choosing models that are interpretable enough to debug, pipelines that can be retrained without manual intervention, and APIs that expose the model in a way that downstream teams can consume reliably.<br><br>For the Kreditz scoring work, this meant ensuring the entire pipeline from raw financial data ingestion to score output was modular, logged, and testable. An ML model that scores 95% in a notebook but fails silently in production is worse than one that scores 85% and works reliably."
  },
  {
    question: "Why do you write technical blogs on Medium?",
    answer: "Writing forces me to understand something properly. Explaining Pandas optimization or MySQL performance to someone else requires knowing not just the 'what' but the 'why' and the edge cases. I've found that articles I wrote to clarify my own thinking have ended up helping thousands of engineers.<br><br>It's also a feedback loop — comments and questions from readers have surfaced gaps in my own understanding and pushed me to go deeper."
  },
  {
    question: "How do you handle large datasets that don't fit in memory?",
    answer: "Chunked processing and database-side aggregation are usually the first levers. Before loading anything into memory, I ask whether the computation can be pushed to `MySQL` or `Vertica` via SQL — databases are built for this and are often faster than Python for aggregations and joins on large data.<br><br>When in-memory processing is necessary, I use `Pandas` chunking or `Dask` for parallelism, and profile memory usage as I go. On the European market data, chunked ingestion with batch inserts was essential to staying within compute limits while maintaining throughput."
  },
  {
    question: "What does your workflow look like for a new data project?",
    answer: "I start with the business question, not the data. What decision does this analysis need to support? That shapes everything downstream.<br><br>Then: understand the data (schema, quality, gaps), do exploratory analysis, validate assumptions, prototype the solution in a notebook, refactor into clean modular code, test on edge cases, and deploy. The EDA step is non-negotiable — skipping it leads to models that perform well on clean test data and fail on real-world distributions."
  },
  {
    question: "What are you currently learning or working on?",
    answer: "Deep-diving into large language model integration for structured data tasks — specifically where LLMs can replace or augment traditional classification logic in data pipelines. Also spending time on advanced SQL optimization techniques for analytical workloads on Vertica and PostgreSQL.<br><br>On the side, building small projects in `Streamlit` to make data exploration tools more accessible to non-technical stakeholders."
  }
];
