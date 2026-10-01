// Krishiv_Resume.md, "Projects". `points` are the resume bullets verbatim (used
// on /resume); `details` say the same things in the site's first person (used on
// case studies) and add nothing. Demo and repo links: each repository on
// github.com/Krishivvv names its live deployment in its README (Krishiv,
// 2026-10-01: "they're already deployed"); all checked live on 2026-10-01.

export type Project = {
  slug: "voicedesk" | "shiksha" | "veridex";
  name: string;
  kind: string;
  line: string;
  overview: string;
  role?: string;
  points: string[];
  details: string[];
  stack: string[];
  /** The deployed app, to try it. */
  demo: string;
  /** The source on GitHub. */
  repo: string;
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "voicedesk",
    name: "VoiceDesk",
    kind: "Agentic AI voice support agent",
    line: "A voice-to-voice support agent: a ReAct agent on LangChain that resolves multi-step questions over a RAG knowledge base.",
    overview:
      "A support agent you talk to. It listens, works through multi-step questions on its own, and answers from a knowledge base.",
    points: [
      "Built a voice-to-voice support agent: a ReAct/LangChain agent that autonomously resolves multi-step user queries over a RAG knowledge base.",
      "Implemented semantic retrieval with ChromaDB and sentence-transformers over a 16-document corpus; used Whisper for speech-to-text.",
      "Served through FastAPI with a Streamlit UI supporting live audio recording and transcript display.",
    ],
    details: [
      "I built a voice-to-voice support agent: a ReAct agent on LangChain that resolves multi-step user queries on its own, over a RAG knowledge base.",
      "Retrieval is semantic, using ChromaDB and sentence-transformers over a 16-document corpus. Whisper handles speech-to-text.",
      "It is served through FastAPI, with a Streamlit UI that records live audio and displays the transcript.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "LLaMA 3.3", "Whisper", "ChromaDB"],
    demo: "https://huggingface.co/spaces/krishivvv/voicedesk",
    repo: "https://github.com/Krishivvv/VoiceDesk",
    links: [
      { label: "Live demo", url: "https://huggingface.co/spaces/krishivvv/voicedesk" },
      { label: "Code", url: "https://github.com/Krishivvv/VoiceDesk" },
    ],
  },
  {
    slug: "shiksha",
    name: "Shiksha",
    kind: "AI educational video generator",
    line: "An end-to-end pipeline that turns a text prompt into a narrated, animated educational video with a synced voiceover.",
    overview: "Give it a text prompt and it returns a narrated, animated educational video with a synced voiceover.",
    role: "Built and deployed solo",
    points: [
      "Built and deployed (solo) an end-to-end pipeline that turns a text prompt into a narrated, animated educational video with synced voiceover.",
      "Orchestrated multiple LLMs (GPT-4o and Gemini 1.5, served via Groq for low-latency inference) to generate script, animation code and audio.",
      "Rendered animations via headless Chromium (Pyppeteer) and merged audio/video with FFmpeg; served through a React + Flask app.",
    ],
    details: [
      "It orchestrates multiple LLMs (GPT-4o and Gemini 1.5, served via Groq for low-latency inference) to generate the script, the animation code and the audio.",
      "Headless Chromium (Pyppeteer) renders the animations, and FFmpeg merges audio and video. It is served through a React + Flask app.",
    ],
    stack: ["Python", "Flask", "React", "GPT-4o", "Gemini 1.5", "Groq", "FFmpeg"],
    demo: "https://krishivvv-shikshaai.hf.space",
    repo: "https://github.com/Krishivvv/Shiksha",
    links: [
      { label: "Live demo", url: "https://krishivvv-shikshaai.hf.space" },
      { label: "Code", url: "https://github.com/Krishivvv/Shiksha" },
    ],
  },
  {
    slug: "veridex",
    name: "Veridex",
    kind: "Deepfake detection system",
    line: "A binary deepfake classifier: ResNet-50 transfer learning with a custom dropout head, trained on frame-level data.",
    overview: "A binary classifier that separates real video frames from deepfakes.",
    points: [
      "Built a binary deepfake classifier using ResNet-50 transfer learning with a custom dropout head on frame-level data.",
      "Applied early stopping and ReduceLROnPlateau LR scheduling for stable convergence; trained on Colab GPU.",
    ],
    details: [
      "I built the classifier with ResNet-50 transfer learning and a custom dropout head, on frame-level data.",
      "Early stopping and ReduceLROnPlateau learning-rate scheduling keep convergence stable. It was trained on a Colab GPU.",
    ],
    stack: ["Python", "PyTorch", "ResNet-50", "CNN"],
    demo: "https://frontend-ten-mu-27.vercel.app",
    repo: "https://github.com/Krishivvv/Veridex",
    links: [
      { label: "Live demo", url: "https://frontend-ten-mu-27.vercel.app" },
      { label: "Code", url: "https://github.com/Krishivvv/Veridex" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
