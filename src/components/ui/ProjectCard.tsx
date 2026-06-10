import { ArrowUpRight } from "lucide-react";
import { cn } from "#/lib/cn";
import { useLanguage } from "../layout/LanguageProvider";

interface ProjectCardProps {
  title: string;
  description: {
    en: string;
    id: string;
  };
  tags: string[];
  href?: string;
  className?: string;
  isFeatured?: boolean;
  builtItems?: {
    en: string;
    id: string;
  }[];
  impact?: {
    en: string;
    id: string;
  };
  ctaText?: {
    en: string;
    id: string;
  };
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  className,
  isFeatured = false,
  builtItems = [],
  impact,
  ctaText,
}: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const CardWrapper = href ? "a" : "div";

  const resolvedDescription = description[lang];
  const resolvedImpact = impact ? impact[lang] : undefined;
  const resolvedCtaText = ctaText
    ? ctaText[lang]
    : lang === "en"
      ? "View Case Study"
      : "Lihat Studi Kasus";

  return (
    <CardWrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group block rounded-none border border-border bg-card p-8 md:p-10 lg:p-12 transition-colors duration-300 hover:bg-accent",
        isFeatured ? "col-span-full" : "",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-8",
          isFeatured ? "lg:flex-row lg:gap-20 lg:items-center" : "",
        )}
      >
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-muted max-w-xl">
              {resolvedDescription}
            </p>
          </div>

          {isFeatured && builtItems.length > 0 && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                {t("scopeOfWork")}
              </span>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground pt-2">
                {builtItems.map((item) => (
                  <li key={item.en} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 bg-foreground shrink-0" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-none bg-background px-3.5 py-1.5 text-xs font-mono text-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {isFeatured && resolvedImpact && (
            <p className="text-xs font-mono text-muted pt-2 tracking-wide">{resolvedImpact}</p>
          )}
        </div>

        {href && (
          <div
            className={cn(
              "shrink-0 flex items-center justify-between lg:justify-start gap-3 pt-6 lg:pt-0 border-t border-border/40 lg:border-t-0",
              isFeatured ? "lg:pl-8 lg:border-l lg:border-border/40" : "",
            )}
          >
            <span className="text-sm font-semibold text-foreground group-hover:underline">
              {resolvedCtaText}
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
