import { cn } from "#/lib/cn";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12 md:mb-16",
        align === "center" ? "items-center text-center max-w-2xl mx-auto" : "max-w-3xl",
        className,
      )}
      {...props}
    >
      {kicker && (
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{kicker}</span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="text-base text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
