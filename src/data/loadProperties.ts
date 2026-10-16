import type { Property } from "../types/property";
import { isProperty } from "../utils/isProperty";
import { propertyImages } from "./propertyImages";

export async function loadProperties(): Promise<Property[]> {
  const response = await fetch("/data/properties.json");

  if (!response.ok) {
    throw new Error("Die Immobilien konnten nicht geladen werden.");
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data) || !data.every(isProperty)) {
    throw new Error("Die Immobiliendaten haben ein ungültiges Format.");
  }

  return data.map((property) => ({
  ...property,
  images: property.images.map((imageKey) => {
    const imageUrl = Object.hasOwn(propertyImages, imageKey)
      ? propertyImages[imageKey]
      : undefined

    if (!imageUrl) {
      throw new Error(`Das Immobilienbild „${imageKey}“ wurde nicht gefunden.`)
    }

    return imageUrl
  }),
}))
}
