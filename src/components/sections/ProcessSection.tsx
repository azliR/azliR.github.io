import Container from "../layout/Container";
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
    <section className="py-24 lg:py-28 border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeading
            kicker="Process"
            title="How we work"
            description="A focused engineering process designed to move fast without sacrificing quality."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {steps.map((item, index) => (
            <AnimatedSection key={item.step} delay={0.1 + index * 0.1}>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-4 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 h-full">
                <span className="font-mono text-4xl font-extrabold text-accent/20 block">
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
      </Container>
    </section>
  );
}
