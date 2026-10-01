import { type Site, sites } from "./sites";

// Internships: Krishiv_Resume.md, "Experience"; the dates are the ones the
// resume PDF (Krishiv_Resume (2).pdf) prints beside each role.

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
    period: "May 2025 – Nov 2025",
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
    period: "Jan 2026 – Mar 2026",
    points: [
      "Built dynamic dashboards in Python and Power BI, turning complex real-estate performance metrics into clear, actionable insights for stakeholders.",
      "Analyzed client-preference and property-feature data alongside agents to inform market and pricing decisions.",
      "Partnered with agents to collect data on client preferences and property features, enhancing market understanding.",
    ],
  },
];

// Other work: the roles Krishiv holds on the websites he built. They are not
// experience (Krishiv, 2026-10-01), so they sit apart from the internships.
// Uniqform comes first; the order follows content/sites.ts.
export const otherWork: Site[] = sites.filter((s) => s.roles.length > 0);
