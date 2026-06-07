import { ArrowUpRight } from "lucide-react";
import { cn } from "#/lib/cn";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  className?: string;
  isFeatured?: boolean;
  builtItems?: string[];
  impact?: string;
  ctaText?: string;
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
  ctaText = "View Case Study",
}: ProjectCardProps) {
  const CardWrapper = href ? "a" : "div";
  return (
    <CardWrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group block rounded-3xl border border-border bg-card p-8 md:p-10 lg:p-12 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5",
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
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-muted max-w-xl">
              {description}
            </p>
          </div>

          {isFeatured && builtItems.length > 0 && (
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">
                Scope of Work:
              </span>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground">
                {builtItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-background px-3.5 py-1.5 text-xs font-mono text-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {isFeatured && impact && (
            <p className="text-xs font-mono text-accent/80 pt-2 tracking-wide">{impact}</p>
          )}
        </div>

        <div
          className={cn(
            "shrink-0 flex items-center justify-between lg:justify-start gap-3 pt-6 lg:pt-0 border-t border-border/40 lg:border-t-0",
            isFeatured ? "lg:pl-8 lg:border-l lg:border-border/40" : "",
          )}
        >
          <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {ctaText}
          </span>
          <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
      </div>
    </CardWrapper>
  );
}
