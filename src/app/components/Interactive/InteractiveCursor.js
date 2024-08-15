"use client";

import "./Interactive.scss";

import { useEffect, useRef } from "react";

const InteractiveCursor = () => {
  const bubbleRef = useRef(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  useEffect(() => {
    const interBubble = bubbleRef.current;

    const move = () => {
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX.current
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="interactive-cursor-bg">
      <div ref={bubbleRef} className="interactive"></div>
    </div>

  );
};

export default InteractiveCursor;
