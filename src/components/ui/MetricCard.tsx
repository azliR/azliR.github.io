import { cn } from "#/lib/cn";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-8 text-left space-y-3 transition-colors duration-300 hover:border-accent/30",
        className,
      )}
    >
      <div className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-sm font-medium text-muted uppercase tracking-wider">{label}</div>
    </div>
  );
}
