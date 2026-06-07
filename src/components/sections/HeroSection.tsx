import AnimatedSection from "../ui/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full">
      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] divide-y lg:divide-y-0 lg:divide-x divide-border w-full">
        <div className="flex flex-col justify-between gap-12 p-6 md:p-8 lg:p-12">
          <div className="flex flex-col items-start gap-8 max-w-[620px]">
            <span className="font-mono text-xs tracking-widest text-foreground uppercase font-bold">
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
                className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-border bg-transparent text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center h-12 px-8 rounded-none border border-border bg-transparent text-sm font-semibold text-foreground hover:bg-accent transition-colors duration-200"
              >
                Selected Work
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-border border-t border-border -mx-6 md:-mx-8 lg:-mx-12 -mb-6 md:-mb-8 lg:-mb-12 mt-12 w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] lg:w-[calc(100%+6rem)] bg-card/50">
            <div className="p-6 md:p-8">
              <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                39K+
              </div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">
                Users served
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                450K+
              </div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">
                Daily actions
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="text-3xl lg:text-[40px] font-bold tracking-tight text-foreground">
                10+
              </div>
              <div className="text-xs text-muted uppercase tracking-wider font-semibold mt-1">
                Production systems
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 md:p-8 lg:p-12 flex flex-col justify-between gap-12 font-mono">
          <div className="space-y-4">
            <div className="text-xs text-muted uppercase tracking-widest font-semibold">
              01 / Selected Focus
            </div>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <div>Mobile Engineering</div>
              <div>Backend Systems</div>
              <div>Real-time Platforms</div>
              <div>AI Integration</div>
            </div>
          </div>

          <div className="h-px bg-border -mx-6 md:-mx-8 lg:-mx-12" />

          <div className="space-y-4">
            <div className="text-xs text-muted uppercase tracking-widest font-semibold">
              02 / Core Stack
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Flutter", "React", "Go", "TanStack", "Postgres", "Redis"].map((tech) => (
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
              03 / Recent Work
            </div>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <div>39K+ users platform</div>
              <div>Election real-count system</div>
              <div>VoIP infrastructure</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
