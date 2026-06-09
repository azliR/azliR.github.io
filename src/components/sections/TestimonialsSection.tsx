import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";
import { useLanguage } from "../layout/LanguageProvider";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <AnimatedSection>
          <SectionHeading
            kicker={t("reviewsKicker")}
            title={t("reviewsTitle")}
            description={t("reviewsDescription")}
          />
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border-t border-border w-full">
        {testimonials.map((item, index) => (
          <AnimatedSection key={item.id} delay={0.1 + index * 0.1}>
            <div className="bg-card p-8 md:p-10 space-y-6 transition-colors duration-300 hover:bg-accent rounded-none h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-foreground tracking-widest text-sm">★★★★★</div>
                <p className="text-base leading-relaxed text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="text-sm text-muted font-medium pt-4 border-t border-border">
                &mdash; {item.author}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
