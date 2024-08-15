import Link from "next/link";
import "./footer.scss";
import Image from "next/image";
import linkedInLogo from "../About/linkedin-logo.png";
import githubLogo from "../../global_images/github-logo.png";

export default function Footer({ font }) {
  return (
    <main className={font}>
      <div className="footer-container">
        <div className="footer-content-container">
          <div className="footer-text-container">
            <p>Created by Darina J, 2024</p>
            <p className="thankyou-icons">
              Icons from{" "}
              <Link href="https://icons8.com/" target="_blank">
                icon8
              </Link>
              ,{" "}
              <Link href="https://www.flaticon.com/" target="_blank">
                flaticon
              </Link>
            </p>
          </div>
          <div className="footer-logos-container">
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
      </div>
    </main>
  );
}
