import Image from "next/image";
import styles from "./Header.module.css";

const links = [
  { href: "#slogan", label: "Servicio" },
  { href: "#resumen", label: "Soporte" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image
            src="/logos/logo_wide.png"
            alt="ColCiber S.A.S."
            width={240}
            height={80}
            priority
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav} aria-label="Principal">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${index === 0 ? styles.navLinkActive : ""}`.trim()}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
