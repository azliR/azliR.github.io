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
      id: "Mobile Engineering",
    },
    description: {
      en: "Production-ready mobile apps for Android and iOS using Flutter with scalable architecture.",
      id: "Pengembangan aplikasi Android dan iOS berbasis Flutter dengan arsitektur yang skalabel dan siap digunakan di lingkungan produksi.",
    },
    iconName: "Smartphone",
  },
  {
    id: "backend-systems",
    title: {
      en: "Backend Systems",
      id: "Backend Systems",
    },
    description: {
      en: "High-performance APIs, scalable services, and infrastructure for modern products.",
      id: "Pengembangan API berperforma tinggi, layanan backend yang skalabel, serta infrastruktur untuk produk digital modern.",
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
      id: "Sinkronisasi real-time, dashboard interaktif, sistem kolaboratif, notifikasi, dan pemrosesan data streaming.",
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
      id: "Integrasi AI untuk workflow otomatis, intelligent assistant, automasi cerdas, dan fitur produk berbasis kecerdasan buatan.",
    },
    iconName: "Cpu",
  },
];
