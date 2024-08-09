import Link from "next/link";
import "./DownButton.scss";

export default function DownButton({ pathway }) {
  return (
    <div>
      <Link href={pathway}>
        <div className="arrow-container">
          <div className="arrow">
            <div className="arrow-wing"></div>
            <div className="arrow-wing"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
