import "./Section.css";
import type { ReactNode } from "react";
interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {children}
    </section>
  );
};

export default Section;
