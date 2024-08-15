import Image from "next/image";
import myPhoto from "./darina-photo.png";
import "./about.scss";
import DownButton from "../DownButton/DownButton";
import TechStack from "../TechStack/TechStack";
import Link from "next/link";
import linkedInLogo from "./linkedin-logo.png";
import githubLogo from "../../global_images/github-logo.png";

export default function About({ font }) {
  return (
    <main id="about" className="about-page">
      <div className="about-and-tech">
        <div className="about-container">
          <div className="about-top-section">
            <div className="about-title-container">
              <h1>about</h1>
            </div>
            <div className="about-logos-container">
              <Link
                href="https://www.linkedin.com/in/darina-jurovskaja-64982085/"
                target="_blank"
              >
                <Image src={linkedInLogo} alt="LinkedIn Logo" />
              </Link>
              <Link href="https://github.com/darinaJur/" target="_blank">
                <Image src={githubLogo} alt="GitHub Logo" />
              </Link>
            </div>
          </div>
          <div className={font}>
            <div className="photobio-container">
              <div className="photo-container">
                <Image
                  src={myPhoto}
                  alt="Photo of the author"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="bio-container">
                <p>
                  I&apos;m a career changer from an engineer in construction to a
                  full-stack software developer, who is based in the south-west
                  England. Why programming? It is a combination of
                  problem-solving and creative thinking that lets me to turn
                  ideas into tangible solutions. I love that programming offers
                  new ways of thinking and a lifelong journey of learning.
                </p>
                <p>
                  I am looking to continue my career in a place that supports
                  continuous development and encourages inclusivity and
                  diversity.
                </p>
              </div>
            </div>
          </div>
          <div className="hobbies-container">
            <h2>hobbies</h2>
            <div className={font}>
              <ul>
                <li>
                  Fitness - Hiking, strength training, skiing, podcasts and
                  books.
                </li>
                <li>
                  Creative - acrylic painting, karaoke and car singing, Figma
                  doodling.
                </li>
                <li>
                  Programming - FreeCodeCamp, Codewars, Youtube coding tips and
                  streams.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TechStack />
      </div>
      <DownButton pathway="#projects" />
    </main>
  );
}
