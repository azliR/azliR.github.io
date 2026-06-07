import Container from "../layout/Container";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-28 border-t border-border">
      <Container>
        <AnimatedSection>
          <SectionHeading
            kicker="Reviews"
            title="Trusted by founders"
            description="Selected feedback from clients and collaborators."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.id} delay={0.1 + index * 0.1}>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-accent tracking-widest text-sm">★★★★★</div>
                  <p className="text-base leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="text-sm text-muted font-medium pt-4 border-t border-border/40">
                  &mdash; {item.author}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
