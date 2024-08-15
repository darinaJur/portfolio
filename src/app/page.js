import Image from "next/image";
import Interactive from "./components/Interactive/InteractiveCursor";
import "./style.scss";
import Link from "next/link";
import DownButton from "./components/DownButton/DownButton";

export default function Home() {
  return (
    <main className="main-container">
      <div className="submain-container">
        <div className="text-container">
          <div className="hello-message">
            <h1>
              Hello, I&apos;m <span className="name">Darina</span>!
            </h1>
          </div>
          <div className="small-description">
            <p>I&apos;m a full stack developer and welcome to my portfolio {':)'}</p>
          </div>
        </div>
      </div>
      <DownButton pathway="#about" />
    </main>
  );
}
