import { cn } from "#/lib/cn";

interface MetricCardProps {
  value: string;
  label: string;
  project?: string;
  className?: string;
}

export default function MetricCard({ value, label, project, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "bg-card p-8 text-left space-y-3 transition-colors duration-300 hover:bg-accent rounded-none flex flex-col justify-between",
        className,
      )}
    >
      <div className="space-y-3">
        <div className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{value}</div>
        <div className="text-sm font-medium text-muted uppercase tracking-wider">{label}</div>
      </div>
      {project && (
        <div className="text-xs font-semibold text-primary tracking-wide pt-2 border-t border-border/50">
          {project}
        </div>
      )}
    </div>
  );
}
