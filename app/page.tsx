import Image from "next/image";
import ClientsMarquee from "../src/components/ClientsMarquee";
import GlitchingSecurityTitle from "../src/components/GlitchingSecurityTitle";

const summaryParagraphs = [
  "Te ahorramos el recorrido por la página. Aquí es donde deberíamos decir que somos tu “aliado estratégico en la transformación digital” y toda esa carreta… pero no. La verdad es más simple: ayudamos a empresas (sí, empresas, no al que compra antivirus en el Éxito) a que su TI deje de ser un desorden.",
  "Ponemos ESET para cuidar tus equipos y servidores como antivirus corporativo de verdad, usamos ISL Online para que el soporte remoto funcione tan fácil como el TeamViewer que todos conocen, pero pensado para empresa seria, integramos InvGate para que tus tickets e inventarios no queden sepultados en sistemas pesados tipo Aranda, y lo rematamos con un DLP para que la información sensible no salga volando por USB, correo o WhatsApp “sin querer”.",
  "Y no se queda en vender licencias: tienes soporte ilimitado sin peros, pruebas de phishing que te regalamos para que tu gente despierte (y si quieres algo más pro, también te lo montamos) y, por si fuera poco, te dejamos todo listo para usar y te ayudamos a administrarlo en coadministración; esa es, en serio, la diferencia. Si algo de esto te suena a lo que tu empresa necesita, déjanos tus datos, armamos una prueba sin compromiso y, si al final no te sirve (cosa que dudamos bastante), no pasa nada: pero ya sabes quién te habla sin maquillaje cuando de TI se trata.",
];

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container site-header__inner">
          <div className="brand">
            <Image
              src="/logos/logo_wide.png"
              alt="ColCiber S.A.S."
              width={240}
              height={80}
              priority
              className="brand__logo"
            />
          </div>
          <nav className="site-nav" aria-label="Principal">
            <a href="#slogan" className="site-nav__link site-nav__link--active">
              Servicio
            </a>
            <a href="#resumen" className="site-nav__link">
              Soporte
            </a>
            <a href="#seguridad" className="site-nav__link">
              Seguridad
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="slogan">
          <div className="container">
            <h1 id="slogan">Servicio · Soporte · Seguridad</h1>
            <p className="hero__lead">
              Acompañamos a las áreas de TI que necesitan orden, cobertura y
              aliados comprometidos con la continuidad de su operación.
            </p>
          </div>
        </section>

        <section className="container" aria-labelledby="resumen">
          <div className="hover-card" tabIndex={0}>
            <h2 id="resumen" className="hover-card__title">
              Resumen de la página
            </h2>
            <div className="hover-card__content">
              {summaryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="hover-card__hint">Pasa el cursor o enfoca la tarjeta para desplegar el resumen.</p>
          </div>
        </section>

        <ClientsMarquee />

        <section id="seguridad" className="section" aria-labelledby="seguridad-title">
          <div className="container section__content">
            <div>
              <GlitchingSecurityTitle />
              <p className="section__intro">
                A través de ESET ofrecemos la mejor relación costo, servicio y beneficios que pueden
                obtener sin duda. No existe otra propuesta como la nuestra, todas las negociaciones incluyen:
              </p>
            </div>
            <ul className="section__list">
              <li>
                <strong>Apoyo de transición:</strong> Asistencia técnica y plan de trabajo para migrar de su solución actual a
                ESET.
              </li>
              <li>
                <strong>Configuración llave en mano:</strong> Con más de 10 años
                de experiencia te entregamos tu solución de seguridad lista para
                trabajar, sin que hayas mirado tan siquiera el manual del
                usuario.
              </li>
              <li>
                <strong>Migración de políticas:</strong> Transferimos las
                políticas de tu solución actual a ESET con un proceso de
                homologación según las capacidades de la suite de ESET
                contratada.
              </li>
              <li>
                <strong>Soporte ilimitado:</strong> Sin excusas o letra pequeña
                tienes soporte durante todo el periodo de licenciamiento
                contratado.
              </li>
              <li>
                <strong>Coadministración:</strong> Hemos diseñado un servicio para coadministrar junto contigo la solución
                contratada. Contarás con un especialista asignado para ayudarte a resolver dudas, crear configuraciones,
                políticas, tareas y mucho más sin costo adicional.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
