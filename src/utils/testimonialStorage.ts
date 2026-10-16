import type { Testimonial } from '../types/testimonial'

const storageKey = 'immobilieweb-testimonials'

function isTestimonial(value: unknown): value is Testimonial {
  if (typeof value !== 'object' || value === null) return false

  return (
    'id' in value && typeof value.id === 'string' && value.id.length > 0 &&
    'name' in value && typeof value.name === 'string' &&
    value.name.trim().length >= 2 && value.name.length <= 60 &&
    'quote' in value && typeof value.quote === 'string' &&
    value.quote.trim().length >= 10 && value.quote.length <= 1000 &&
    'rating' in value && typeof value.rating === 'number' &&
    Number.isInteger(value.rating) && value.rating >= 1 && value.rating <= 5
  )
}

export function loadTestimonials(): Testimonial[] {
  const stored = window.localStorage.getItem(storageKey)
  if (stored === null) return []

  const parsed: unknown = JSON.parse(stored)
  if (!Array.isArray(parsed) || !parsed.every(isTestimonial)) {
    throw new Error('Ungültige gespeicherte Bewertungen')
  }

  const ids = new Set(parsed.map((item) => item.id))
  if (ids.size !== parsed.length) {
    throw new Error('Doppelte Bewertungs-IDs')
  }

  return parsed
}

export function saveTestimonials(testimonials: Testimonial[]): void {
  window.localStorage.setItem(storageKey, JSON.stringify(testimonials))
}
