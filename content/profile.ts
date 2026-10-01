// Every string here traces to ./Krishiv/ — see the ledger in BUILD_NOTES.md.

export const profile = {
  name: "Krishiv Sharma",
  location: "Bhopal, India",
  email: "sharmakrishiv1205@gmail.com",
  github: { label: "GitHub", handle: "Krishivvv", url: "https://github.com/Krishivvv" },
  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      school: "Jagran Lakecity University, Bhopal",
      period: "Expected 2027",
    },
    {
      degree: "High School",
      school: "Sagar Public School, Saket Nagar, Bhopal",
      period: "April 2023",
    },
  ],
} as const;

// LinkedIn: Krishiv is sending the profile URL (2026-10-01). Set it here and a
// LinkedIn link appears everywhere GitHub does (footer, contact, resume, menu,
// command palette, structured data).
const linkedinUrl = null as string | null;
export const linkedin = linkedinUrl ? { url: linkedinUrl, display: linkedinUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") } : null;

// Every "email me" link opens a new message with the subject filled in.
const subject = "Hello Krishiv";
export const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;
// Gmail's compose window, for desktops where mailto: has no mail app behind it
// (see components/email-link.tsx).
export const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}`;
