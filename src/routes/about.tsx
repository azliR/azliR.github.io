import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import { useLanguage } from "../components/layout/LanguageProvider";
import { Server, Layers, Cpu, ArrowUpRight, Smartphone } from "lucide-react";

interface Testimonial {
  author: string;
  location: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    author: "venom96",
    location: "Nepal",
    review:
      "Rizal H exceeded my expectations in every aspect! The professionalism and bug-free delivery were top-notch, and his attention to detail was impeccable. Working with him was an absolute pleasure—the fluency in communication and his level of cooperation were truly outstanding.",
  },
  {
    author: "drivooo",
    location: "United States (Project 1)",
    review:
      "Amazing person and very experienced person. Know exactly what he is doing and don't let any chance of improvement go away. Always giving suggestions about how we can improve. Highly recommended. Loved working with him. He is quite experienced and knows his job.",
  },
  {
    author: "drivooo",
    location: "United States (Project 2)",
    review:
      "Always the best, I always work with him and the results are excellent. Professional and always ready to help the customer. It is a guarantee of success.",
  },
  {
    author: "drivooo",
    location: "United States (Project 3)",
    review:
      "This seller is patient, responsive, and professional. I would recommend him to anyone. Thank you so much!",
  },
  {
    author: "amineandaloussi",
    location: "Morocco (Project 1)",
    review: "Quick, honest, very friendly; the price is great. Really recommended",
  },
  {
    author: "amineandaloussi",
    location: "Morocco (Project 2)",
    review: "Second time and not the last",
  },
  {
    author: "kozarni42",
    location: "Myanmar (Burma)",
    review: "You are very smart and very smart. I liked what you did bro..",
  },
  {
    author: "harry_yau",
    location: "Morocco",
    review: "Good delivery from the seller",
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
      <main className="flex-1 py-12 flex flex-col gap-16">
        <Container>
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">{t("aboutTitle")}</h1>
            <p className="text-muted text-lg max-w-2xl">{t("aboutSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border py-12 mb-12">
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <img
                src="/rizal.webp"
                alt="Rizal Hadiyansah"
                className="h-32 object-cover border border-border mb-4"
              />
              <span className="text-sm font-mono font-bold bg-foreground text-background px-3 py-1 uppercase">
                Rizal Hadiyansah
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

          <div>
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
        </Container>

        <div className="border-t border-border pt-12 flex flex-col gap-8">
          <Container>
            <div className="flex items-center justify-between border-b border-border pb-4">
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
          </Container>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex w-max animate-marquee gap-6 py-4 hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((test, idx) => (
                <div
                  key={idx}
                  className="w-[300px] md:w-[360px] flex-shrink-0 p-6 border border-border bg-card/50 hover:bg-card transition-colors duration-200 flex flex-col justify-between"
                >
                  <p className="text-sm text-muted italic mb-6 leading-relaxed">"{test.review}"</p>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{test.author}</h4>
                    <p className="text-xs text-muted">{test.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
