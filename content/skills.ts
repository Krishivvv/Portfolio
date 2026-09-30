// Krishiv_Resume.md, "Skills", in the resume's own groups.

export const skills = {
  genai: [
    "LLMs",
    "RAG",
    "LangChain",
    "ReAct agents",
    "Vector DBs (ChromaDB)",
    "sentence-transformers",
    "Prompt engineering",
    "Agentic workflows",
    "Whisper",
  ],
  ml: [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "CNNs",
    "Transfer learning",
    "NLP",
    "Pandas",
    "NumPy",
    "Data cleaning & visualization",
  ],
  backend: ["FastAPI", "Flask", "REST APIs", "React", "Git/GitHub", "Docker", "MongoDB"],
  languages: ["Python", "SQL", "JavaScript", "C++", "HTML/CSS", "OOP"],
  tools: ["Jupyter", "Streamlit", "AWS", "Power BI", "Excel", "Google Colab"],
} as const;

// The resume's own grouping, used verbatim on /resume.
export const resumeSkills: { label: string; items: string }[] = [
  { label: "Languages & Core", items: "Python, SQL, JavaScript, C++, HTML/CSS, OOP" },
  { label: "Backend & APIs", items: "FastAPI, Flask, REST APIs, React, Git/GitHub, Docker, MongoDB" },
  {
    label: "GenAI & Agents",
    items:
      "LLMs, RAG, LangChain, ReAct agents, vector DBs (ChromaDB), sentence-transformers, prompt engineering, agentic workflows, Whisper",
  },
  {
    label: "ML & Data",
    items:
      "PyTorch, TensorFlow, Scikit-learn, CNNs, transfer learning, NLP, Pandas, NumPy, data cleaning & visualization",
  },
  { label: "Tools", items: "Jupyter, Streamlit, AWS, Power BI, Excel, Google Colab" },
];
