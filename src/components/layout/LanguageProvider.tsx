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
    projectsBuilt: "Projects built",
    projectsBuiltDesc:
      "A diverse portfolio of web apps, mobile apps, custom APIs, and machine learning models built from scratch.",
    fiverrRating: "Fiverr rating",
    fiverrRatingDesc:
      "Exceptional rating from international clients, reflecting professional quality, communication, and timely delivery.",
    productionSystems: "Production systems",
    productionSystemsDesc:
      "Apps and platforms currently deployed in production, actively serving users or running live systems.",
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
    technicalExpertise: "Technical Expertise",
    fiverrClientFeedback: "Fiverr Client Feedback",
    heroTitleLine1: "Engineering scalable",
    heroTitleLine2: "mobile apps",
    heroTitleLine3: "& backend systems.",
    mobileEngineering: "Mobile Engineering",
    backendSystems: "Backend Systems",
    realtimePlatforms: "Real-time Platforms",
    aiIntegration: "AI Integration",
    viewCaseStudy: "View Case Study",
    emailMe: "Email me",
    website: "Website",
    webApp: "Web App",
    playStore: "Play Store",
    appStore: "App Store",
    github: "GitHub",
    metaTitle: "azlir.dev — Premium Product Engineering",
    metaDescription:
      "Engineering premium landing pages, high-performance dashboards, and mobile apps for startups.",
    contactTitle: "Start a Project",
    contactDescription:
      "Have an idea or a project in mind? Let's build something great together. Choose how you'd like to get in touch.",
    copyEmail: "Copy Email Address",
    copied: "Copied!",
    openEmailClient: "Open Email Client",
    sendQuickMessage: "Or Send a Quick Message",
    fieldName: "Your Name",
    fieldEmail: "Your Email",
    fieldMessage: "Your Message",
    fieldMessagePlaceholder: "Tell me about your project, goals, or timeline...",
    send: "Send Message",
    sending: "Sending...",
    errorNameRequired: "Name is required",
    errorEmailRequired: "Email is required",
    errorInvalidEmail: "Please enter a valid email address",
    errorMessageRequired: "Message is required",
    messageSentSuccess: "Message ready! Opening your email client...",
    close: "Close",
  },
  id: {
    work: "Karya",
    works: "Portofolio",
    products: "Produk",
    about: "Tentang",
    viewAllWorks: "Lihat Semua Karya",
    featuredProduct: "Produk Unggulan",
    liveBadge: "Live",

    inClassDesc: "Platform pendidikan digital dan manajemen kelas real-time berbasis AI.",

    inClassDetailedDesc:
      "Ekosistem pembelajaran berbasis AI dengan penilaian otomatis, ujian terpantau secara real-time, serta sinkronisasi instan antara guru dan siswa.",

    visitWebsite: "Kunjungi Website",
    openWebApp: "Buka Web App",
    getPlayStore: "Google Play",

    capabilities: "Kapabilitas",

    capabilitiesTitle:
      "Membangun sistem mobile, backend, infrastruktur real-time, dan integrasi AI.",

    reviews: "Testimoni",
    faq: "FAQ",
    startProject: "Mulai Proyek",

    heroTitle: "Membangun aplikasi mobile\n& sistem backend\nberkinerja tinggi.",

    heroDescription:
      "Produk siap produksi untuk startup, platform real-time, dan sistem berskala besar.",

    heroCTASelectedWork: "Karya Pilihan",

    projectsBuilt: "Proyek Dibangun",

    projectsBuiltDesc:
      "Portofolio aplikasi web, mobile, API kustom, hingga model machine learning yang dikembangkan dari nol.",

    fiverrRating: "Rating Fiverr",

    fiverrRatingDesc:
      "Penilaian tinggi dari klien internasional yang mencerminkan kualitas kerja, komunikasi profesional, dan ketepatan waktu.",

    productionSystems: "Sistem Live",

    productionSystemsDesc:
      "Platform dan aplikasi yang aktif digunakan di lingkungan produksi serta melayani pengguna secara nyata.",

    selectedFocus: "01 / Fokus Utama",
    coreStack: "02 / Teknologi Inti",
    recentWork: "03 / Proyek Terbaru",

    recentWork1: "Platform dengan 39K+ pengguna",
    recentWork2: "Sistem real count pemilu",
    recentWork3: "Infrastruktur VoIP",

    trustedBy: "Dipercaya oleh perusahaan inovatif",

    metricsKicker: "Skala Nyata",

    metricsTitle: "Skala penggunaan & dampak di dunia nyata",

    metricsDescription: "Pencapaian nyata dari platform produksi dan deployment aktif.",

    workKicker: "Karya Pilihan",

    workTitle: "Kumpulan platform, sistem, dan produk yang dikembangkan untuk kebutuhan nyata.",

    scopeOfWork: "Ruang Lingkup:",

    processKicker: "Proses",

    processTitle: "Cara Kami Bekerja",

    processDescription: "Proses engineering yang fokus, cepat, dan tetap menjaga kualitas produk.",

    step1Title: "Discovery",
    step1Desc: "Memahami tujuan produk, kebutuhan bisnis, serta arah teknis.",

    step2Title: "Development",
    step2Desc: "Membangun sistem yang skalabel, maintainable, dan siap produksi.",

    step3Title: "Launch & Improvement",
    step3Desc: "Deployment, monitoring, optimasi, dan iterasi berkelanjutan.",

    reviewsKicker: "Testimoni",

    reviewsTitle: "Dipercaya oleh Founder",

    reviewsDescription: "Pilihan ulasan dari klien dan kolaborator.",

    faqTitle: "Pertanyaan Umum",

    faqDescription: "Jawaban singkat mengenai kemampuan engineering, alur kerja, dan kolaborasi.",

    ctaTitle: "Mari bangun sesuatu yang berdampak.",

    ctaDescription:
      "Mulai dari MVP, pengembangan platform, hingga scaling infrastructure — azlir.dev siap membantu.",

    footerDesc: "Membangun produk digital yang skalabel.",

    aboutTitle: "Tentang Rizal",

    aboutBio:
      "Saya Rizal Hadiyansah (azliR), seorang Mobile & Backend Developer yang fokus membangun ekosistem produk digital berkualitas tinggi — mulai dari aplikasi mobile berperforma tinggi hingga backend real-time yang aman dan efisien.",

    aboutSubtitle: "Membangun ekosistem produk premium dari nol.",

    pillarFullstackTitle: "Sistem Full-Stack",

    pillarFullstackDesc:
      "Mengembangkan ekosistem web dan mobile secara end-to-end dengan integrasi mulus dan sinkronisasi real-time.",

    pillarMobileTitle: "Aplikasi Mobile",

    pillarMobileDesc:
      "Membangun aplikasi iOS & Android berkualitas tinggi menggunakan Flutter dan React Native (Expo).",

    pillarBackendTitle: "Backend Skalabel",

    pillarBackendDesc:
      "Mengembangkan API aman, sistem matchmaking kustom, dan arsitektur real-time menggunakan Go dan Node.js.",

    pillarMLTitle: "Machine Learning",

    pillarMLDesc:
      "Merancang dan menerapkan model RNN serta CNN yang dioptimalkan untuk perangkat mobile dan edge computing.",

    fiverrRatingText: "Developer dengan rating 5.0★ di Fiverr",

    viewFiverrProfile: "Lihat Profil Fiverr",

    worksTitle: "Seluruh Karya",

    worksDescription:
      "Daftar lengkap platform, sistem, dan produk yang dikembangkan untuk klien maupun proyek independen.",

    keyHighlights: "Sorotan Utama",
    technicalExpertise: "Keahlian Teknis",
    fiverrClientFeedback: "Ulasan Klien Fiverr",

    heroTitleLine1: "Membangun aplikasi",
    heroTitleLine2: "mobile & sistem",
    heroTitleLine3: "backend berkinerja tinggi.",

    mobileEngineering: "Mobile Engineering",
    backendSystems: "Backend Systems",
    realtimePlatforms: "Platform Real-time",
    aiIntegration: "Integrasi AI",

    viewCaseStudy: "Lihat Studi Kasus",
    emailMe: "Hubungi via Email",

    metaTitle: "azlir.dev — Premium Product Engineering",

    metaDescription:
      "Membangun landing page premium, dashboard berperforma tinggi, dan aplikasi mobile untuk startup.",
    contactTitle: "Mulai Proyek",
    contactDescription:
      "Punya ide atau rencana proyek? Mari kita bangun sesuatu yang hebat bersama. Pilih cara Anda untuk menghubungi saya.",
    copyEmail: "Salin Alamat Email",
    copied: "Disalin!",
    openEmailClient: "Buka Aplikasi Email",
    sendQuickMessage: "Atau Kirim Pesan Cepat",
    fieldName: "Nama Anda",
    fieldEmail: "Email Anda",
    fieldMessage: "Pesan Anda",
    fieldMessagePlaceholder: "Ceritakan tentang proyek, tujuan, atau linimasa Anda...",
    send: "Kirim Pesan",
    sending: "Mengirim...",
    errorNameRequired: "Nama wajib diisi",
    errorEmailRequired: "Email wajib diisi",
    errorInvalidEmail: "Masukkan alamat email yang valid",
    errorMessageRequired: "Pesan wajib diisi",
    messageSentSuccess: "Pesan siap! Membuka aplikasi email Anda...",
    close: "Tutup",
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
      const translationSet = translations[lang] as Record<string, string>;
      return translationSet[key] || translations.en[key];
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
