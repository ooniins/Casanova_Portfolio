// ─────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE IS EDITED HERE. Replace the placeholder
// values below with your own info — you shouldn't need to touch
// any component files just to update content.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Niño Gabriel C. Casanova",
  roles: [
    "Data engineer",
    "building for the web",
    "open to opportunities",
  ],
  location: "Lipa, Batangas, Philippines",
  tagline:
    "I build products at the intersection of design and engineering — clean frontends backed by systems that hold up.",
  bio: [
    "I'm a software engineer who likes shipping things end to end — from the interface someone actually touches down to the API and data layer underneath it.",
    "Right now I'm focused on full-stack web apps: React on the front, Node or Python on the back, and enough DevOps to deploy it myself.",
  ],
  education: {
    school: "De La Salle Lipa",
    program: "B.S. Computer Science",
    period: "Expected 2027",
  },
  resumeUrl: "/resume.pdf",
  avatarInitial: "NC",
};

export const socials = [
  { label: "Email", value: "gabrielcasanovaq@gmail.com", href: "mailto:gabrielcasanovaq@gmail.com", icon: "mail" },
  { label: "GitHub", value: "@ooniins", href: "https://github.com/ooniins", icon: "github" },
  { label: "LinkedIn", value: "in/niño-gabriel-casanova", href: "https://linkedin.com/in/niño-gabriel-casanova", icon: "linkedin" },
  { label: "Twitter / X", value: "@zogratis", href: "https://x.com/zogratis", icon: "x" },
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