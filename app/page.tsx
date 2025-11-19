import ClientsMarquee from "../src/components/ClientsMarquee";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import SecuritySection from "../src/components/SecuritySection";
import SummaryCard from "../src/components/SummaryCard";
import { securityHighlights, summaryParagraphs } from "../src/data/content";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <SummaryCard paragraphs={summaryParagraphs} />
        <ClientsMarquee />
        <SecuritySection items={securityHighlights} />
      </main>
      <Footer />
    </div>
  );
}
