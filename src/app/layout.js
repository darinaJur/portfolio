import { Inter, IBM_Plex_Mono, Encode_Sans_Expanded } from "next/font/google";
import "./globals.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import InteractiveBG from "./components/Interactive/InteractiveBG";
import Contact from "./components/Contact/Contact";
import InteractiveCursor from "./components/Interactive/InteractiveCursor";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });
const encodeSansExpanded = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Darina J's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexMono.className}`}>
        {/* <Header font={encodeSansExpanded.className} /> */}
        {children}
        <InteractiveBG />
        {/* <InteractiveCursor /> */}
        {/* <About font={encodeSansExpanded.className} />
        <Projects font={encodeSansExpanded.className} />
        <Contact font={encodeSansExpanded.className} /> */}
      </body>
    </html>
  );
}
