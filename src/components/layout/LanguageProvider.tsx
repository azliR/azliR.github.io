import * as React from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    work: "Work",
    capabilities: "Capabilities",
    capabilitiesTitle:
      "Engineering systems across mobile, backend, realtime infrastructure, and AI.",
    reviews: "Reviews",
    faq: "FAQ",
    startProject: "Start a Project",
    heroTitle: "Engineering scalable\nmobile apps\n& backend systems.",
    heroDescription:
      "Production-ready products for startups, real-time platforms, and high-performance systems.",
    heroCTASelectedWork: "Selected Work",
    usersServed: "Users served",
    dailyActions: "Daily actions",
    productionSystems: "Production systems",
    selectedFocus: "01 / Selected Focus",
    coreStack: "02 / Core Stack",
    recentWork: "03 / Recent Work",
    recentWork1: "39K+ users platform",
    recentWork2: "Election real-count system",
    recentWork3: "VoIP infrastructure",
    trustedBy: "Trusted by innovative companies",
    metricsKicker: "Metrics",
    metricsTitle: "Performance in numbers",
    metricsDescription: "Built for scale, reliability, and real-world usage.",
    workKicker: "Selected Work",
    workTitle: "A showcase of production systems, platforms, and products built for real users.",
    scopeOfWork: "Scope of Work:",
    processKicker: "Process",
    processTitle: "How we work",
    processDescription:
      "A focused engineering process designed to move fast without sacrificing quality.",
    step1Title: "Discovery",
    step1Desc: "Understanding product goals, constraints, and technical direction.",
    step2Title: "Engineering",
    step2Desc: "Building scalable, maintainable, production-ready systems.",
    step3Title: "Launch & Iterate",
    step3Desc: "Deployment, monitoring, improvements, and iteration.",
    reviewsKicker: "Reviews",
    reviewsTitle: "Trusted by founders",
    reviewsDescription: "Selected feedback from clients and collaborators.",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions",
    faqDescription: "Clear answers about our engineering capabilities, process, and setups.",
    ctaTitle: "Let's build something useful.",
    ctaDescription:
      "Whether you're building an MVP, improving an existing platform, or scaling infrastructure — azlir.dev can help.",
    viewWork: "View Work",
    footerDesc: "Engineering scalable products.",
  },
  id: {
    work: "Karya",
    capabilities: "Kapabilitas",
    capabilitiesTitle:
      "Merekayasa sistem di seluruh infrastruktur mobile, backend, real-time, dan AI.",
    reviews: "Ulasan",
    faq: "FAQ",
    startProject: "Mulai Proyek",
    heroTitle: "Merekayasa aplikasi\nmobile & sistem\nbackend yang scalable.",
    heroDescription:
      "Produk siap rilis untuk startup, platform real-time, dan sistem berkinerja tinggi.",
    heroCTASelectedWork: "Karya Pilihan",
    usersServed: "Pengguna terlayani",
    dailyActions: "Aksi harian",
    productionSystems: "Sistem produksi",
    selectedFocus: "01 / Fokus Pilihan",
    coreStack: "02 / Teknologi Utama",
    recentWork: "03 / Karya Terbaru",
    recentWork1: "Platform 39rb+ pengguna",
    recentWork2: "Sistem hitung cepat pemilu",
    recentWork3: "Infrastruktur VoIP",
    trustedBy: "Dipercaya oleh perusahaan inovatif",
    metricsKicker: "Metrik",
    metricsTitle: "Performa dalam angka",
    metricsDescription: "Dibangun untuk skalabilitas, keandalan, dan penggunaan dunia nyata.",
    workKicker: "Karya Pilihan",
    workTitle: "Pameran sistem produksi, platform, dan produk yang dibangun untuk pengguna nyata.",
    scopeOfWork: "Cakupan Pekerjaan:",
    processKicker: "Proses",
    processTitle: "Cara kami bekerja",
    processDescription:
      "Proses rekayasa terfokus yang dirancang untuk bergerak cepat tanpa mengorbankan kualitas.",
    step1Title: "Discovery",
    step1Desc: "Memahami tujuan produk, batasan, dan arah teknis.",
    step2Title: "Rekayasa",
    step2Desc: "Membangun sistem yang scalable, mudah dipelihara, dan siap produksi.",
    step3Title: "Rilis & Iterasi",
    step3Desc: "Penyebaran (deployment), pemantauan, peningkatan, dan iterasi.",
    reviewsKicker: "Ulasan",
    reviewsTitle: "Dipercaya oleh founder",
    reviewsDescription: "Umpan balik pilihan dari klien dan kolaborator.",
    faqKicker: "FAQ",
    faqTitle: "Pertanyaan yang sering diajukan",
    faqDescription: "Jawaban jelas tentang kemampuan rekayasa, proses, dan konfigurasi kami.",
    ctaTitle: "Mari kita bangun sesuatu yang bermanfaat.",
    ctaDescription:
      "Baik Anda sedang membangun MVP, meningkatkan platform yang ada, atau menskalakan infrastruktur — azlir.dev dapat membantu.",
    viewWork: "Lihat Karya",
    footerDesc: "Merekayasa produk yang scalable.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "id") return saved;
      const browserLang = navigator.language.split("-")[0];
      return browserLang === "id" ? "id" : "en";
    }
    return "en";
  });

  const setLang = React.useCallback((newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
      document.documentElement.lang = newLang;
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = React.useCallback(
    (key: keyof typeof translations.en) => {
      return translations[lang][key] || translations.en[key];
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
