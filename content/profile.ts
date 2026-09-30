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

export const mailto = `mailto:${profile.email}`;
