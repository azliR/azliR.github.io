import * as React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}
