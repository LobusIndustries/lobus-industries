import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Services />
        <Industries />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
