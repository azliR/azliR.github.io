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

      <div className="relative w-full overflow-hidden border-t border-border">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee gap-6 py-4 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] md:w-[360px] flex-shrink-0 p-6 md:p-8 border border-border bg-card/50 hover:bg-card transition-colors duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-foreground tracking-widest text-sm">★★★★★</div>
                <p className="text-sm md:text-base leading-relaxed text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="text-sm text-muted font-medium pt-4 border-t border-border">
                &mdash; {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
