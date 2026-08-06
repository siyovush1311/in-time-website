import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Container({
  children,
  className,
  size = "md",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-5xl",
    md: "max-w-7xl",
    lg: "max-w-[1440px]",
  };

  return (
    <div
      className={clsx(
        "w-full mx-auto px-6 sm:px-8 lg:px-10",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}