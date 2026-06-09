import AnimatedSection from "../ui/AnimatedSection";
import { useLanguage } from "../layout/LanguageProvider";

const companies = [
  { name: "Bedas", logo: "/companies/bedas.webp" },
  { name: "BRIN", logo: "/companies/brin.webp" },
  { name: "Digimorp", logo: "/companies/digimorp.webp" },
  { name: "GGI", logo: "/companies/ggi.webp" },
  { name: "Mutualan", logo: "/companies/mutualan.webp" },
  { name: "Socurious", logo: "/companies/socurious.webp" },
];

export default function TrustedBySection() {
  const { t } = useLanguage();
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="w-full border-b border-border bg-card/30 overflow-hidden py-10 md:py-12">
      <AnimatedSection className="w-full">
        <div className="text-center mb-8 px-6">
          <span className="text-xs font-mono uppercase tracking-widest text-muted font-bold">
            {t("trustedBy")}
          </span>
        </div>
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
          <div className="flex w-max animate-marquee gap-16 py-2 hover:[animation-play-state:paused]">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center w-36 h-12 grayscale opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
