export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const capabilities: Capability[] = [
  {
    id: "mobile-engineering",
    title: "Mobile Engineering",
    description:
      "Production-ready mobile apps for Android and iOS using Flutter with scalable architecture.",
    iconName: "Smartphone",
  },
  {
    id: "backend-systems",
    title: "Backend Systems",
    description:
      "High-performance APIs, scalable services, and infrastructure for modern products.",
    iconName: "Server",
  },
  {
    id: "realtime-platforms",
    title: "Real-time Platforms",
    description:
      "Realtime sync, dashboards, collaborative systems, notifications, and streaming data.",
    iconName: "Zap",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "AI-powered workflows, assistants, intelligent automation, and product features.",
    iconName: "Cpu",
  },
];
