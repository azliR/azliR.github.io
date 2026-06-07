import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex items-center min-h-[75vh] pt-24 pb-16 lg:pt-28 lg:pb-20">
      <Container className="max-w-[1400px]">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center w-full">
          <div className="flex flex-col items-start gap-8 max-w-[620px]">
            <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold">
              Flutter &bull; Go &bull; Real-time &bull; AI
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.95] md:leading-[0.95]">
              Engineering scalable
              <br />
              mobile apps
              <br />
              &amp; backend systems.
            </h1>
            <p className="text-lg text-muted md:text-[20px] leading-relaxed max-w-xl">
              Production-ready products for startups, real-time platforms, and high-performance
              systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:hello@azlir.dev"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-foreground text-sm font-semibold text-background hover:bg-foreground/90 transition-colors duration-200"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-border bg-card hover:bg-background/80 text-sm font-semibold text-foreground transition-colors duration-200"
              >
                Selected Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 md:gap-12 pt-6 w-full">
              <div className="space-y-1">
                <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                  39K+
                </div>
                <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                  Users served
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                  450K+
                </div>
                <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                  Daily actions
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                  10+
                </div>
                <div className="text-xs text-muted uppercase tracking-wider font-semibold">
                  Production systems
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-[32px] border border-border bg-card p-8 md:p-10 space-y-8 text-left font-mono">
              <div className="space-y-3">
                <div className="text-xs text-muted uppercase tracking-widest font-semibold">
                  01 / Selected Focus
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-foreground">
                  <div>Mobile Engineering</div>
                  <div>Backend Systems</div>
                  <div>Real-time Platforms</div>
                  <div>AI Integration</div>
                </div>
              </div>

              <div className="h-px bg-border/40" />

              <div className="space-y-4">
                <div className="text-xs text-muted uppercase tracking-widest font-semibold">
                  02 / Core Stack
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Flutter", "React", "Go", "TanStack", "Postgres", "Redis"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/80 px-2.5 py-1.5 bg-background text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border/40" />

              <div className="space-y-3">
                <div className="text-xs text-muted uppercase tracking-widest font-semibold">
                  03 / Recent Work
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-foreground">
                  <div>39K+ users platform</div>
                  <div>Election real-count system</div>
                  <div>VoIP infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
