export const profile = {
  name: "Niño Gabriel C. Casanova",
  roles: [
    "aspiring data engineer",
    "building for the web",
    "open to opportunities",
  ],
  location: "Lipa, Batangas, Philippines",
  tagline:
    "I'm a aspiring data engineer who loves building for the web — turning raw data into pipelines, and pipelines into products people actually use.",
  bio: [
    "I'm a aspiring data engineer at heart, but I love building for the web just as much — the pipelines that clean and move data, and the interfaces that make it usable, feel like two halves of the same problem to me.",
    "I'm still early in my career, and I stay genuinely open to opportunities — new tools, new domains, new problems to learn from. If it means growing as an engineer, I'm in.",
  ],
  education: {
    school: "De La Salle Lipa",
    program: "B.S. Computer Science",
    period: "Expected 2027",
  },
  resumeUrl: "/resume.pdf",
  // Path to your profile photo, placed in the public/ folder (e.g. public/avatar.jpg -> "/avatar.jpg").
  // Leave as null to keep showing the "NC" initials instead.
  avatarUrl: "/avatar.jpeg",
  avatarInitial: "NC",
};

export const socials = [
  { label: "Email", value: "gabrielcasanovaq@gmail.com", href: "mailto:gabrielcasanovaq@gmail.com", icon: "mail" },
  { label: "GitHub", value: "@ooniins", href: "https://github.com/ooniins", icon: "github" },
  { label: "LinkedIn", value: "in/niño-gabriel-casanova-a824b0389", href: "https://linkedin.com/in/niño-gabriel-casanova-a824b0389", icon: "linkedin" },
  { label: "Twitter / X", value: "@Itadori200423", href: "https://x.com/Itadori200423", icon: "x" },
];

export const projects = [
  {
    name: "SafeSeat",
    period: "2026 — Ongoing",
    path: "safeseat.app",
    description:
      "An AI-powered IoT vehicle occupant monitoring system that uses multi-sensor fusion and machine learning to detect abnormal passenger conditions and deliver real-time safety alerts.",
    stack: ["Python", "C++", "TypeScript", "Tailwind CSS", "Supabase", "React Native", "Expo"],
    github: "https://github.com/ollymt/safeseat-app.git",
    live: null,
    badge: "thesis",
  },
  {
    name: "SpeakUp",
    period: "2025 — 2026",
    path: "proj-big-bro.web.app",
    description:
      "A full-stack report management system that streamlines secure incident reporting, real-time tracking, and administrative case management.",
    stack: ["React", "JavaScript", "Supabase", "Vite", "HTML", "CSS"],
    github: "https://github.com/ollymt/proj-big-bro.git",
    live: "https://proj-big-bro.web.app",
    badge: null,
  },
  {
    name: "StylePick",
    period: "2025 — 2026",
    path: "stylepick.app",
    description:
      "An e-commerce mobile store that lets customers buy and sell products right from their phones.",
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/khaatriinaa/final-project-group13-stylepick.git",
    live: null,
    badge: null,
  },
  {
    name: "Portfolio",
    period: "2026 — Ongoing",
    path: "casanova-portfolio.vercel.app",
    description:
      "The site you're looking at right now — a one-page portfolio built end-to-end with Vite and React, from layout to deployment.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/ooniins/Casanova_Portfolio",
    live: "https://casanova-portfolio.vercel.app",
    badge: null,
  },
];

// Display labels for the auto-advancing category carousel in the Certifications
// section. Each maps to a "category" value used in the certifications array below.
// Rename the labels to whatever you like — nothing else needs to change.
export const certificationGroups = [
  { label: "Associate Data Scientist in R", category: "R" },
  { label: "Data Analyst in Python", category: "Python" },
  { label: "Associate Python Developer", category: "PythonDev" },
  { label: "GitHub Foundations", category: "GitHub" },
];

export const certifications = [
  { title: "Introduction to Python for Developers", issuer: "DataCamp", date: "Feb 2026", hours: "3 hrs", category: "PythonDev" },
  { title: "Introduction to R", issuer: "DataCamp", date: "Mar 2026", hours: "4 hrs", category: "R" },
  { title: "Intermediate R", issuer: "DataCamp", date: "Apr 2026", hours: "6 hrs", category: "R" },
  { title: "Introduction to the Tidyverse", issuer: "DataCamp", date: "Apr 2026", hours: "4 hrs", category: "R" },
  { title: "Data Manipulation with dplyr", issuer: "DataCamp", date: "May 2026", hours: "4 hrs", category: "R" },
  { title: "Introduction to Python", issuer: "DataCamp", date: "May 2026", hours: "4 hrs", category: "Python" },
  { title: "Intermediate Python", issuer: "DataCamp", date: "Jun 2026", hours: "4 hrs", category: "Python" },
  { title: "Data Manipulation with pandas", issuer: "DataCamp", date: "Jul 2026", hours: "4 hrs", category: "Python" },
  { title: "Introduction to Git", issuer: "DataCamp", date: "Jul 2026", hours: "2 hrs", category: "GitHub" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "PHP", "R"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native (Expo)", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "Express", "Supabase", "PostgreSQL"],
  },
  {
    title: "AI & Machine Learning",
    items: ["OpenAI", "Python", "R"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Figma", "EAS Build", "VS Code", "Vercel", "Canva", "NPM", "Claude", "GitHub Copilot"],
  },
];