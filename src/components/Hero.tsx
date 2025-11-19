import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="slogan">
      <div className="container">
        <h1 id="slogan" className={styles.title}>
          Servicio · Soporte · Seguridad
        </h1>
        <p className={styles.lead}>
          Acompañamos a las áreas de TI que necesitan orden, cobertura y aliados comprometidos con la continuidad de su
          operación.
        </p>
        <div className={styles.actions}>
          <a className={styles.ctaPrimary} href="#contacto">
            Contáctanos
          </a>
          <a className={styles.ctaSecondary} href="#resumen">
            Ver resumen
          </a>
        </div>
      </div>
    </section>
  );
}
