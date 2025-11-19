import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.title}>ColCiber S.A.S.</p>
          <p className={styles.text}>Servicio, soporte y seguridad para empresas que necesitan continuidad operativa.</p>
        </div>
        <div>
          <p className={styles.title}>Contáctanos</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="tel:+573156131312">
                +57 315 613 1312
              </a>
            </li>
            <li>
              <a className={styles.link} href="mailto:comercial@colciber.com">
                comercial@colciber.com
              </a>
            </li>
            <li>
              <span className={styles.text}>Cra. 16 # 93A-30, Bogotá - Colombia</span>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.title}>Recursos</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#seguridad">
                Beneficios de seguridad
              </a>
            </li>
            <li>
              <a className={styles.link} href="#resumen">
                Resumen ejecutivo
              </a>
            </li>
            <li>
              <a className={styles.link} href="#slogan">
                Inicio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <p className={styles.smallPrint}>© {new Date().getFullYear()} ColCiber S.A.S. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
