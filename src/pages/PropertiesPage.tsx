import { FilterBar } from '../components/organisms/FilterBar'
import { PropertyGrid } from '../components/organisms/PropertyGrid'
import { properties } from '../data'
import type { PropertyFilterSearch } from '../types'

interface PropertiesPageProps {
  filters: PropertyFilterSearch
  onFilterChange: (filters: Partial<PropertyFilterSearch>) => void
  onFilterReset: () => void
}

export function PropertiesPage({
  filters,
  onFilterChange,
  onFilterReset,
}: PropertiesPageProps) {
  const normalizedCity = filters.city.trim().toLocaleLowerCase('de-DE')
  const filteredProperties = properties.filter((property) => {
    const matchesTransaction =
      filters.transactionType === 'alle' ||
      property.transactionType === filters.transactionType
    const matchesPropertyType =
      filters.propertyType === 'alle' ||
      property.propertyType === filters.propertyType
    const matchesCity =
      normalizedCity.length === 0 ||
      property.address.city.toLocaleLowerCase('de-DE').includes(normalizedCity)
    const matchesPrice =
      filters.maxPrice === undefined || property.price <= filters.maxPrice
    const matchesRooms =
      filters.minRooms === undefined || property.rooms >= filters.minRooms
    const matchesLivingArea =
      filters.minLivingArea === undefined ||
      property.livingArea >= filters.minLivingArea

    return (
      matchesTransaction &&
      matchesPropertyType &&
      matchesCity &&
      matchesPrice &&
      matchesRooms &&
      matchesLivingArea
    )
  })

  return (
    <div className="bg-ink-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            Immobilienportfolio
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl">
            Besondere Immobilien für besondere Ansprüche.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Entdecken Sie sorgfältig ausgewählte Kauf- und Mietobjekte in
            den gefragtesten Lagen Deutschlands.
          </p>
        </header>

        <div className="mt-12 lg:mt-16">
          <FilterBar
            filters={filters}
            onChange={onFilterChange}
            onReset={onFilterReset}
          />
        </div>

        <div className="mt-14 lg:mt-20">
          <PropertyGrid properties={filteredProperties} />
        </div>
      </div>
    </div>
  )
}
