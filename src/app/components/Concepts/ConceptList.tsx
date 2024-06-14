import React from 'react';
import "./ConceptList.css";
import Concept, { ConceptProps } from "./Concept";
import Section from "../Section/Section";
import { CORE_CONCEPTS } from "../../data";

const ConceptList: React.FC = () => {
  return (
    <Section title="Concepts">
      <ul id="concepts">
        {CORE_CONCEPTS.map((conceptItem) => (
          <Concept
            key={conceptItem.title}
            image={conceptItem.image}
            title={conceptItem.title}
            description={conceptItem.description}
            link={conceptItem.link}
            linkText={conceptItem.linkText}
          />
        ))}
      </ul>
    </Section>
  );
};

export default ConceptList;



