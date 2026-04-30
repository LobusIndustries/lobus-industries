import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex items-center">
        <section className="relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 py-40 md:py-56 text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-5">
              404
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              <span className="text-gradient">This page doesn&apos;t exist.</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--muted-strong)] max-w-md mx-auto leading-relaxed">
              Not sure how you got here, but there&apos;s nothing at this URL. Head back home or get in touch.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/"
                className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
              >
                Back to home →
              </a>
              <a
                href="/#contact"
                className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
