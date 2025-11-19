import GlitchingSecurityTitle from "./GlitchingSecurityTitle";
import styles from "./SecuritySection.module.css";

type SecuritySectionProps = {
  items: { title: string; description: string }[];
};

export default function SecuritySection({ items }: SecuritySectionProps) {
  return (
    <section id="seguridad" className={styles.section} aria-labelledby="seguridad-title">
      <div className={`container ${styles.inner}`}>
        <div>
          <GlitchingSecurityTitle />
          <p className={styles.intro}>
            A través de ESET ofrecemos la mejor relación costo, servicio y beneficios que pueden obtener sin duda. No
            existe otra propuesta como la nuestra, todas las negociaciones incluyen:
          </p>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <strong className={styles.itemTitle}>{item.title}:</strong>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
