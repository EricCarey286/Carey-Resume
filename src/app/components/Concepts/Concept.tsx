import React from 'react';
import Image from "next/image"
import "./Concept.css";

export type ConceptProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
};

const Concept: React.FC<ConceptProps> = ({ image, title, description, link, linkText }) => {
  return (
    <li className="concept">
      <Image src={image} alt={title} width={200} height={200}/>
      <h2>{title}</h2>
      <p>{description} {link ? <a href={link}>{linkText}</a> : null}</p>
    </li>
  );
};

export default Concept;


