import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function PropertyNotFoundPage() {
  return (
    <section className="flex min-h-[65svh] items-center bg-ink-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
          404 · ImmobilieWeb
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-white sm:text-6xl">
          Diese Immobilie wurde nicht gefunden.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
          Das Objekt ist möglicherweise nicht mehr verfügbar oder die Adresse ist nicht korrekt.
        </p>
        <Link
          to="/immobilien"
          className="mt-8 inline-flex min-h-12 items-center gap-2 bg-gold-500 px-5 font-semibold text-black transition hover:bg-white"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Zur Immobilienübersicht
        </Link>
      </div>
    </section>
  )
}
