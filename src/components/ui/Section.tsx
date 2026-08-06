import { ReactNode } from "react";
import Container from "./Container";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden py-28 lg:py-36",
        className
      )}
    >
      {/* Левое свечение */}
      <div className="absolute left-0 top-32 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px]" />

      {/* Правое свечение */}
      <div className="absolute right-0 bottom-20 h-[28rem] w-[28rem] rounded-full bg-blue-600/5 blur-[180px]" />

      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}