import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import luxuryVilla from "../../assets/luxury-villa-hero.webp";
import { Eyebrow } from "../atoms/Eyebrow";
import { QuickSearchForm } from "../molecules/QuickSearchForm";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[85svh] overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 scale-105 bg-cover bg-center bg-no-repeat bg-fixed max-[479px]:bg-scroll motion-reduce:bg-scroll"
        style={{ backgroundImage: `url(${luxuryVilla})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent"
      />

      <div className="mx-auto flex min-h-[85svh] max-w-7xl items-end px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Eyebrow>Immobilien mit Perspektive</Eyebrow>
          </div>
          <h1 className="font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ihr neues Zuhause beginnt mit der richtigen Beratung.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Wir begleiten Käufer, Mieter und Eigentümer zuverlässig durch jede
            Phase ihrer Immobilienentscheidung.
          </p>

          <QuickSearchForm />

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/immobilien"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 font-semibold text-ink-950 transition hover:bg-sand-100"
            >
              Immobilien entdecken
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/bewertung"
              className="inline-flex items-center border border-white/80 bg-black/15 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-ink-950"
            >
              Kostenlose Bewertung
            </Link>
          </div>

          <p className="mt-12 border-l-2 border-gold-500 pl-5 text-sm font-medium uppercase tracking-[0.16em] text-white/75">
            Persönlich. Transparent. Lokal.
          </p>
        </div>
      </div>
    </section>
  );
}
