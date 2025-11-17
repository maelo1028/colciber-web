"use client";

import { useEffect, useState } from "react";

const WORDS = ["Seguridad", "Antivirus", "Antimalware"];
const GLITCH_DURATION = 400;
const WORD_INTERVAL = 2000;

export default function GlitchHeading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let glitchTimeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      setIsGlitching(true);
      glitchTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % WORDS.length);
        setIsGlitching(false);
      }, GLITCH_DURATION);
    }, WORD_INTERVAL);

    return () => {
      clearInterval(interval);
      if (glitchTimeout) {
        clearTimeout(glitchTimeout);
      }
    };
  }, []);

  const text = WORDS[currentIndex];

  return (
    <span className={`glitch-text${isGlitching ? " glitch-text--active" : ""}`} data-text={text}>
      {text}
    </span>
  );
}
