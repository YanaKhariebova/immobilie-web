import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { PropertiesPage } from '../pages/PropertiesPage'
import type { PropertyFilterSearch } from '../types'

const defaultFilters: PropertyFilterSearch = {
  transactionType: 'alle',
  propertyType: 'alle',
  city: '',
  maxPrice: undefined,
  minRooms: undefined,
  minLivingArea: undefined,
}

export const Route = createFileRoute('/immobilien/')({
  component: PropertiesIndexRoute,
})

function PropertiesIndexRoute() {
  const search = Route.useSearch()
  const filters: PropertyFilterSearch = {
    ...defaultFilters,
    ...search,
  }
  const navigate = useNavigate({ from: Route.fullPath })

  const handleFilterChange = (
    changedFilters: Partial<PropertyFilterSearch>,
  ) => {
    void navigate({
      search: (currentFilters) => ({
        ...currentFilters,
        ...changedFilters,
      }),
      replace: true,
    })
  }

  const handleFilterReset = () => {
    void navigate({
      search: {},
      replace: true,
    })
  }

  return (
    <PropertiesPage
      filters={filters}
      onFilterChange={handleFilterChange}
      onFilterReset={handleFilterReset}
    />
  )
}
