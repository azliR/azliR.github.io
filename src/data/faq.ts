export interface FAQItem {
  id: string;
  question: {
    en: string;
    id: string;
  };
  answer: {
    en: string;
    id: string;
  };
}

export const faqItems: FAQItem[] = [
  {
    id: "projects",
    question: {
      en: "What kind of projects do you take?",
      id: "Proyek apa saja yang Anda kerjakan?",
    },
    answer: {
      en: "Mobile apps, backend systems, SaaS products, internal tools, real-time platforms, and AI integrations.",
      id: "Aplikasi mobile, sistem backend, produk SaaS, internal tools, platform real-time, dan integrasi AI.",
    },
  },
  {
    id: "startups",
    question: {
      en: "Do you work with startups?",
      id: "Apakah Anda bekerja dengan startup?",
    },
    answer: {
      en: "Yes — from MVP to production-scale systems.",
      id: "Ya — mulai dari MVP hingga sistem skala produksi.",
    },
  },
  {
    id: "existing",
    question: {
      en: "Can you work on existing products?",
      id: "Apakah Anda bisa mengerjakan produk yang sudah ada?",
    },
    answer: {
      en: "Yes. Including improvements, scaling, architecture, and new features.",
      id: "Ya. Termasuk peningkatan, penskalaan, arsitektur, dan fitur baru.",
    },
  },
  {
    id: "end-to-end",
    question: {
      en: "Do you provide end-to-end development?",
      id: "Apakah Anda menyediakan pengembangan ujung-ke-ujung (end-to-end)?",
    },
    answer: {
      en: "Yes — from frontend to backend systems.",
      id: "Ya — dari frontend hingga sistem backend.",
    },
  },
  {
    id: "teams",
    question: {
      en: "Can you join existing teams?",
      id: "Apakah Anda bisa bergabung dengan tim yang sudah ada?",
    },
    answer: {
      en: "Yes, depending on scope and availability.",
      id: "Ya, tergantung pada cakupan dan ketersediaan.",
    },
  },
];
