import dynamic from "next/dynamic";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// CTA is a client component below the fold — defer its JS until needed
const CTA = dynamic(() => import("./components/CTA"));

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Services />
        <Industries />
        <Testimonials />
        <Portfolio />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
