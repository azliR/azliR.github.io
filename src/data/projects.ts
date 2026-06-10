export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    id: string;
  };
  tags: string[];
  href?: string;
  isFeatured?: boolean;
  builtItems?: {
    en: string;
    id: string;
  }[];
  impact?: {
    en: string;
    id: string;
  };
  ctaText?: {
    en: string;
    id: string;
  };
}

export const projects: Project[] = [
  {
    id: "inclass",
    title: "InClass",
    description: {
      en: "An AI-powered, real-time classroom management and digital education platform with deep AI integration and real-time collaboration.",
      id: "Platform manajemen kelas real-time dan pendidikan digital berbasis AI dengan integrasi AI mendalam dan kolaborasi real-time.",
    },
    tags: ["React Native", "Expo", "React", "Vite+", "Convex"],
    isFeatured: true,
    builtItems: [
      { en: "Mobile App", id: "Aplikasi Mobile" },
      { en: "Web App & Admin Panel", id: "Aplikasi Web & Panel Admin" },
      { en: "Real-Time Backend", id: "Backend Real-Time" },
      { en: "AI-Assisted Grading", id: "Penilaian Berbantuan AI" },
      {
        en: "Proctored Assessment & Integrity Monitoring",
        id: "Ujian Terawasi & Pemantauan Integritas",
      },
      { en: "Subscription System", id: "Sistem Langganan" },
    ],
    impact: {
      en: "Serving classroom management features with proctored monitoring and AI-assisted grading.",
      id: "Menyediakan fitur manajemen kelas dengan pemantauan terawasi dan penilaian berbantuan AI.",
    },
    ctaText: {
      en: "View Project",
      id: "Lihat Proyek",
    },
    href: "https://inclass.azlir.dev/",
  },
  {
    id: "wucs",
    title: "Wake Up Call Service",
    description: {
      en: "An ecosystem of mobile applications and backend services for a VoIP-based scheduled wake-up call service.",
      id: "Ekosistem aplikasi mobile dan layanan backend untuk layanan panggilan bangun tidur terjadwal berbasis VoIP.",
    },
    tags: ["Flutter", "Daily.co", "Go", "GoFiber", "RevenueCat"],
    isFeatured: false,
    ctaText: {
      en: "Visit Website",
      id: "Kunjungi Situs Web",
    },
    href: "https://realwakeupcalls.com/",
  },
  {
    id: "isiu-ai",
    title: "iSIU.AI",
    description: {
      en: "A mobile companion application for Green Grid Inc.'s iSIU® (Instant Situational Insights®) platform, designed for electric utilities and substation operators.",
      id: "Aplikasi pendamping mobile untuk platform iSIU® (Instant Situational Insights®) dari Green Grid Inc., dirancang untuk utilitas listrik dan operator gardu induk.",
    },
    tags: ["Flutter", "Computer Vision", "AI", "Edge Intelligence"],
    isFeatured: false,
    ctaText: {
      en: "Visit Website",
      id: "Kunjungi Situs Web",
    },
    href: "https://isiu.ai/",
  },
  {
    id: "mutualan",
    title: "mutualan.com",
    description: {
      en: "A free, secure follow-for-follow platform for TikTok and Instagram designed to help users grow their social media presence.",
      id: "Platform saling ikuti (follow-for-follow) gratis dan aman untuk TikTok dan Instagram yang dirancang untuk membantu pengguna mengembangkan kehadiran media sosial mereka.",
    },
    tags: ["Flutter", "Go", "GoFiber", "TikTok", "Instagram"],
    isFeatured: false,
    ctaText: {
      en: "Visit Website",
      id: "Kunjungi Situs Web",
    },
    href: "https://mutualan.com/",
  },
  {
    id: "morp-sdk",
    title: "Morp SDK",
    description: {
      en: "A Kotlin-based Android SDK and B2B licensing ecosystem integrating third-party mobile security engines to simplify antivirus and security features for enterprise clients.",
      id: "SDK Android berbasis Kotlin dan ekosistem lisensi B2B yang mengintegrasikan mesin keamanan mobile pihak ketiga untuk menyederhanakan fitur antivirus dan keamanan bagi klien korporat.",
    },
    tags: ["Kotlin", "Android SDK", "Flutter", "Go", "GoFiber"],
    isFeatured: false,
  },
  {
    id: "bandung-bedas",
    title: "Bandung Bedas",
    description: {
      en: "A secure mobile app and real-time backend vote tallying system used by thousands of poll watchers across 5,859 voting stations during the 2024 Indonesian Regional Elections.",
      id: "Aplikasi mobile aman dan sistem rekapitulasi suara backend real-time yang digunakan oleh ribuan saksi di 5.859 TPS selama Pilkada Serentak 2024 di Indonesia.",
    },
    tags: ["Flutter", "Go", "GoFiber", "Real-Time Dashboard"],
    isFeatured: false,
    ctaText: {
      en: "View Post",
      id: "Lihat Postingan",
    },
    href: "https://www.linkedin.com/posts/rizki-aryandi-257590203_sebagai-ketua-tim-it-saya-sangat-bangga-ugcPost-7270220686621630464-OIZA/",
  },
];
