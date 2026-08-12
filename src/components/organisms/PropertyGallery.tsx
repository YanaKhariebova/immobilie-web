import type { Property } from '../../types'

interface PropertyGalleryProps {
  property: Property
}

export function PropertyGallery({ property }: PropertyGalleryProps) {
  const [primaryImage, secondaryImage] = property.images

  return (
    <section
      aria-label={`Bildergalerie: ${property.title}`}
      className="grid gap-3 overflow-hidden md:grid-cols-[2fr_1fr]"
    >
      <figure className="min-h-72 overflow-hidden bg-black md:min-h-[34rem]">
        <img
          src={primaryImage}
          alt={`${property.title} in ${property.address.city} – Außenansicht`}
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </figure>
      <figure className="min-h-64 overflow-hidden bg-black md:min-h-[34rem]">
        <img
          src={secondaryImage ?? primaryImage}
          alt={`${property.title} – weitere Ansicht`}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
