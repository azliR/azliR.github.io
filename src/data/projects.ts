export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  isFeatured?: boolean;
  builtItems?: string[];
  impact?: string;
  ctaText?: string;
}

export const projects: Project[] = [
  {
    id: "inclass-platform",
    title: "InClass",
    description:
      "Premium dashboard, real-time backend, and mobile client serving educational institutions.",
    tags: ["React", "React Native", "Convex", "Expo", "Tailwind"],
    isFeatured: true,
    builtItems: ["Mobile App", "Web Platform", "Real-time Backend", "AI Integration"],
    impact: "Serving thousands of active students and teachers with 99.9% uptime.",
    ctaText: "View Project",
    href: "https://app.inclass.azlir.dev/",
  },
  {
    id: "wake-up-call",
    title: "Wake Up Call Service",
    description: "Automated telephony service delivering scheduled audio alerts and AI greetings.",
    tags: ["Node.js", "Twilio", "Redis"],
    isFeatured: false,
    ctaText: "View Case Study",
  },
  {
    id: "mutualan",
    title: "mutualan.com",
    description:
      "Viral social connection platform for discovering and organizing developer meetups.",
    tags: ["Next.js", "Postgres", "Tailwind"],
    isFeatured: false,
    ctaText: "Visit Website",
  },
  {
    id: "bandung-bedas",
    title: "Bandung Bedas",
    description:
      "Fault-tolerant voting aggregation system processing thousands of updates per second.",
    tags: ["Go", "Redis", "PostgreSQL"],
    isFeatured: false,
    ctaText: "View Case Study",
  },
  {
    id: "morp-sdk",
    title: "Morp SDK",
    description: "Light, type-safe RPC SDK optimized for low-latency server-to-client queries.",
    tags: ["TypeScript", "Bun", "WebSockets"],
    isFeatured: false,
    ctaText: "View GitHub",
  },
  {
    id: "isiu-ai",
    title: "iSIU.AI",
    description:
      "AI assistant parser converting unstructured legacy academic PDF reports into clean JSON.",
    tags: ["Python", "OpenAI", "FastAPI"],
    isFeatured: false,
    ctaText: "Visit Website",
  },
];
