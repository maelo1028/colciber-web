import styles from "./SummaryCard.module.css";

type SummaryCardProps = {
  paragraphs: string[];
};

export default function SummaryCard({ paragraphs }: SummaryCardProps) {
  return (
    <section className="container" aria-labelledby="resumen">
      <div className={styles.card} tabIndex={0}>
        <h2 id="resumen" className={styles.title}>
          Resumen de la página
        </h2>
        <div className={styles.content}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <p className={styles.hint}>Pasa el cursor o enfoca la tarjeta para desplegar el resumen.</p>
      </div>
    </section>
  );
}
