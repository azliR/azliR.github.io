import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../layout/LanguageProvider";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-8 lg:px-12 flex justify-center bg-card/10">
      <AnimatedSection className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto p-8 md:p-12 border border-border bg-card rounded-none w-full">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("ctaTitle")}
        </h2>
        <p className="text-base text-muted sm:text-lg max-w-xl leading-relaxed">
          {t("ctaDescription")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="mailto:hello@azlir.dev"
            className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-border bg-transparent text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200"
          >
            {t("startProject")}
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-border bg-transparent text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200"
          >
            {t("viewWork")}
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
