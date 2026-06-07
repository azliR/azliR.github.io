import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { capabilities } from "../../data/capabilities";
import { Smartphone, Server, Zap, Cpu } from "lucide-react";

export default function CapabilitiesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Smartphone":
        return <Smartphone className="h-6 w-6 text-foreground" />;
      case "Server":
        return <Server className="h-6 w-6 text-foreground" />;
      case "Zap":
        return <Zap className="h-6 w-6 text-foreground" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-foreground" />;
      default:
        return null;
    }
  };

  return (
    <section id="capabilities" className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <AnimatedSection>
          <SectionHeading
            kicker="Capabilities"
            title="Engineering systems across mobile, backend, realtime infrastructure, and AI."
          />
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border-t border-border w-full">
        {capabilities.map((cap, index) => (
          <AnimatedSection key={cap.id} delay={0.1 + index * 0.08}>
            <div className="bg-card p-8 md:p-10 space-y-6 transition-colors duration-300 hover:bg-accent rounded-none h-full">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-background border border-border">
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
    </section>
  );
}
