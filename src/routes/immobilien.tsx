import { createFileRoute, Outlet } from '@tanstack/react-router'
import type { PropertyFilterSearch } from '../types'

function readPositiveNumber(value: unknown): number | undefined {
  const parsedValue = Number(value)

  return Number.isFinite(parsedValue) && parsedValue > 0
    ? parsedValue
    : undefined
}

function validateSearch(
  search: Record<string, unknown>,
): Partial<PropertyFilterSearch> {
  const validatedSearch: Partial<PropertyFilterSearch> = {}

  if (search.transactionType === 'kauf' || search.transactionType === 'miete') {
    validatedSearch.transactionType = search.transactionType
  }

  if (
    search.propertyType === 'wohnung' ||
    search.propertyType === 'haus' ||
    search.propertyType === 'gewerbe' ||
    search.propertyType === 'grundstueck'
  ) {
    validatedSearch.propertyType = search.propertyType
  }

  if (typeof search.city === 'string' && search.city.length > 0) {
    validatedSearch.city = search.city.slice(0, 80)
  }

  const maxPrice = readPositiveNumber(search.maxPrice)
  const minRooms = readPositiveNumber(search.minRooms)
  const minLivingArea = readPositiveNumber(search.minLivingArea)

  if (maxPrice !== undefined) validatedSearch.maxPrice = maxPrice
  if (minRooms !== undefined) validatedSearch.minRooms = minRooms
  if (minLivingArea !== undefined) {
    validatedSearch.minLivingArea = minLivingArea
  }

  return validatedSearch
}

export const Route = createFileRoute('/immobilien')({
  validateSearch,
  component: Outlet,
})
