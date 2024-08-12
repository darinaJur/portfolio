"use client";
import "./projects.scss";
import Image from "next/image";
import "./ProjectCard.scss";

import { useRef, useState } from "react";
import Link from "next/link";

export default function ProjectCard({ title, links, description, techstack, font }) {
  const [flipped, setFlipped] = useState(false);
  // const cardRef = useRef(null)
  

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="project-card-container">
      <div className={font}>
      {!flipped ? (
        <div className="project-card-face" onClick={handleClick}>
          <h2>{title}</h2>
        </div>
      ) : (
        <div className="project-card-back" onClick={handleClick}>
          <h3>{title}</h3>
          <div className="project-links">
            {links.map((link, index) => (
              <Link href={link.url}>
                <Image key={index} src={link.src} alt={link.alt} />
              </Link>
            ))}
          </div>
            <p>{description}</p>
            {techstack.map((item) => (
              <p>{item}</p>
            ))}
          </div>
      )}
      </div>
    </div>
  );
}


