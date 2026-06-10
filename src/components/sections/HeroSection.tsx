import * as React from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../layout/LanguageProvider";
import { useContact } from "../layout/ContactProvider";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSection() {
  const { t } = useLanguage();
  const { openContact } = useContact();
  const [activeTooltip, setActiveTooltip] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".metric-info-btn")) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const heroMetrics = [
    {
      value: "20+",
      labelKey: "projectsBuilt" as const,
      descKey: "projectsBuiltDesc" as const,
    },
    {
      value: "5.0 ★",
      labelKey: "fiverrRating" as const,
      descKey: "fiverrRatingDesc" as const,
    },
    {
      value: "10+",
      labelKey: "productionSystems" as const,
      descKey: "productionSystemsDesc" as const,
    },
  ];

  return (
    <section className="relative overflow-hidden w-full">
      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] divide-y lg:divide-y-0 lg:divide-x divide-border w-full">
        <div className="flex flex-col justify-between gap-12 p-6 md:p-8 lg:p-12">
          <div className="flex flex-col items-start gap-8 max-w-[620px]">
            <span className="font-mono text-xs tracking-widest text-foreground uppercase font-bold">
              Flutter &bull; Go &bull; Real-time &bull; AI
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.95] md:leading-[0.95]">
              {t("heroTitleLine1")}
              <br />
              {t("heroTitleLine2")}
              <br />
              {t("heroTitleLine3")}
            </h1>
            <p className="text-lg text-muted md:text-[20px] leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={openContact}
                className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-transparent bg-foreground text-sm font-semibold text-background hover:bg-foreground/90 transition-colors duration-200 cursor-pointer"
              >
                {t("startProject")}
              </button>
              <a
                href="#work"
                className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-border bg-transparent text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200"
              >
                {t("heroCTASelectedWork")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-border border-t border-border -mx-6 md:-mx-8 lg:-mx-12 -mb-6 md:-mb-8 lg:-mb-12 mt-12 w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] lg:w-[calc(100%+6rem)] bg-card/50">
            {heroMetrics.map((metric, index) => {
              const isOpen = activeTooltip === index;
              const positionClass =
                index === 0
                  ? "left-4 origin-bottom-left"
                  : index === 2
                    ? "right-4 origin-bottom-right"
                    : "left-1/2 -translate-x-1/2 origin-bottom";

              const arrowClass =
                index === 0 ? "left-12" : index === 2 ? "right-6" : "left-1/2 -translate-x-1/2";

              return (
                <div
                  key={index}
                  className="relative p-6 md:p-8 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                        {metric.value}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTooltip(isOpen ? null : index);
                        }}
                        onMouseEnter={() => setActiveTooltip(index)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className="metric-info-btn text-muted hover:text-foreground transition-colors p-1 -m-1 rounded-full focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
                        aria-label={`Explain ${t(metric.labelKey)}`}
                        aria-expanded={isOpen}
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">
                      {t(metric.labelKey)}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute bottom-full mb-3 w-[240px] sm:w-[260px] md:w-[280px] bg-card border border-border p-4 shadow-xl z-50 text-xs text-foreground leading-relaxed font-sans normal-case ${positionClass}`}
                      >
                        <svg
                          className={`absolute -bottom-[5px] w-3 h-1.5 text-card ${arrowClass}`}
                          viewBox="0 0 12 6"
                          fill="currentColor"
                        >
                          <path d="M0 0 L6 6 L12 0 Z" />
                          <path
                            d="M0 0 L6 6 L12 0"
                            stroke="var(--color-border)"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                        <div className="font-semibold mb-1 text-foreground border-b border-border/50 pb-1 flex items-center gap-1.5">
                          <Info className="h-3.5 w-3.5 text-muted shrink-0" />
                          {t(metric.labelKey)}
                        </div>
                        <p className="text-muted/90 text-[11px] leading-relaxed pt-1">
                          {t(metric.descKey)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-card p-6 md:p-8 lg:p-12 flex flex-col justify-between gap-12 font-mono">
          <div className="space-y-4">
            <div className="text-xs text-muted uppercase tracking-widest font-semibold">
              {t("selectedFocus")}
            </div>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <div>{t("mobileEngineering")}</div>
              <div>{t("backendSystems")}</div>
              <div>{t("realtimePlatforms")}</div>
              <div>{t("aiIntegration")}</div>
            </div>
          </div>

          <div className="h-px bg-border -mx-6 md:-mx-8 lg:-mx-12" />

          <div className="space-y-4">
            <div className="text-xs text-muted uppercase tracking-widest font-semibold">
              {t("coreStack")}
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Flutter", "React", "Go", "TanStack", "Next.js", "Postgres"].map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2.5 py-1.5 bg-background text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-border -mx-6 md:-mx-8 lg:-mx-12" />

          <div className="space-y-4">
            <div className="text-xs text-muted uppercase tracking-widest font-semibold">
              {t("recentWork")}
            </div>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <div>{t("recentWork1")}</div>
              <div>{t("recentWork2")}</div>
              <div>{t("recentWork3")}</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
