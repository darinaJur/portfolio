"use client";
import "./projects.scss";
import Image from "next/image";
import "./ProjectCard.scss";
import { useRef, useState } from "react";
import Link from "next/link";

export default function ProjectCard({
  title,
  links,
  description,
  techstack,
  font,
}) {
  return (
    <div className="project-card-container">
      <div className={font}>
        <div className="project-card-back">
          <h3>{title}</h3>
          <div className="project-links">
            {links.map((link, index) => (
              <Link href={link.url}>
                <Image key={index} src={link.src} alt={link.alt} />
              </Link>
            ))}
          </div>
          <div className="project-info">
            <p>{description}</p>
            {techstack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
