import { Link } from '@tanstack/react-router'
import { ArrowUpRight, BedDouble, MapPin, Ruler } from 'lucide-react'
import type { Property, PropertyStatus } from '../../types'

interface PropertyCardProps {
  property: Property
  imageLoading?: 'eager' | 'lazy'
}

const statusLabels: Record<PropertyStatus, string> = {
  verfuegbar: 'Verfügbar',
  reserviert: 'Reserviert',
  verkauft: 'Verkauft',
  vermietet: 'Vermietet',
}

const statusStyles: Record<PropertyStatus, string> = {
  verfuegbar: 'bg-emerald-950/90 text-emerald-200',
  reserviert: 'bg-amber-950/90 text-amber-200',
  verkauft: 'bg-stone-900/90 text-stone-200',
  vermietet: 'bg-stone-900/90 text-stone-200',
}

const priceFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export function PropertyCard({
  property,
  imageLoading = 'lazy',
}: PropertyCardProps) {
  const priceSuffix = property.transactionType === 'miete' ? ' / Monat' : ''

  return (
    <article className="group overflow-hidden border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-gold-500/50">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <img
          src={property.images[0]}
          alt={`${property.title} in ${property.address.city}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading={imageLoading}
          decoding="async"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <span
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] backdrop-blur-sm ${statusStyles[property.status]}`}
          >
            {statusLabels[property.status]}
          </span>
          <span className="bg-black/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {property.transactionType === 'kauf' ? 'Kaufen' : 'Mieten'}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="flex items-center gap-2 text-sm text-white/60">
          <MapPin size={16} aria-hidden="true" />
          {property.address.postalCode} {property.address.city}
        </p>

        <h2 className="mt-3 font-display text-2xl leading-tight text-white">
          <Link
            to="/immobilien/$propertyId"
            params={{ propertyId: property.id }}
            className="transition hover:text-gold-500"
          >
            {property.title}
          </Link>
        </h2>

        <p className="mt-4 text-xl font-semibold text-gold-500">
          {priceFormatter.format(property.price)}
          <span className="text-sm font-normal text-white/50">{priceSuffix}</span>
        </p>

        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <BedDouble size={17} aria-hidden="true" />
            <dt className="sr-only">Zimmer</dt>
            <dd>{property.rooms} Zimmer</dd>
          </div>
          <div className="flex items-center gap-2">
            <Ruler size={17} aria-hidden="true" />
            <dt className="sr-only">Wohnfläche</dt>
            <dd>{property.livingArea} m²</dd>
          </div>
        </dl>

        <Link
          to="/immobilien/$propertyId"
          params={{ propertyId: property.id }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold-500"
          aria-label={`${property.title} ansehen`}
        >
          Objekt ansehen
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
