"use client";
import "./projects.scss";

import gitHubLogo from "../../global_images/github-logo.png";
import netlifyLogo from "./icons/netlify-logo.png";
import ProjectCard from "./ProjectCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DownButton from "../DownButton/DownButton";

export default function Projects({ font }) {
  const projects = [
    {
      title: "NC NEWS",
      description:
        "A full-stack project, showcasing a Reddit-based RESTful API, created as a back-end project and featuring CRUD operations for articles, comments, and users. The front-end comprises a single-page application using React hooks for state management and user context. The project supports pagination, data filtering with query parameters, and user interaction, utilizing optimistic rendering.",
      techstack: [
        "Back-end: JavaScript, PSQL, Node.js, Express, Supertest, Jest",
        "Front-end: JavaScript, HTML, CSS, React, Axios",
      ],
      links: [
        {
          url: "https://github.com/darinaJur/nc-news",
          src: gitHubLogo,
          alt: "GitHub logo",
        },
        {
          url: "https://github.com/darinaJur/fe-nc-news",
          src: gitHubLogo,
          alt: "GitHub logo",
        },
        {
          url: "https://nc-news12.netlify.app/",
          src: netlifyLogo,
          alt: "Netlify logo",
        },
      ],
    },
    {
      title: "RECIPE BOX",
      description:
        "An iOS app for adding, storing and viewing recipes, featuring dynamic visual representation of recipe collections. The app features an ability to filter and sort recipes and allows users to import recipes via text extraction from screenshots.",
      techstack: [
        "Back-end: Firebase, Firestore, Google Cloud Vision",
        "Front-end: JavaScript, React Native, Expo, NativeWind/Tailwind, Axios",
      ],
      links: [
        {
          url: "https://github.com/bitbybit-nc/RecipeBox",
          src: gitHubLogo,
          alt: "GitHub logo",
        },
      ],
    },
    {
      title: "PORTFOLIO",
      description:
        "A personal portfolio, featuring animated background using CSS and SVG filter and interactive mouse movements. Nodemail module is used for a contact form. ",
      techstack: ["Front-end: JavaScript, Next.js, HTML, Vanilla CSS, SVG"],
      links: [
        {
          url: "https://github.com/darinaJur/portfolio",
          src: gitHubLogo,
          alt: "GitHub logo",
        },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <main id="projects" className="projects-page">
      <div className="projects-container">
        <div className="project-title-container">
          <h1>projects</h1>
        </div>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              links={project.links}
              description={project.description}
              techstack={project.techstack}
              font={font}
            />
          ))}
        </Slider>
      </div>
      <DownButton pathway='#contact' />
    </main>
  );
}
