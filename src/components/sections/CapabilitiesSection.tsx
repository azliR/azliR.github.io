import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { capabilities } from "../../data/capabilities";
import { Smartphone, Server, Zap, Cpu } from "lucide-react";

export default function CapabilitiesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Smartphone":
        return <Smartphone className="h-6 w-6 text-accent" />;
      case "Server":
        return <Server className="h-6 w-6 text-accent" />;
      case "Zap":
        return <Zap className="h-6 w-6 text-accent" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-accent" />;
      default:
        return null;
    }
  };

  return (
    <section id="capabilities" className="py-24 lg:py-28 border-t border-border bg-card/5">
      <Container>
        <AnimatedSection>
          <SectionHeading
            kicker="Capabilities"
            title="Engineering systems across mobile, backend, realtime infrastructure, and AI."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {capabilities.map((cap, index) => (
            <AnimatedSection key={cap.id} delay={0.1 + index * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-4 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
                  {getIcon(cap.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{cap.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
