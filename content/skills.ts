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

export const skillGroups = [
  { key: "genai", label: "GenAI & Agents" },
  { key: "ml", label: "ML & Data" },
  { key: "backend", label: "Backend & APIs" },
  { key: "languages", label: "Languages & Core" },
  { key: "tools", label: "Tools" },
] as const;

// Which resume skills each project uses, with the resume line that says so.
// `extra` lists project tech that is not in the resume's skills list.
export const skillsUsedIn: Record<"voicedesk" | "shiksha" | "veridex", { uses: string[]; extra: string[] }> = {
  // R:27 ReAct/LangChain agent, RAG, autonomously resolves multi-step queries;
  // R:29 ChromaDB + sentence-transformers, Whisper; R:31 FastAPI, Streamlit; R:33 tech line.
  voicedesk: {
    uses: [
      "Python",
      "FastAPI",
      "LLMs",
      "RAG",
      "LangChain",
      "ReAct agents",
      "Vector DBs (ChromaDB)",
      "sentence-transformers",
      "Agentic workflows",
      "Whisper",
      "Streamlit",
    ],
    extra: ["LLaMA 3.3"],
  },
  // R:39 multiple LLMs; R:41 headless Chromium, FFmpeg, React + Flask; R:43 tech line.
  shiksha: {
    uses: ["Python", "Flask", "React", "LLMs"],
    extra: ["GPT-4o", "Gemini 1.5", "Groq", "FFmpeg", "Pyppeteer"],
  },
  // R:47 ResNet-50 transfer learning; R:49 trained on Colab GPU; R:51 tech line.
  veridex: {
    uses: ["Python", "PyTorch", "CNNs", "Transfer learning", "Google Colab"],
    extra: ["ResNet-50"],
  },
};

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
