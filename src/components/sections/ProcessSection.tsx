import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "../layout/LanguageProvider";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      step: "02",
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      step: "03",
      title: t("step3Title"),
      description: t("step3Desc"),
    },
  ];

  return (
    <section className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <AnimatedSection>
          <SectionHeading
            kicker={t("processKicker")}
            title={t("processTitle")}
            description={t("processDescription")}
          />
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border-t border-border w-full">
        {steps.map((item, index) => (
          <AnimatedSection key={item.step} delay={0.1 + index * 0.1}>
            <div className="bg-card p-8 md:p-10 space-y-6 transition-colors duration-300 hover:bg-accent rounded-none h-full">
              <span className="font-mono text-4xl font-extrabold text-muted/30 block">
                {item.step}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
