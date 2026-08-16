import { CheckCircle2, Clock3, ShieldCheck } from 'lucide-react'
import { Eyebrow } from '../components/atoms/Eyebrow'
import { ValuationForm } from '../components/organisms/ValuationForm'

const benefits = [
  {
    icon: Clock3,
    title: 'In wenigen Minuten',
    description: 'Die wichtigsten Angaben werden Schritt für Schritt erfasst.',
  },
  {
    icon: ShieldCheck,
    title: 'Vertraulich behandelt',
    description: 'Ihre Angaben werden transparent und datensparsam verarbeitet.',
  },
  {
    icon: CheckCircle2,
    title: 'Unverbindliche Anfrage',
    description: 'Die erste Kontaktaufnahme verpflichtet Sie zu nichts.',
  },
]

export function ValuationPage() {
  return (
    <section className="relative overflow-hidden bg-ink-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-gold-600/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <Eyebrow>Für Eigentümer</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Immobilie kostenlos bewerten
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Übermitteln Sie uns die wichtigsten Eckdaten Ihrer Immobilie. Wir
          bereiten damit den ersten Schritt zu einer fundierten persönlichen
          Einschätzung vor.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <ValuationForm />

          <aside
            aria-labelledby="valuation-benefits-title"
            className="border border-white/10 bg-black/25 p-6 lg:sticky lg:top-28"
          >
            <h2
              id="valuation-benefits-title"
              className="font-display text-2xl text-white"
            >
              Ihre Vorteile
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <section key={benefit.title}>
                    <Icon
                      size={22}
                      className="text-gold-500"
                      aria-hidden="true"
                    />
                    <h3 className="mt-3 font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {benefit.description}
                    </p>
                  </section>
                )
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
