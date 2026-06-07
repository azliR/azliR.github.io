import * as React from "react";
import { cn } from "#/lib/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export default function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
