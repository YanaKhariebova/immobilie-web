import { Link } from '@tanstack/react-router'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { properties } from '../../data/properties'
import type { Property } from '../../types'
import { Eyebrow } from '../atoms/Eyebrow'

interface FeaturedPropertySceneProps {
  property: Property
  position: number
}

const priceFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

function FeaturedPropertyScene({
  property,
  position,
}: FeaturedPropertySceneProps) {
  const priceSuffix = property.transactionType === 'miete' ? ' / Monat' : ''
  const backgroundImage =
    property.images[position === 1 ? 1 : 0] ?? property.images[0]
  const sceneRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 479px)')
    const updateScreenSize = () => setIsSmallScreen(mediaQuery.matches)

    updateScreenSize()
    mediaQuery.addEventListener('change', updateScreenSize)

    return () => mediaQuery.removeEventListener('change', updateScreenSize)
  }, [])
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <article ref={sceneRef} className="relative isolate flex min-h-[72svh] items-end overflow-hidden border-t border-white/10 bg-ink-950 text-white sm:min-h-[78svh] lg:min-h-[88svh]">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-y-[35%] inset-x-0 -z-20 scale-105 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y: prefersReducedMotion || isSmallScreen ? 0 : imageY,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-transparent to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl border-l border-gold-500/80 pl-5 sm:pl-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            {String(position).padStart(2, '0')} / 03
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/75">
            <MapPin size={17} aria-hidden="true" />
            {property.address.postalCode} {property.address.city}
          </p>
          <h3 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {property.title}
          </h3>
          <p className="mt-5 text-xl font-semibold text-white sm:text-2xl">
            {priceFormatter.format(property.price)}
            <span className="text-sm font-normal text-white/65">
              {priceSuffix}
            </span>
          </p>
          <Link
            to="/immobilien/$propertyId"
            params={{ propertyId: property.id }}
            className="mt-7 inline-flex min-h-12 items-center gap-2 border border-white/70 bg-black/25 px-5 font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
          >
            Immobilie ansehen
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function FeaturedPropertiesParallax() {
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 3)

  return (
    <section
      aria-labelledby="featured-properties-title"
      className="theme-always-dark bg-ink-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Eyebrow>Exklusive Auswahl</Eyebrow>
        <h2
          id="featured-properties-title"
          className="mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Ausgewählte Immobilien
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          Drei besondere Adressen, drei eigenständige Lebensräume. Entdecken
          Sie Immobilien, die Architektur, Lage und Qualität vereinen.
        </p>
      </div>

      {featuredProperties.map((property, index) => (
        <FeaturedPropertyScene
          key={property.id}
          property={property}
          position={index + 1}
        />
      ))}
    </section>
  )
}
