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
      id: "Jenis proyek apa yang Anda tangani?",
    },
    answer: {
      en: "Mobile apps, backend systems, SaaS products, internal tools, real-time platforms, and AI integrations.",
      id: "Aplikasi mobile, backend systems, produk SaaS, internal tools, platform real-time, hingga integrasi AI.",
    },
  },
  {
    id: "startups",
    question: {
      en: "Do you work with startups?",
      id: "Apakah Anda bekerja sama dengan startup?",
    },
    answer: {
      en: "Yes — from MVP to production-scale systems.",
      id: "Ya — mulai dari pengembangan MVP hingga sistem yang siap digunakan di skala produksi.",
    },
  },
  {
    id: "existing",
    question: {
      en: "Can you work on existing products?",
      id: "Apakah Anda dapat mengembangkan produk yang sudah berjalan?",
    },
    answer: {
      en: "Yes. Including improvements, scaling, architecture, and new features.",
      id: "Tentu. Mulai dari peningkatan performa, scaling, perbaikan arsitektur, hingga pengembangan fitur baru.",
    },
  },
  {
    id: "end-to-end",
    question: {
      en: "Do you provide end-to-end development?",
      id: "Apakah Anda menyediakan layanan end-to-end development?",
    },
    answer: {
      en: "Yes — from frontend to backend systems.",
      id: "Ya — mulai dari frontend, backend, hingga integrasi sistem secara menyeluruh.",
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
      id: "Ya, tergantung kebutuhan proyek, ruang lingkup pekerjaan, dan ketersediaan waktu.",
    },
  },
];
