import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: "white" | "soft";
  className?: string;
}

export default function Section({
  children,
  background = "white",
  className = "",
  ...props
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    soft: "bg-bg-soft",
  };

  return (
    <section
      className={`section-padding ${backgroundClasses[background]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto container-padding">{children}</div>
    </section>
  );
}
