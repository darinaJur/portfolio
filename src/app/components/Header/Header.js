import Link from "next/link";
import "./header.scss";

export default function Header({ font }) {
  return (
    <main className={font}>
      <div className="header-container">
        <nav className="menu-container">
          <Link href="/">home</Link>
          <Link href="#about">about</Link>
          <Link href="#projects">projects</Link>
          <Link href="#contact">contact</Link>
        </nav>
      </div>
    </main>
  );
}
