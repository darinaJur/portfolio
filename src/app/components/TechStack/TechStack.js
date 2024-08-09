import "./TechStack.scss";
import Image from "next/image";
import jsLogo from "./icons/js-logo.png";
import nodeJs from "./icons/node-logo.png";
import sqlLogo from "./icons/sql-logo.png";
import gitLogo from "./icons/git-logo.png";
import reactLogo from "./icons/react-logo.png";
import cssLogo from "./icons/css-logo.png";
import htmlLogo from "./icons/html-logo.png";
import axiosLogo from "./icons/axios-logo.png";
import nextJSLogo from "./icons/nextjs-logo.png";
import expressLogo from "./icons/express-logo.png";
import cSharpLogo from "./icons/csharp-logo.png";
import netLogo from "./icons/microsoft-net-logo.png";

export default function TechStack() {
  return (
    <main id="techstack" className="techstack-container">
      <div className="techstack-title-container">
        <h1>tech stack</h1>
      </div>
      <div className="icons-container">
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={jsLogo} alt="JavaScript logo" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={nodeJs} alt="Node.js logo" />
            <p>Node.js</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={sqlLogo} alt="SQL logo" />
            <p>SQL</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={gitLogo} alt="Git logo" />
            <p>Git</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={reactLogo} alt="React logo" />
            <p>React</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={htmlLogo} alt="HTML logo" />
            <p>HTML</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={cssLogo} alt="CSS logo" />
            <p>CSS</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon">
            <Image src={axiosLogo} alt="Axios logo" />
            <p>Axios</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon-white">
            <Image src={nextJSLogo} alt="NextJS logo" />
            <p>Next.js</p>
          </div>
        </div>
        <div className="single-icon-background">
          <div className="single-icon-white">
            <Image src={expressLogo} alt="Express logo" />
            <p>Express</p>
          </div>
        </div>
      </div>
      <div className="under-development-container">
      <h2>under development</h2>
      <div className="under-development-logos-container">
      <div className="single-icon-background">
        <div className="single-icon">
          <Image src={cSharpLogo} alt="C-sharp logo" />
          <p>C#</p>
        </div>
      </div>
      <div className="single-icon-background">
        <div className="single-icon">
          <Image src={netLogo} alt=".NET logo" />
          <p>.NET</p>
        </div>
      </div>
      </div>
      </div>
    </main>
  );
}
