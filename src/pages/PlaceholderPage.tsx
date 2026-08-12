import { Link } from '@tanstack/react-router'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="min-h-[60svh] bg-ink-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
          ImmobilieWeb
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-tight text-white">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
          Diese Seite wird im nächsten Entwicklungsschritt umgesetzt.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block font-semibold text-gold-500 underline decoration-2 underline-offset-4 transition hover:text-white"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  )
}
