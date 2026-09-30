// Internships: Krishiv_Resume.md, "Experience". Dates are withheld until Krishiv
// confirms which range belongs to which role (BUILD_NOTES.md, Q9).
// Roles: data.md.

export type Internship = {
  role: string;
  org: string;
  place: string;
  period?: string;
  points: string[];
};

export const internships: Internship[] = [
  {
    role: "Machine Learning Intern",
    org: "FoCDoT Technologies",
    place: "Bhopal",
    points: [
      "Built and evaluated supervised and unsupervised models (linear/logistic regression, decision trees, random forests, gradient boosting, neural networks) with Scikit-learn, TensorFlow and Keras.",
      "Improved model accuracy up to 15% on various datasets through feature engineering and hyperparameter tuning.",
      "Benchmarked model architectures to guide project direction toward the best-performing approach.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "AI Bricks Realtors Pvt Ltd",
    place: "Pune",
    points: [
      "Built dynamic dashboards in Python and Power BI, turning complex real-estate performance metrics into clear, actionable insights for stakeholders.",
      "Analyzed client-preference and property-feature data alongside agents to inform market and pricing decisions.",
      "Partnered with agents to collect data on client preferences and property features, enhancing market understanding.",
    ],
  },
];

export type Role = { role: string; org: string; url: string; domain: string };

export const roles: Role[] = [
  { role: "Partner", org: "K2Aqua", url: "https://k2aqua.in", domain: "k2aqua.in" },
  {
    role: "Technical Head",
    org: "Samarth Rao Studio",
    url: "https://samarth-rao-studio.vercel.app",
    domain: "samarth-rao-studio.vercel.app",
  },
  { role: "Technical Head", org: "Uniqform", url: "https://uniqform.in", domain: "uniqform.in" },
];
