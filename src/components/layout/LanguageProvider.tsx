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
    works: "Works",
    products: "Products",
    about: "About",
    viewAllWorks: "View All Works",
    featuredProduct: "Featured Product",
    liveBadge: "Live",
    inClassDesc: "AI-powered, real-time classroom management & digital education platform.",
    inClassDetailedDesc:
      "An AI-powered classroom ecosystem with automated grading, real-time proctored exams, and instant student-teacher sync.",
    visitWebsite: "Website",
    openWebApp: "Web App",
    getPlayStore: "Play Store",
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
    metricsKicker: "Proven Scale",
    metricsTitle: "Real-world scale & impact",
    metricsDescription:
      "Actual numbers achieved by our production platforms and active deployments.",
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
    aboutTitle: "About Rizal",
    aboutBio:
      "I am Rizal Hadiyansah (azliR), a Mobile & Backend Developer passionate about building high-fidelity product ecosystems. I handle everything from native-performance frontend/mobile apps to secure, low-latency, real-time backends.",
    aboutSubtitle: "Building premium product ecosystems from scratch.",
    pillarFullstackTitle: "Full-Stack Systems",
    pillarFullstackDesc:
      "Engineering complete web and mobile ecosystems with smooth integrations and real-time syncing.",
    pillarMobileTitle: "Mobile Apps",
    pillarMobileDesc:
      "Developing high-fidelity iOS & Android applications using Flutter and React Native (Expo).",
    pillarBackendTitle: "Scalable Backends",
    pillarBackendDesc:
      "Building secure APIs, custom matchmaking systems, and realtime architectures in Go and Node.",
    pillarMLTitle: "Machine Learning",
    pillarMLDesc:
      "Designing and deploying optimized RNN and CNN models for edge devices and mobile platforms.",
    fiverrRatingText: "5.0 ★ Rated Developer on Fiverr",
    viewFiverrProfile: "Fiverr Profile",
    worksTitle: "All Works",
    worksDescription:
      "A complete list of production systems, platforms, and products built for clients and independent projects.",
    allCategory: "All",
    webCategory: "Full-Stack & Web",
    mobileCategory: "Flutter & Mobile",
    backendCategory: "Backend",
    mlCategory: "Machine Learning",
    keyHighlights: "Key Highlights",
  },
  id: {
    work: "Karya",
    works: "Karya",
    products: "Produk",
    about: "Tentang",
    viewAllWorks: "Lihat Semua Karya",
    featuredProduct: "Produk Unggulan",
    liveBadge: "Aktif",
    inClassDesc: "Platform manajemen kelas & pendidikan digital real-time berbasis AI.",
    inClassDetailedDesc:
      "Ekosistem kelas berbasis AI dengan penilaian otomatis, ujian terproktor waktu nyata, dan sinkronisasi instan siswa-guru.",
    visitWebsite: "Website",
    openWebApp: "Web App",
    getPlayStore: "Play Store",
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
    metricsKicker: "Skala Terbukti",
    metricsTitle: "Skala & dampak dunia nyata",
    metricsDescription: "Angka riil yang dicapai oleh platform produksi dan penerapan aktif kami.",
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
    aboutTitle: "Tentang Rizal",
    aboutBio:
      "Saya Rizal Hadiyansah (azliR), seorang Mobile & Backend Developer yang berdedikasi untuk membangun ekosistem produk berkualitas tinggi. Saya menangani segalanya mulai dari aplikasi mobile/frontend berkinerja tinggi hingga backend real-time yang aman dan berlatensi rendah.",
    aboutSubtitle: "Membangun ekosistem produk premium dari awal.",
    pillarFullstackTitle: "Sistem Full-Stack",
    pillarFullstackDesc:
      "Merekayasa ekosistem web dan mobile lengkap dengan integrasi lancar dan sinkronisasi real-time.",
    pillarMobileTitle: "Aplikasi Mobile",
    pillarMobileDesc:
      "Mengembangkan aplikasi iOS & Android berkualitas tinggi menggunakan Flutter dan React Native (Expo).",
    pillarBackendTitle: "Backend yang Scalable",
    pillarBackendDesc:
      "Membangun API yang aman, algoritma pencarian kecocokan, dan arsitektur realtime di Go dan Node.",
    pillarMLTitle: "Machine Learning",
    pillarMLDesc:
      "Merancang dan menerapkan model RNN dan CNN teroptimasi untuk perangkat mobile dan edge.",
    fiverrRatingText: "Developer Bintang 5.0 di Fiverr",
    viewFiverrProfile: "Profil Fiverr",
    worksTitle: "Semua Karya",
    worksDescription:
      "Daftar lengkap sistem produksi, platform, dan produk yang dibangun untuk klien serta proyek independen.",
    allCategory: "Semua",
    webCategory: "Full-Stack & Web",
    mobileCategory: "Flutter & Mobile",
    backendCategory: "Backend",
    mlCategory: "Machine Learning",
    keyHighlights: "Sorotan Utama",
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
