import * as React from "react";
import { cn } from "#/lib/cn";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MetricCardProps {
  value: string;
  label: string;
  desc?: string;
  index: number;
  className?: string;
}

export default function MetricCard({ value, label, desc, index, className }: MetricCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`.metric-card-${index}`)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen, index]);

  const positionClass = React.useMemo(() => {
    switch (index) {
      case 0:
        return "left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 sm:right-auto lg:left-4 lg:right-auto lg:translate-x-0 origin-bottom sm:origin-bottom-left lg:origin-bottom-left";
      case 1:
        return "left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 origin-bottom sm:origin-bottom-right lg:origin-bottom";
      case 2:
        return "left-1/2 -translate-x-1/2 sm:left-4 sm:right-auto sm:translate-x-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 origin-bottom sm:origin-bottom-left lg:origin-bottom";
      case 3:
        return "left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 lg:right-4 lg:left-auto lg:translate-x-0 origin-bottom sm:origin-bottom-right lg:origin-bottom-right";
      default:
        return "left-1/2 -translate-x-1/2 origin-bottom";
    }
  }, [index]);

  const arrowClass = React.useMemo(() => {
    switch (index) {
      case 0:
        return "left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 lg:left-12 lg:translate-x-0";
      case 1:
        return "left-1/2 -translate-x-1/2 sm:right-6 sm:left-auto sm:translate-x-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2";
      case 2:
        return "left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2";
      case 3:
        return "left-1/2 -translate-x-1/2 sm:right-6 sm:left-auto sm:translate-x-0 lg:right-6 lg:left-auto lg:translate-x-0";
      default:
        return "left-1/2 -translate-x-1/2";
    }
  }, [index]);

  return (
    <div
      onClick={() => desc && setIsOpen(!isOpen)}
      onMouseEnter={() => desc && setIsOpen(true)}
      onMouseLeave={() => desc && setIsOpen(false)}
      className={cn(
        `metric-card-${index}`,
        "relative bg-card p-8 text-left transition-colors duration-300 hover:bg-accent rounded-none flex flex-col justify-center min-h-[160px] group cursor-pointer select-none",
        className,
      )}
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {value}
          </div>
          {desc && (
            <div className="text-muted group-hover:text-foreground transition-colors p-1 -m-1">
              <Info className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="text-sm font-medium text-muted uppercase tracking-wider">{label}</div>
      </div>

      <AnimatePresence>
        {isOpen && desc && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute bottom-full mb-3 w-[240px] sm:w-[260px] md:w-[280px] bg-card border border-border p-4 shadow-xl z-50 text-xs text-foreground leading-relaxed font-sans normal-case",
              positionClass,
            )}
          >
            <svg
              className={cn("absolute -bottom-[5px] w-3 h-1.5 text-card", arrowClass)}
              viewBox="0 0 12 6"
              fill="currentColor"
            >
              <path d="M0 0 L6 6 L12 0 Z" />
              <path d="M0 0 L6 6 L12 0" stroke="var(--color-border)" strokeWidth="1" fill="none" />
            </svg>
            <div className="font-semibold mb-1 text-foreground border-b border-border/50 pb-1 flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-muted shrink-0" />
              {label}
            </div>
            <p className="text-muted/90 text-[11px] leading-relaxed pt-1">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
