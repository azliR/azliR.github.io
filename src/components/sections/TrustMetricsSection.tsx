import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import MetricCard from "../ui/MetricCard";
import { metrics } from "../../data/metrics";

export default function TrustMetricsSection() {
  return (
    <section className="py-24 lg:py-28 border-t border-border bg-card/10">
      <Container>
        <AnimatedSection>
          <SectionHeading
            kicker="Metrics"
            title="Performance in numbers"
            description="Built for scale, reliability, and real-world usage."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={0.1 + index * 0.08}>
              <MetricCard value={metric.value} label={metric.label} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
