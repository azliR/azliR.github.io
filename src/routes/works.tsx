import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import { useLanguage } from "../components/layout/LanguageProvider";
import { Globe, Github, Smartphone, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Project {
  title: string;
  description: { en: string; id: string };
  platforms: string;
  highlights: { en: string[]; id: string[] };
  tech: string[];
  category: "web" | "mobile" | "backend" | "ml";
  links: {
    website?: string;
    webapp?: string;
    playstore?: string;
    appstore?: string;
    github?: string;
  };
}

const projectsData: Project[] = [
  {
    title: "InClass",
    category: "web",
    platforms: "Mobile (React Native / Expo), Web (React / Vite+), Backend (Convex)",
    tech: ["React Native", "Expo", "React", "Vite+", "Convex", "Real-time", "AI Grading"],
    description: {
      en: "An AI-powered, real-time classroom management and digital education platform, similar to Google Classroom but with deep AI integration and real-time collaboration.",
      id: "Platform manajemen kelas & pendidikan digital real-time berbasis AI, serupa dengan Google Classroom tetapi dengan integrasi AI mendalam dan kolaborasi waktu nyata.",
    },
    highlights: {
      en: [
        "Developed classroom management supporting Teacher and Student roles.",
        "Real-time serverless backend using Convex for instant client synchronization.",
        "Academic Features: Assignment systems with AI-Assisted Grading.",
        "Integrity Monitoring: Real-time exam monitoring that detects app switching.",
      ],
      id: [
        "Mengembangkan manajemen kelas yang mendukung peran Guru dan Siswa.",
        "Backend serverless real-time menggunakan Convex untuk sinkronisasi instan klien.",
        "Fitur Akademik: Sistem tugas dengan Penilaian Berbantuan AI.",
        "Pemantauan Integritas: Pengawasan ujian waktu nyata yang mendeteksi peralihan aplikasi.",
      ],
    },
    links: {
      website: "https://inclass.azlir.dev/",
      webapp: "https://app.inclass.azlir.dev/",
      playstore: "https://play.google.com/store/apps/details?id=dev.azlir.inclass",
    },
  },
  {
    title: "Wake Up Call Service",
    category: "web",
    platforms: "Mobile (Flutter), Web Dashboard, Backend (Go / GoFiber)",
    tech: ["Flutter", "Go", "GoFiber", "VoIP", "Daily.co", "RevenueCat", "PostHog", "FCM"],
    description: {
      en: "An ecosystem of mobile applications and backend services for a VoIP-based scheduled wake-up call service.",
      id: "Ekosistem aplikasi seluler dan layanan backend untuk layanan panggilan bangun tidur terjadwal berbasis VoIP.",
    },
    highlights: {
      en: [
        "VoIP SDK integration with iOS PushKit and Android VoIP Push Notifications.",
        "Custom matchmaking algorithm to match callers with recipients.",
        "Earnings dashboard and admin payout management portal.",
      ],
      id: [
        "Integrasi VoIP SDK dengan iOS PushKit dan Android VoIP Push Notifications.",
        "Algoritma pencarian jodoh panggilan khusus untuk mencocokkan penelepon dengan penerima.",
        "Dasbor pendapatan dan portal manajemen pembayaran admin.",
      ],
    },
    links: {
      website: "https://realwakeupcalls.com/",
      playstore: "https://play.google.com/store/apps/details?id=com.socurious.wakeupcallservice",
      appstore: "https://apps.apple.com/us/app/wake-up-call-service/id6741027747",
    },
  },
  {
    title: "mutualan.com",
    category: "web",
    platforms: "Mobile (Flutter), Web Admin, Backend (Go / GoFiber)",
    tech: ["Flutter", "Go", "GoFiber", "Redis", "MySQL", "Scalability"],
    description: {
      en: "A free, secure follow-for-follow platform for TikTok and Instagram designed to help users grow their social media presence.",
      id: "Platform saling follow gratis dan aman untuk TikTok dan Instagram yang dirancang untuk membantu pengguna mengembangkan kehadiran media sosial mereka.",
    },
    highlights: {
      en: [
        "Serves 39,000+ registered active users.",
        "Processes over 450,000+ follow actions per day.",
        "Highly optimized API backend with minimal latency.",
      ],
      id: [
        "Melayani 39.000+ pengguna aktif terdaftar.",
        "Memproses lebih dari 450.000+ aksi follow per hari.",
        "Backend API yang sangat optimal dengan latensi minimal.",
      ],
    },
    links: {
      website: "https://mutualan.com/",
    },
  },
  {
    title: "sociatools.com",
    category: "web",
    platforms: "Web (Next.js)",
    tech: ["Next.js", "React", "SEO", "Tailwind CSS"],
    description: {
      en: "A comprehensive social media toolkit site for content creators to optimize content, boost engagement, and monitor analytics.",
      id: "Situs perangkat media sosial komprehensif bagi pembuat konten untuk mengoptimalkan konten, meningkatkan keterlibatan, dan memantau analitik.",
    },
    highlights: {
      en: [
        "Emphasized SEO, page speed, and responsive layouts.",
        "Features watermark-free TikTok Downloader and Hashtags Tracker.",
      ],
      id: [
        "Menekankan SEO, kecepatan halaman, dan tata letak responsif.",
        "Fitur Pengunduh TikTok tanpa tanda air dan Pelacak Tagar.",
      ],
    },
    links: {
      website: "https://sociatools.com/",
    },
  },
  {
    title: "Morp SDK",
    category: "web",
    platforms: "Android SDK (Kotlin), Backend (Go), Admin Dashboard (Flutter)",
    tech: ["Kotlin", "Android SDK", "Fat-AAR", "Go", "Flutter", "B2B Licensing"],
    description: {
      en: "A Kotlin-based Android SDK and B2B licensing ecosystem integrating third-party mobile security engines for enterprise clients.",
      id: "SDK Android berbasis Kotlin dan ekosistem lisensi B2B yang mengintegrasikan mesin keamanan seluler pihak ketiga untuk klien korporat.",
    },
    highlights: {
      en: [
        "Features security initialization, background scan, and URL filtering.",
        "Dynamic lazy-loading of native .so libraries to reduce initial SDK size.",
      ],
      id: [
        "Fitur inisialisasi keamanan, pemindaian latar belakang, dan penyaringan URL.",
        "Pemuatan malas dinamis pustaka .so asli untuk mengurangi ukuran awal SDK.",
      ],
    },
    links: {},
  },
  {
    title: "Huyula AV",
    category: "web",
    platforms: "Mobile (Flutter & Kotlin), Backend (Go), Web Admin (Flutter)",
    tech: ["Flutter", "Kotlin", "Go", "Android Dialer Role", "Security Scan"],
    description: {
      en: "A comprehensive Android digital defense ecosystem with antivirus, URL filtering, call spam blocker, and admin portal.",
      id: "Ekosistem pertahanan digital Android komprehensif dengan antivirus, penyaringan URL, pemblokir spam panggilan, dan portal admin.",
    },
    highlights: {
      en: [
        "Integrates real-time spam call detection and default phone handler.",
        "Dynamic delivery of antivirus signature updates from the Go backend.",
      ],
      id: [
        "Mengintegrasikan deteksi panggilan spam real-time dan default phone handler.",
        "Pengiriman dinamis pembaruan tanda tangan antivirus dari backend Go.",
      ],
    },
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.huyula.av",
    },
  },
  {
    title: "Huyula Caller",
    category: "web",
    platforms: "Mobile (Flutter & Kotlin), Backend (Go), Web Admin (Flutter)",
    tech: ["Flutter", "Kotlin", "Go", "Caller ID", "Spam Spam Block"],
    description: {
      en: "A privacy-focused caller identification app that filters spam, telemarketing, and fraud calls.",
      id: "Aplikasi identifikasi penelepon yang berfokus pada privasi untuk menyaring spam, telemarketing, dan panggilan penipuan.",
    },
    highlights: {
      en: [
        "Manual number lookup and caller ID against global database.",
        "Spam reporting analytics dashboard.",
      ],
      id: [
        "Pencarian nomor manual dan ID penelepon terhadap database global.",
        "Dasbor analitik pelaporan spam.",
      ],
    },
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.huyula.caller",
    },
  },
  {
    title: "Pilkada Real Count & Witness App 2024",
    category: "web",
    platforms: "Mobile (Flutter), Web Live Dashboard, Backend (Go / GoFiber)",
    tech: ["Flutter", "Go", "GoFiber", "Realtime Dashboard", "High Traffic"],
    description: {
      en: "A secure vote tallying system used by witnesses across 5,859 voting stations during the 2024 Indonesian Regional Elections.",
      id: "Sistem penghitungan suara aman yang digunakan oleh saksi di 5.859 TPS selama Pilkada Serentak Indonesia 2024.",
    },
    highlights: {
      en: [
        "High-performance backend processing concurrent witness reports.",
        "Live vote counter dashboard in the central command room.",
        "Achieved 99.99% accuracy matching official commission results.",
      ],
      id: [
        "Backend berkinerja tinggi memproses laporan saksi secara bersamaan.",
        "Dasbor penghitung suara langsung di ruang komando pusat.",
        "Mencapai akurasi 99,99% mencocokkan hasil resmi komisi pemilihan.",
      ],
    },
    links: {
      website:
        "https://www.linkedin.com/posts/rizki-aryandi-257590203_sebagai-ketua-tim-it-saya-sangat-bangga-ugcPost-7270220686621630464-OIZA/",
    },
  },
  {
    title: "Sholawatan",
    category: "mobile",
    platforms: "Android, iOS, Web",
    tech: ["Flutter", "BLoC", "DDD Architecture", "Firebase", "GetIt"],
    description: {
      en: "A lyric app that allows users to find and listen to shalawat (praises) to the Prophet Muhammad.",
      id: "Aplikasi lirik yang memungkinkan pengguna mencari dan mendengarkan shalawat kepada Nabi Muhammad.",
    },
    highlights: {
      en: [
        "Built using Domain-Driven Design (DDD) principles.",
        "Uses BLoC state management and Firebase integration.",
      ],
      id: [
        "Dibangun menggunakan prinsip Domain-Driven Design (DDD).",
        "Menggunakan manajemen status BLoC dan integrasi Firebase.",
      ],
    },
    links: {},
  },
  {
    title: "OutClass Mobile",
    category: "mobile",
    platforms: "Android, iOS",
    tech: ["Flutter", "GoFiber", "MongoDB", "Redis", "JWT"],
    description: {
      en: "A mobile app that helps students organize their classwork and collaborate with each other.",
      id: "Aplikasi seluler yang membantu siswa mengatur tugas kelas dan berkolaborasi satu sama lain.",
    },
    highlights: {
      en: [
        "Dependency injection with Injectable and GetIt.",
        "Integrated with a custom GoFiber, MongoDB, and Redis API.",
      ],
      id: [
        "Injeksi ketergantungan dengan Injectable dan GetIt.",
        "Terintegrasi dengan API khusus berbasis GoFiber, MongoDB, dan Redis.",
      ],
    },
    links: {
      github: "https://github.com/azliR/flutter_outclass",
    },
  },
  {
    title: "CompressIt",
    category: "mobile",
    platforms: "Android",
    tech: ["Flutter", "Dart", "On-Device Compression", "Image/Audio Process"],
    description: {
      en: "A local image and audio compression and conversion app, processing files completely on-device.",
      id: "Aplikasi kompresi dan konversi gambar dan audio lokal, memproses berkas sepenuhnya di perangkat.",
    },
    highlights: {
      en: [
        "On-device local conversion (JPEG, PNG, HEIC, WebP, MP3, WAV).",
        "Zero-server dependency ensuring user privacy.",
      ],
      id: [
        "Konversi lokal langsung di perangkat (JPEG, PNG, HEIC, WebP, MP3, WAV).",
        "Ketergantungan nol server memastikan privasi pengguna.",
      ],
    },
    links: {
      github: "https://github.com/azliR/flutter_compress_it",
    },
  },
  {
    title: "iSIU.AI",
    category: "mobile",
    platforms: "Mobile (Android/iOS)",
    tech: ["Flutter", "Computer Vision", "Real-Time Alerts", "Edge Intelligence"],
    description: {
      en: "A mobile companion app for Green Grid Inc.'s iSIU® platform, monitoring powerlines using computer vision.",
      id: "Aplikasi pendamping seluler untuk platform iSIU® Green Grid Inc., memantau kabel listrik menggunakan visi komputer.",
    },
    highlights: {
      en: [
        "Real-time hazard alerts (vegetation, equipment damage).",
        "Controls remote cameras and displays live weather analytics.",
      ],
      id: [
        "Peringatan bahaya waktu nyata (kontak vegetasi, kerusakan peralatan).",
        "Mengontrol kamera jarak jauh dan menampilkan analitik cuaca langsung.",
      ],
    },
    links: {
      website: "https://isiu.ai/",
      playstore: "https://play.google.com/store/apps/details?id=com.greengridinc.isiu",
      appstore: "https://apps.apple.com/us/app/isiu/id6471646259",
    },
  },
  {
    title: "Si-Gesit Lansia",
    category: "mobile",
    platforms: "Mobile (Android/iOS)",
    tech: ["Flutter", "BRIN Partnership", "Accessibility Design", "Elderly UX"],
    description: {
      en: "A mobile app developed in collaboration with BRIN to help elderly users and health workers log and monitor health suggestions.",
      id: "Aplikasi seluler yang dikembangkan dalam kolaborasi dengan BRIN untuk membantu pengguna lansia dan pekerja kesehatan mencatat serta memantau saran kesehatan.",
    },
    highlights: {
      en: [
        "Elderly-friendly UX with large touch targets.",
        "Developed in partnership with National Research and Innovation Agency (BRIN).",
      ],
      id: [
        "UX ramah lansia dengan target sentuh besar.",
        "Dikembangkan dalam kemitraan dengan Badan Riset dan Inovasi Nasional (BRIN).",
      ],
    },
    links: {
      website: "https://sigesitapp.com/",
    },
  },
  {
    title: "PATuSBa",
    category: "mobile",
    platforms: "Mobile (Android/iOS)",
    tech: ["Flutter", "Growth Tracker", "TB Assessment", "BRIN Collaboration"],
    description: {
      en: "A mobile application developed with BRIN to assist parents in toddler growth tracking and early stunting detection.",
      id: "Aplikasi seluler yang dikembangkan bersama BRIN untuk membantu orang tua memantau tumbuh kembang balita dan deteksi dini stunting.",
    },
    highlights: {
      en: [
        "Growth metrics evaluator for toddler health.",
        "Tuberculosis risk questionnaire assessment tool.",
      ],
      id: [
        "Evaluator metrik pertumbuhan untuk kesehatan balita.",
        "Alat penilaian kuesioner risiko Tuberkulosis.",
      ],
    },
    links: {
      website: "https://patusba.com/",
    },
  },
  {
    title: "Lovie",
    category: "mobile",
    platforms: "Mobile (Android/iOS)",
    tech: ["Flutter", "Figma to Code", "Healthcare Platform", "App Store Release"],
    description: {
      en: "A mobile healthcare homecare platform consisting of separate Customer and Provider apps.",
      id: "Platform layanan homecare kesehatan seluler yang terdiri dari aplikasi Pelanggan dan Penyedia secara terpisah.",
    },
    highlights: {
      en: [
        "Built and released Customer & Healthcare Provider apps within 3 months.",
        "Coordinated Figma-to-code alignments and backend syncs.",
      ],
      id: [
        "Membangun dan merilis aplikasi Pelanggan & Penyedia Layanan Kesehatan dalam 3 bulan.",
        "Mengoordinasikan penyelarasan Figma-ke-kode dan sinkronisasi backend.",
      ],
    },
    links: {},
  },
  {
    title: "SIP (Sistem Informasi Pendidikan)",
    category: "mobile",
    platforms: "Mobile (Android/iOS)",
    tech: ["Flutter", "Navigation Design", "Educational Tech"],
    description: {
      en: "An educational information system mobile application.",
      id: "Aplikasi seluler sistem informasi pendidikan.",
    },
    highlights: {
      en: ["Designed comprehensive use case diagrams and structured navigation routes."],
      id: ["Merancang diagram use case komprehensif dan menyusun rute navigasi."],
    },
    links: {},
  },
  {
    title: "OutClass API",
    category: "backend",
    platforms: "Go (GoFiber), MongoDB, Redis",
    tech: ["Go", "GoFiber", "MongoDB", "Redis", "JWT Auth", "REST API"],
    description: {
      en: "A RESTful API providing high-performance backend services for the OutClass mobile application.",
      id: "API RESTful yang menyediakan layanan backend berkinerja tinggi untuk aplikasi seluler OutClass.",
    },
    highlights: {
      en: [
        "Fast GoFiber backend handles classroom payloads.",
        "Integrated with Redis caching and secure JWT tokens.",
      ],
      id: [
        "Backend GoFiber cepat menangani payload ruang kelas.",
        "Terintegrasi dengan caching Redis dan token JWT yang aman.",
      ],
    },
    links: {
      github: "https://github.com/azliR/gofiber_outclass-api",
    },
  },
  {
    title: "Dart Restaurant API",
    category: "backend",
    platforms: "Dart (Shelf package)",
    tech: ["Dart", "Shelf package", "Backend", "REST API"],
    description: {
      en: "A lightweight REST API designed for a Restaurant Application built in pure Dart.",
      id: "API REST ringan yang dirancang untuk Aplikasi Restoran yang dibangun dengan Dart murni.",
    },
    highlights: {
      en: ["Uses the Dart Shelf package for clean microservice handling."],
      id: ["Menggunakan paket Dart Shelf untuk penanganan mikroservis yang bersih."],
    },
    links: {
      github: "https://github.com/azliR/dart_restaurant_api",
    },
  },
  {
    title: "sholat-ml",
    category: "ml",
    platforms: "Accelerometer (Mi Band 5), Mobile RNN",
    tech: ["Machine Learning", "RNN", "GRU", "TensorFlow Lite", "Accelerometer"],
    description: {
      en: "A machine learning model running on-device to classify Islamic prayer movements using accelerometer data.",
      id: "Model machine learning yang berjalan langsung di perangkat untuk mengklasifikasikan gerakan sholat menggunakan data akselerometer.",
    },
    highlights: {
      en: [
        "Reaches 95.38% accuracy utilizing a GRU model.",
        "Optimized model size to 89.53 KB for real-time mobile execution.",
      ],
      id: [
        "Mencapai akurasi 95,38% menggunakan model GRU.",
        "Mengoptimalkan ukuran model menjadi 89,53 KB untuk eksekusi seluler real-time.",
      ],
    },
    links: {
      github: "https://github.com/azliR/sholat-ml",
    },
  },
  {
    title: "murojaah-ml",
    category: "ml",
    platforms: "Audio Classification, Web App (CNN)",
    tech: ["Machine Learning", "CNN", "TensorFlow", "Keras", "Audio Processing"],
    description: {
      en: "A machine learning model classifying the recitation of Quranic verses using Convolutional Neural Networks.",
      id: "Model machine learning yang mengklasifikasikan lantunan ayat-ayat Al-Quran menggunakan Convolutional Neural Networks.",
    },
    highlights: {
      en: [
        "Achieves 89.06% accuracy in audio classification.",
        "Aids users in learning and memorizing the Quran.",
      ],
      id: [
        "Mencapai akurasi 89,06% dalam klasifikasi audio.",
        "Membantu pengguna dalam mempelajari dan menghafal Al-Quran.",
      ],
    },
    links: {
      website: "https://murojaah.netlify.app/",
      github: "https://github.com/azliR/murojaah-ml",
    },
  },
];

