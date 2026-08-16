import luxuryInterior from '../../assets/luxury-interior-about.webp'
import { Eyebrow } from '../atoms/Eyebrow'

export function AboutHero() {
  return (
    <section className="theme-always-dark relative isolate min-h-[72svh] overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 scale-105 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{ backgroundImage: `url(${luxuryInterior})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10"
      />
      <div className="mx-auto flex min-h-[72svh] max-w-7xl items-end px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>Über ImmobilieWeb</Eyebrow>
          <h1 className="mt-5 font-display text-5xl leading-tight tracking-tight sm:text-6xl">
            Immobilienberatung mit Anspruch und Persönlichkeit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Wir verbinden fundierte Marktkenntnis mit persönlicher Beratung
            und einem sicheren Gespür für besondere Immobilien.
          </p>
        </div>
      </div>
    </section>
  )
}
