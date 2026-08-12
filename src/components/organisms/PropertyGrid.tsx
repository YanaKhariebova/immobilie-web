import type { Property } from '../../types'
import { PropertyCard } from '../molecules/PropertyCard'

interface PropertyGridProps {
  properties: Property[]
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <section aria-labelledby="property-results-title">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
            Ausgewählte Objekte
          </p>
          <h2 id="property-results-title" className="mt-2 font-display text-3xl text-white">
            Aktuelle Immobilien
          </h2>
        </div>
        <p className="text-sm text-white/55" aria-live="polite">
          {properties.length} {properties.length === 1 ? 'Objekt' : 'Objekte'}
        </p>
      </div>

      {properties.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              imageLoading={index < 2 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      ) : (
        <div className="border border-white/10 bg-white/[0.04] px-5 py-14 text-center sm:px-8">
          <h3 className="font-display text-2xl text-white">
            Keine passenden Immobilien gefunden
          </h3>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-white/60">
            Ändern Sie einen oder mehrere Filter oder setzen Sie die Auswahl zurück.
          </p>
        </div>
      )}
    </section>
  )
}
