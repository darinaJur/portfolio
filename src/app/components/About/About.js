import Image from "next/image";
import myPhoto from "./darina-photo.png";
import "./about.scss";
import DownButton from "../DownButton/DownButton";

export default function About({ font }) {
  return (
    <main id="about" className="about-page">
      <div className="about-container">
        <div className="about-title-container">
          <h1>about</h1>
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
              <div className="bio-quote">
                <p className="quote">
                  “Anyone who stops learning is old, whether at twenty or
                  eighty. Anyone who keeps learning stays young.”
                </p>
                <p className="author">-Henry Ford</p>
              </div>
              <p>
                I'm a career changer from an engineer in construction to a
                full-stack software developer, who is based in the south-west.
                New technology, logic and solving puzzles is what excites and
                drives me. I love that programming offers new ways of thinking
                and a lifelong journey of learning.
              </p>
            <p>
              I am looking to continue my career in a place that supports
              continuous development and encourages inclusivity and diversity.
            </p>
            </div>
          </div>
          </div>
          <div className="hobbies-container">
            <h2>hobbies</h2>
            <div className={font}>
            <ul>
              <li>
                Fitness - Hiking, strength training, skiing, podcasts
                and books.
              </li>
              <li>
                Creative - acrylics painting, karaoke and car singing, Figma
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
      <DownButton pathway="#techstack" />
    </main>
  );
}
