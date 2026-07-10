export const profile = {
  name: "Niño Gabriel C. Casanova",
  roles: [
    "data engineer",
    "building for the web",
    "open to opportunities",
  ],
  location: "Lipa, Batangas, Philippines",
  tagline:
    "I'm a data engineer who loves building for the web — turning raw data into pipelines, and pipelines into products people actually use.",
  bio: [
    "I'm a data engineer at heart, but I love building for the web just as much — the pipelines that clean and move data, and the interfaces that make it usable, feel like two halves of the same problem to me.",
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
    name: "Project One",
    period: "2026 — Ongoing",
    path: "project-one.app",
    description:
      "A short, specific description of the problem this project solves and who it's for.",
    stack: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourhandle/project-one",
    live: "https://project-one.app",
    badge: null,
  },
  {
    name: "Project Two",
    period: "2025 — 2026",
    path: "project-two.app",
    description:
      "Another project summary. Lead with what it does, then how — keep it to one or two sentences.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/yourhandle/project-two",
    live: "https://project-two.app",
    badge: "featured",
  },
  {
    name: "Project Three",
    period: "2025",
    path: "project-three.app",
    description:
      "Describe the outcome, not just the tech — what changed because this existed.",
    stack: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/yourhandle/project-three",
    live: null,
    badge: null,
  },
  {
    name: "Project Four",
    period: "2024",
    path: "project-four.app",
    description:
      "A fourth project slot. Delete this object if you only have three to show.",
    stack: ["React Native", "Expo", "Supabase"],
    github: "https://github.com/yourhandle/project-four",
    live: "https://project-four.app",
    badge: null,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Docker", "Figma", "VS Code"],
  },
];