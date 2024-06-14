import React, { ReactNode } from 'react';
import "./Section.css";

interface SectionProps {
  id?: string,
  title?: string,
  heading?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, heading, children, ...props }) => {
  return (
    <section {...props} title={title}>
      { heading ? <h2>{heading}</h2> : null }
      {children}
    </section>
  );
}

export default Section;

