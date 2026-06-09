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
    id: "inclass",
    title: "InClass",
    description:
      "An AI-powered, real-time classroom management and digital education platform with deep AI integration and real-time collaboration.",
    tags: ["React Native", "Expo", "React", "Vite+", "Convex"],
    isFeatured: true,
    builtItems: [
      "Mobile App",
      "Web App & Admin Panel",
      "Real-Time Backend",
      "AI-Assisted Grading",
      "Proctored Assessment & Integrity Monitoring",
      "Subscription System",
    ],
    impact:
      "Serving classroom management features with proctored monitoring and AI-assisted grading.",
    ctaText: "View Project",
    href: "https://app.inclass.azlir.dev/",
  },
  {
    id: "wucs",
    title: "Wake Up Call Service",
    description:
      "An ecosystem of mobile applications and backend services for a VoIP-based scheduled wake-up call service.",
    tags: ["Flutter", "Daily.co", "Go", "GoFiber", "RevenueCat"],
    isFeatured: false,
    ctaText: "Visit Website",
    href: "https://realwakeupcalls.com/",
  },
  {
    id: "isiu-ai",
    title: "iSIU.AI",
    description:
      "A mobile companion application for Green Grid Inc.'s iSIU® (Instant Situational Insights®) platform, designed for electric utilities and substation operators.",
    tags: ["Flutter", "Computer Vision", "AI", "Edge Intelligence"],
    isFeatured: false,
    ctaText: "Visit Website",
    href: "https://isiu.ai/",
  },
  {
    id: "mutualan",
    title: "mutualan.com",
    description:
      "A free, secure follow-for-follow platform for TikTok and Instagram designed to help users grow their social media presence.",
    tags: ["Flutter", "Go", "GoFiber", "TikTok", "Instagram"],
    isFeatured: false,
    ctaText: "Visit Website",
    href: "https://mutualan.com/",
  },
  {
    id: "morp-sdk",
    title: "Morp SDK",
    description:
      "A Kotlin-based Android SDK and B2B licensing ecosystem integrating third-party mobile security engines to simplify antivirus and security features for enterprise clients.",
    tags: ["Kotlin", "Android SDK", "Flutter", "Go", "GoFiber"],
    isFeatured: false,
    ctaText: "View Case Study",
  },
  {
    id: "bandung-bedas",
    title: "Bandung Bedas",
    description:
      "A secure mobile app and real-time backend vote tallying system used by thousands of poll watchers across 5,859 voting stations during the 2024 Indonesian Regional Elections.",
    tags: ["Flutter", "Go", "GoFiber", "Real-Time Dashboard"],
    isFeatured: false,
    ctaText: "View Post",
    href: "https://www.linkedin.com/posts/rizki-aryandi-257590203_sebagai-ketua-tim-it-saya-sangat-bangga-ugcPost-7270220686621630464-OIZA/",
  },
];
