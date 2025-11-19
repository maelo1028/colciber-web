"use client";

import type { CSSProperties } from "react";

import Image from "next/image";
import styles from "./ClientsMarquee.module.css";

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

export type ClientsMarqueeProps = {
  className?: string;
  title?: string;
  durationSeconds?: number;
};

export default function ClientsMarquee({
  className = "",
  title = "Clientes que confían en nosotros",
  durationSeconds = 28,
}: ClientsMarqueeProps) {
  type MarqueeStyle = CSSProperties & { "--marquee-duration"?: string };
  const marqueeStyle: MarqueeStyle = { "--marquee-duration": `${durationSeconds}s` };

  return (
    <section className={`${styles.marquee} ${className}`.trim()}>
      <div className={`container ${styles.shell}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Confianza demostrada</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>
            Trabajamos con compañías que valoran la continuidad operativa. Sus logotipos se desplazan aquí para mostrar la
            diversidad de sectores que acompañamos diariamente.
          </p>
        </div>
        <div className={styles.viewport}>
          <div className={styles.track} style={marqueeStyle} aria-label="Marquesina de clientes">
            {[0, 1].map((group) => (
              <div key={group} className={styles.group} aria-hidden={group === 1}>
                {LOGOS.map((file) => (
                  <div key={`${group}-${file}`} className={styles.card} aria-label={file.replace(/\.[^/.]+$/, "")}>
                    <Image
                      src={`${BASE_PATH}/${file}`}
                      alt={file.replace(/\.[^/.]+$/, "")}
                      height={96}
                      width={180}
                      loading={group === 0 ? "eager" : "lazy"}
                      draggable={false}
                      onContextMenu={(event) => event.preventDefault()}
                      className={styles.image}
                      unoptimized={file.endsWith(".svg")}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
