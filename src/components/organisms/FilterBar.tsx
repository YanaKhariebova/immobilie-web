import { RotateCcw, SlidersHorizontal } from 'lucide-react'
import type { PropertyFilterSearch } from '../../types'

interface FilterBarProps {
  filters: PropertyFilterSearch
  onChange: (filters: Partial<PropertyFilterSearch>) => void
  onReset: () => void
}

const fieldClassName =
  'mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-sm text-white outline-none transition hover:border-white/30 focus:border-gold-500'

export function FilterBar({ filters, onChange, onReset }: FilterBarProps) {
  return (
    <form
      role="search"
      aria-labelledby="property-filter-title"
      className="border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex gap-3">
          <SlidersHorizontal
            className="mt-1 shrink-0 text-gold-500"
            size={20}
            aria-hidden="true"
          />
          <div>
            <h2 id="property-filter-title" className="font-display text-2xl text-white">
              Immobilien filtern
            </h2>
            <p className="mt-1 text-sm leading-6 text-white/55">
              Grenzen Sie die Auswahl nach Ihren Wünschen ein.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-h-11 items-center gap-2 border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-gold-500 hover:text-gold-500"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Filter zurücksetzen
        </button>
      </div>

      <fieldset className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <legend className="sr-only">Filteroptionen für Immobilien</legend>

        <label className="text-sm font-medium text-white/75">
          Angebot
          <select
            className={fieldClassName}
            value={filters.transactionType}
            onChange={(event) =>
              onChange({
                transactionType: event.target
                  .value as PropertyFilterSearch['transactionType'],
                maxPrice: undefined,
              })
            }
          >
            <option value="alle">Kaufen und Mieten</option>
            <option value="kauf">Kaufen</option>
            <option value="miete">Mieten</option>
          </select>
        </label>

        <label className="text-sm font-medium text-white/75">
          Objekttyp
          <select
            className={fieldClassName}
            value={filters.propertyType}
            onChange={(event) =>
              onChange({
                propertyType: event.target
                  .value as PropertyFilterSearch['propertyType'],
              })
            }
          >
            <option value="alle">Alle Objekttypen</option>
            <option value="wohnung">Wohnung</option>
            <option value="haus">Haus</option>
            <option value="gewerbe">Gewerbe</option>
            <option value="grundstueck">Grundstück</option>
          </select>
        </label>

        <label className="text-sm font-medium text-white/75">
          Ort
          <input
            type="search"
            className={fieldClassName}
            value={filters.city}
            onChange={(event) => onChange({ city: event.target.value })}
            placeholder="z. B. München"
            autoComplete="address-level2"
          />
        </label>

        <label className="text-sm font-medium text-white/75">
          Maximalpreis
          <select
            className={fieldClassName}
            value={filters.maxPrice ?? ''}
            onChange={(event) =>
              onChange({
                maxPrice: event.target.value
                  ? Number(event.target.value)
                  : undefined,
              })
            }
          >
            <option value="">Keine Preisgrenze</option>
            {filters.transactionType !== 'kauf' && (
              <>
                <option value="5000">Bis 5.000 € / Monat</option>
                <option value="7500">Bis 7.500 € / Monat</option>
                <option value="10000">Bis 10.000 € / Monat</option>
              </>
            )}
            {filters.transactionType !== 'miete' && (
              <>
                <option value="1000000">Bis 1 Mio. €</option>
                <option value="3000000">Bis 3 Mio. €</option>
                <option value="5000000">Bis 5 Mio. €</option>
              </>
            )}
          </select>
        </label>

        <label className="text-sm font-medium text-white/75">
          Zimmer ab
          <select
            className={fieldClassName}
            value={filters.minRooms ?? ''}
            onChange={(event) =>
              onChange({
                minRooms: event.target.value
                  ? Number(event.target.value)
                  : undefined,
              })
            }
          >
            <option value="">Beliebig</option>
            <option value="2">2 Zimmer</option>
            <option value="3">3 Zimmer</option>
            <option value="4">4 Zimmer</option>
            <option value="5">5 Zimmer</option>
            <option value="7">7 Zimmer</option>
          </select>
        </label>

        <label className="text-sm font-medium text-white/75">
          Wohnfläche ab
          <select
            className={fieldClassName}
            value={filters.minLivingArea ?? ''}
            onChange={(event) =>
              onChange({
                minLivingArea: event.target.value
                  ? Number(event.target.value)
                  : undefined,
              })
            }
          >
            <option value="">Beliebig</option>
            <option value="100">100 m²</option>
            <option value="150">150 m²</option>
            <option value="200">200 m²</option>
            <option value="300">300 m²</option>
            <option value="400">400 m²</option>
          </select>
        </label>
      </fieldset>
    </form>
  )
}
