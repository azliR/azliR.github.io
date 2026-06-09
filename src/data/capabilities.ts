export interface Capability {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  iconName: string;
}

export const capabilities: Capability[] = [
  {
    id: "mobile-engineering",
    title: {
      en: "Mobile Engineering",
      id: "Rekayasa Mobile",
    },
    description: {
      en: "Production-ready mobile apps for Android and iOS using Flutter with scalable architecture.",
      id: "Aplikasi mobile siap rilis untuk Android dan iOS menggunakan Flutter dengan arsitektur yang scalable.",
    },
    iconName: "Smartphone",
  },
  {
    id: "backend-systems",
    title: {
      en: "Backend Systems",
      id: "Sistem Backend",
    },
    description: {
      en: "High-performance APIs, scalable services, and infrastructure for modern products.",
      id: "API berkinerja tinggi, layanan scalable, dan infrastruktur untuk produk modern.",
    },
    iconName: "Server",
  },
  {
    id: "realtime-platforms",
    title: {
      en: "Real-time Platforms",
      id: "Platform Real-time",
    },
    description: {
      en: "Realtime sync, dashboards, collaborative systems, notifications, and streaming data.",
      id: "Sinkronisasi real-time, dasbor, sistem kolaboratif, notifikasi, dan data streaming.",
    },
    iconName: "Zap",
  },
  {
    id: "ai-integration",
    title: {
      en: "AI Integration",
      id: "Integrasi AI",
    },
    description: {
      en: "AI-powered workflows, assistants, intelligent automation, and product features.",
      id: "Alur kerja berbasis AI, asisten, otomasi cerdas, dan fitur produk pintar.",
    },
    iconName: "Cpu",
  },
];
