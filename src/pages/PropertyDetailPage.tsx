import { Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  BedDouble,
  CalendarDays,
  Check,
  FileText,
  Flame,
  MapPin,
  Ruler,
  Trees,
} from 'lucide-react'
import { InquiryForm } from '../components/organisms/InquiryForm'
import { PropertyGallery } from '../components/organisms/PropertyGallery'
import type { Agent, Property, PropertyStatus, PropertyType } from '../types'

interface PropertyDetailPageProps {
  agent: Agent
  property: Property
}

const priceFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const statusLabels: Record<PropertyStatus, string> = {
  verfuegbar: 'Verfügbar',
  reserviert: 'Reserviert',
  verkauft: 'Verkauft',
  vermietet: 'Vermietet',
}

const propertyTypeLabels: Record<PropertyType, string> = {
  wohnung: 'Wohnung',
  haus: 'Haus',
  gewerbe: 'Gewerbeimmobilie',
  grundstueck: 'Grundstück',
}

const certificateLabels = {
  bedarfsausweis: 'Bedarfsausweis',
  verbrauchsausweis: 'Verbrauchsausweis',
}

export function PropertyDetailPage({
  agent,
  property,
}: PropertyDetailPageProps) {
  const priceSuffix = property.transactionType === 'miete' ? ' / Monat' : ''

  return (
    <article className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pb-24">
        <nav aria-label="Brotkrümelnavigation">
          <Link
            to="/immobilien"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-gold-500"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Zurück zu allen Immobilien
          </Link>
        </nav>

        <header className="mt-6 grid gap-7 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="bg-gold-500 px-3 py-1.5 text-black">
                {property.transactionType === 'kauf' ? 'Kaufen' : 'Mieten'}
              </span>
              <span className="border border-white/15 px-3 py-1.5 text-white/70">
                {statusLabels[property.status]}
              </span>
              <span className="border border-white/15 px-3 py-1.5 text-white/70">
                {propertyTypeLabels[property.propertyType]}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {property.title}
            </h1>
            <p className="mt-5 flex items-start gap-2 text-base text-white/60">
              <MapPin className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
              {property.address.street}, {property.address.postalCode}{' '}
              {property.address.city}
            </p>
          </div>
          <p className="text-left lg:text-right">
            <span className="block text-sm uppercase tracking-[0.14em] text-white/45">
              Kaufpreis
            </span>
            <span className="mt-2 block font-display text-4xl text-gold-500">
              {priceFormatter.format(property.price)}
              <span className="text-base text-white/45">{priceSuffix}</span>
            </span>
          </p>
        </header>

        <div className="mt-8">
          <PropertyGallery property={property} />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(20rem,0.8fr)] lg:items-start">
          <div>
            <section aria-labelledby="facts-title">
              <h2 id="facts-title" className="font-display text-3xl text-white sm:text-4xl">
                Eckdaten
              </h2>
              <dl className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                <div className="bg-ink-950 p-5">
                  <BedDouble className="text-gold-500" size={21} aria-hidden="true" />
                  <dt className="mt-4 text-sm text-white/50">Zimmer</dt>
                  <dd className="mt-1 text-xl font-semibold text-white">{property.rooms}</dd>
                </div>
                <div className="bg-ink-950 p-5">
                  <Ruler className="text-gold-500" size={21} aria-hidden="true" />
                  <dt className="mt-4 text-sm text-white/50">Wohnfläche</dt>
                  <dd className="mt-1 text-xl font-semibold text-white">
                    {property.livingArea} m²
                  </dd>
                </div>
                <div className="bg-ink-950 p-5">
                  <Trees className="text-gold-500" size={21} aria-hidden="true" />
                  <dt className="mt-4 text-sm text-white/50">Grundstück</dt>
                  <dd className="mt-1 text-xl font-semibold text-white">
                    {property.plotArea ? `${property.plotArea} m²` : '–'}
                  </dd>
                </div>
                <div className="bg-ink-950 p-5">
                  <CalendarDays className="text-gold-500" size={21} aria-hidden="true" />
                  <dt className="mt-4 text-sm text-white/50">Baujahr</dt>
                  <dd className="mt-1 text-xl font-semibold text-white">
                    {property.energyCertificate.yearOfConstruction}
                  </dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="description-title" className="mt-14">
              <h2 id="description-title" className="font-display text-3xl text-white sm:text-4xl">
                Objektbeschreibung
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
                {property.description}
              </p>
            </section>

            <section aria-labelledby="features-title" className="mt-14">
              <h2 id="features-title" className="font-display text-3xl text-white sm:text-4xl">
                Ausstattung
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 border-b border-white/10 py-3 text-white/70"
                  >
                    <Check className="shrink-0 text-gold-500" size={18} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="energy-title" className="mt-14">
              <h2 id="energy-title" className="font-display text-3xl text-white sm:text-4xl">
                Energieausweis
              </h2>
              <dl className="mt-6 grid gap-4 border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2 sm:p-7">
                <div className="flex gap-3">
                  <FileText className="shrink-0 text-gold-500" size={20} aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-white/45">Ausweisart</dt>
                    <dd className="mt-1 font-semibold text-white">
                      {certificateLabels[property.energyCertificate.type]}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Flame className="shrink-0 text-gold-500" size={20} aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-white/45">Energieträger</dt>
                    <dd className="mt-1 font-semibold text-white">
                      {property.energyCertificate.energySource}
                    </dd>
                  </div>
                </div>
                <div>
                  <dt className="text-sm text-white/45">Energiekennwert</dt>
                  <dd className="mt-1 font-semibold text-white">
                    {property.energyCertificate.energyValue} kWh/(m²·a)
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-white/45">Baujahr laut Energieausweis</dt>
                  <dd className="mt-1 font-semibold text-white">
                    {property.energyCertificate.yearOfConstruction}
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          <InquiryForm agent={agent} property={property} />
        </div>
      </div>
    </article>
  )
}