export const Route = createFileRoute("/works")({
  component: WorksComponent,
});

function WorksComponent() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile" | "backend" | "ml">("all");

  const filteredProjects =
    activeTab === "all" ? projectsData : projectsData.filter((p) => p.category === activeTab);

  return (
    <div className="mx-auto w-full max-w-[1280px] border-x border-border bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container>
          {/* Header */}
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {lang === "en" ? "Back to Home" : "Kembali ke Beranda"}
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">{t("worksTitle")}</h1>
            <p className="text-muted text-lg max-w-2xl">{t("worksDescription")}</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-6 mb-10">
            {(["all", "web", "mobile", "backend", "ml"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-200 relative cursor-pointer ${
                  activeTab === tab
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t(`${tab}Category` as any)}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 border border-border bg-card/50 hover:bg-card transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">
                      {t(`${project.category}Category` as any)}
                    </span>
                    <span className="text-xs font-mono text-muted/60">
                      {project.title === "InClass" && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          {t("liveBadge")}
                        </span>
                      )}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h3>

                  <p className="text-xs text-muted mb-4 font-medium italic">{project.platforms}</p>

                  <p className="text-muted text-sm mb-6 leading-relaxed">
                    {lang === "en" ? project.description.en : project.description.id}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                      {t("keyHighlights")}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted list-disc list-inside">
                      {(lang === "en" ? project.highlights.en : project.highlights.id).map(
                        (hl, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {hl}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono border border-border bg-accent/25 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-4 border-t border-border pt-4 text-xs font-bold uppercase tracking-wider">
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors duration-200"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Website
                      </a>
                    )}
                    {project.links.webapp && (
                      <a
                        href={project.links.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors duration-200"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Web App
                      </a>
                    )}
                    {project.links.playstore && (
                      <a
                        href={project.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors duration-200"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        Play Store
                      </a>
                    )}
                    {project.links.appstore && (
                      <a
                        href={project.links.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors duration-200"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        App Store
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors duration-200"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
