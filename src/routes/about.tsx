import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import { useLanguage } from "../components/layout/LanguageProvider";
import { ArrowLeft, User, Server, Layers, Cpu, ArrowUpRight, Smartphone } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Testimonial {
  author: string;
  location: string;
  review: { en: string; id: string };
}

const testimonials: Testimonial[] = [
  {
    author: "venom96",
    location: "Nepal",
    review: {
      en: "Rizal H exceeded my expectations in every aspect! The professionalism and bug-free delivery were top-notch, and his attention to detail was impeccable. Working with him was an absolute pleasure—the fluency in communication and his level of cooperation were truly outstanding.",
      id: "Rizal H melampaui harapan saya dalam setiap aspek! Profesionalisme dan pengiriman bebas bug-nya sangat berkualitas tinggi, dan perhatiannya terhadap detail sangat sempurna. Bekerja dengannya adalah kesenangan mutlak—kelancaran komunikasi dan tingkat kerja samanya benar-benar luar biasa.",
    },
  },
  {
    author: "drivooo",
    location: "United States (3 Projects)",
    review: {
      en: "Amazing person and very experienced person. Know exactly what he is doing and don't let any chance of improvement go away. Always giving suggestions about how we can improve. Highly recommended. Loved working with him.",
      id: "Orang yang luar biasa dan sangat berpengalaman. Tahu persis apa yang dia lakukan dan tidak membiarkan kesempatan untuk perbaikan terlewat. Selalu memberikan saran tentang bagaimana kita bisa berkembang. Sangat direkomendasikan. Senang bekerja dengannya.",
    },
  },
  {
    author: "amineandaloussi",
    location: "Morocco (2 Projects)",
    review: {
      en: "Quick, honest, very friendly; the price is great. Really recommended. Second time and not the last.",
      id: "Cepat, jujur, sangat ramah; harganya sangat bagus. Sangat direkomendasikan. Kedua kalinya dan bukan yang terakhir.",
    },
  },
];

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  const { t, lang } = useLanguage();

  const capabilitiesList = [
    {
      icon: <Layers className="h-6 w-6 text-foreground" />,
      title: t("pillarFullstackTitle"),
      desc: t("pillarFullstackDesc"),
    },
    {
      icon: <Smartphone className="h-6 w-6 text-foreground" />,
      title: t("pillarMobileTitle"),
      desc: t("pillarMobileDesc"),
    },
    {
      icon: <Server className="h-6 w-6 text-foreground" />,
      title: t("pillarBackendTitle"),
      desc: t("pillarBackendDesc"),
    },
    {
      icon: <Cpu className="h-6 w-6 text-foreground" />,
      title: t("pillarMLTitle"),
      desc: t("pillarMLDesc"),
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1280px] border-x border-border bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container>
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {lang === "en" ? "Back to Home" : "Kembali ke Beranda"}
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">{t("aboutTitle")}</h1>
            <p className="text-muted text-lg max-w-2xl">{t("aboutSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border py-12 mb-12">
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <div className="h-32 w-32 bg-accent/20 border border-border flex items-center justify-center mb-4">
                <User className="h-16 w-16 text-muted" />
              </div>
              <span className="text-sm font-mono font-bold bg-foreground text-background px-3 py-1 uppercase">
                azliR
              </span>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="text-lg leading-relaxed text-muted mb-4">{t("aboutBio")}</p>
              <div className="flex gap-4">
                <a
                  href="mailto:rizalhadiyansah@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:underline"
                >
                  Email me
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.fiverr.com/rizalhadiyansah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:underline"
                >
                  Fiverr Profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              {lang === "en" ? "Technical Expertise" : "Keahlian Teknis"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilitiesList.map((pillar, idx) => (
                <div key={idx} className="p-6 border border-border bg-card/30">
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight">
                {lang === "en" ? "Fiverr Client Feedback" : "Umpan Balik Klien Fiverr"}
              </h2>
              <a
                href="https://www.fiverr.com/rizalhadiyansah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 border border-border hover:bg-accent transition-colors duration-200"
              >
                {t("fiverrRatingText")}
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-border bg-card/50 flex flex-col justify-between"
                >
                  <p className="text-sm text-muted italic mb-6 leading-relaxed">
                    "{lang === "en" ? test.review.en : test.review.id}"
                  </p>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{test.author}</h4>
                    <p className="text-xs text-muted">{test.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
