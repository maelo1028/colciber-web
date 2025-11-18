"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SyntheticEvent } from "react";

const LOGO_HEIGHT = 96;
const PAD_X = 32;
const MIN_CARD_WIDTH = 180;
const MAX_CARD_WIDTH = 260;
const FALLBACK_CARD_WIDTH = 220;
const BASE_PATH = "/clientes";

const LOGOS = [
  "Logo-UTRAHUILCA.png",
  "Uniagustiniana.png",
  "Universidad-Surcolombiana.png",
  "andino.png",
  "autoniza.png",
  "aviomar.png",
  "comfamiliar.png",
  "contraloria-valle.png",
  "fenalco.png",
  "green-superfood.png",
  "h-ubate.png",
  "idime.png",
  "ingetec.png",
  "inter.png",
  "logo-bbc.png",
  "logo-connect.png",
  "logo-covinoc.svg",
  "logo-don-pollo.png",
  "logo-itc.png",
  "mincit.png",
  "ucentral.png",
] as const;

const shuffle = (items: readonly string[]) => {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};

const preventContext = (event: SyntheticEvent) => {
  event.preventDefault();
};

const fileToTitle = (file: string) => {
  return file
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .trim();
};

const clamp = (value: number) => {
  return Math.min(Math.max(value, MIN_CARD_WIDTH), MAX_CARD_WIDTH);
};

export type ClientsMarqueeProps = {
  className?: string;
  title?: string;
  speed?: number;
};

export default function ClientsMarquee({
  className = "",
  title = "Clientes que confían en nosotros",
  speed = 30,
}: ClientsMarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef(0);
  const [widths, setWidths] = useState<Record<string, number>>({});
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [logoOrder] = useState(() => shuffle(LOGOS));

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group || speed <= 0) {
      return;
    }

    const computed = getComputedStyle(track);
    const gapValue =
      Number.parseFloat(computed.columnGap || computed.gap || "0") || 0;

    let frameId = 0;
    let lastTime: number | null = null;

    const step = (time: number) => {
      if (lastTime === null) {
        lastTime = time;
      }

      const delta = time - lastTime;
      lastTime = time;
      const distance = (speed * delta) / 1000;
      positionRef.current += distance;

      const groupWidth = group.offsetWidth + gapValue;
      if (groupWidth > 0 && positionRef.current >= groupWidth) {
        positionRef.current -= groupWidth;
      }

      track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
      lastTime = null;
      positionRef.current = 0;
      track.style.transform = "translate3d(0, 0, 0)";
    };
  }, [speed]);

  const setWidthFromImage = useCallback((file: string, element: HTMLImageElement) => {
    if (!element || !element.naturalWidth || !element.naturalHeight) {
      return;
    }

    const ratio = element.naturalWidth / element.naturalHeight;
    const innerWidth = LOGO_HEIGHT * (Number.isFinite(ratio) && ratio > 0 ? ratio : 1);
    const cardWidth = clamp(innerWidth + PAD_X * 2);

    setWidths((prev) => {
      if (prev[file] === cardWidth) {
        return prev;
      }

      return {
        ...prev,
        [file]: cardWidth,
      };
    });
  }, []);

  const markFailed = useCallback((file: string) => {
    setFailed((prev) => {
      if (prev[file]) {
        return prev;
      }

      return {
        ...prev,
        [file]: true,
      };
    });
  }, []);

  const renderLogo = (file: string, index: number, groupIndex: number) => {
    const cardWidth = widths[file] ?? FALLBACK_CARD_WIDTH;
    const imageWidth = Math.max(cardWidth - PAD_X * 2, 120);
    const label = fileToTitle(file);

    return (
      <div
        key={`${groupIndex}-${file}`}
        className="clients-marquee__card"
        aria-label={label}
        onContextMenu={preventContext}
        style={{ width: cardWidth }}
      >
        {failed[file] ? (
          <span className="clients-marquee__fallback">{label}</span>
        ) : (
          <Image
            src={`${BASE_PATH}/${file}`}
            alt=""
            height={LOGO_HEIGHT}
            width={imageWidth}
            loading={index < 10 ? "eager" : "lazy"}
            draggable={false}
            className="clients-marquee__image no-drag"
            onError={() => markFailed(file)}
            onLoad={(event) => setWidthFromImage(file, event.currentTarget)}
            sizes={`${imageWidth}px`}
            unoptimized={file.endsWith(".svg")}
          />
        )}
      </div>
    );
  };

  return (
    <section className={`clients-marquee ${className}`} onContextMenu={preventContext}>
      <div className="container clients-marquee__shell">
        <div className="clients-marquee__header">
          <p className="clients-marquee__eyebrow">Confianza demostrada</p>
          <h2 className="clients-marquee__title">{title}</h2>
          <p className="clients-marquee__description">
            Trabajamos con compañías que valoran la continuidad operativa. Sus logotipos se desplazan aquí para
            mostrar la diversidad de sectores que acompañamos diariamente.
          </p>
        </div>
        <div className="clients-marquee__viewport">
          <div className="clients-marquee__track" ref={trackRef}>
            {[0, 1].map((group) => (
              <div
                key={group}
                className="clients-marquee__group"
                ref={group === 0 ? groupRef : undefined}
              >
                {logoOrder.map((file, index) => renderLogo(file, index, group))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .no-drag {
          -webkit-user-drag: none;
          user-drag: none;
        }
      `}</style>
    </section>
  );
}