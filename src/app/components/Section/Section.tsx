import React, { ReactNode } from 'react';
import "./Section.css";

interface SectionProps {
  id?: string,
  title?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      { title ? <h2>{title}</h2> : null }
      {children}
    </section>
  );
}

export default Section;

