import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding product goals, constraints, and technical direction.",
    },
    {
      step: "02",
      title: "Engineering",
      description: "Building scalable, maintainable, production-ready systems.",
    },
    {
      step: "03",
      title: "Launch & Iterate",
      description: "Deployment, monitoring, improvements, and iteration.",
    },
  ];

  return (
    <section className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <AnimatedSection>
          <SectionHeading
            kicker="Process"
            title="How we work"
            description="A focused engineering process designed to move fast without sacrificing quality."
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
