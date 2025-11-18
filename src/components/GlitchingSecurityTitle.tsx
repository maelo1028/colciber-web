"use client";

import { useEffect, useState } from "react";

const rotatingWords = ["Seguridad", "Antivirus", "Antimalware"];

const displayDuration = 2000; // ms each word is shown
const glitchDuration = 380; // ms for glitch animation

export default function GlitchingSecurityTitle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let displayTimeout: NodeJS.Timeout;
    let glitchTimeout: NodeJS.Timeout;

    const scheduleCycle = () => {
      displayTimeout = setTimeout(() => {
        setIsGlitching(true);
        glitchTimeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
          setIsGlitching(false);
          scheduleCycle();
        }, glitchDuration);
      }, displayDuration);
    };

    scheduleCycle();

    return () => {
      clearTimeout(displayTimeout);
      clearTimeout(glitchTimeout);
    };
  }, []);

  const currentWord = rotatingWords[wordIndex];

  return (
    <h2
      id="seguridad-title"
      className={`glitch-title${isGlitching ? " glitch-title--active" : ""}`}
      data-text={currentWord}
    >
      {currentWord}
    </h2>
  );
}
