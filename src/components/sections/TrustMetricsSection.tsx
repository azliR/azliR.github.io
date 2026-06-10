import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import MetricCard from "../ui/MetricCard";
import { metrics } from "../../data/metrics";
import { useLanguage } from "../layout/LanguageProvider";

export default function TrustMetricsSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <AnimatedSection>
          <SectionHeading
            kicker={t("metricsKicker")}
            title={t("metricsTitle")}
            description={t("metricsDescription")}
          />
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border-t border-border w-full">
        {metrics.map((metric, index) => (
          <AnimatedSection key={metric.label.en} delay={0.1 + index * 0.08}>
            <MetricCard
              value={metric.value}
              label={metric.label[lang]}
              desc={metric.desc?.[lang]}
              index={index}
              className="h-full"
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
