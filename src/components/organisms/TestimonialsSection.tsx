import { Eyebrow } from "../atoms/Eyebrow";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { useState } from 'react'
import { TestimonialForm } from './TestimonialForm'
import type { Testimonial } from '../../types/testimonial'
import { loadTestimonials, saveTestimonials } from '../../utils/testimonialStorage'

function readStoredTestimonials() {
  try {
    return { reviews: loadTestimonials(), error: '' }
  } catch {
    return {
      reviews: [] as Testimonial[],
      error: 'Gespeicherte Bewertungen konnten nicht gelesen werden. Prüfen Sie die Website-Daten und die Speichereinstellungen Ihres Browsers.',
    }
  }
}

const testimonials = [
  {
    quote:
      "Die Beratung war klar, persönlich und jederzeit nachvollziehbar. Wir fühlten uns bei jeder Entscheidung gut begleitet.",
    name: "S. Weber",
    context: "Beispielstimme · Immobilienkauf",
  },
  {
    quote:
      "Von der ersten Einschätzung bis zum Abschluss hatten wir eine feste Ansprechperson und einen transparenten Prozess.",
    name: "Familie Koch",
    context: "Beispielstimme · Immobilienverkauf",
  },
  {
    quote:
      "Unsere Wünsche wurden wirklich verstanden. So haben wir eine Wohnung gefunden, die langfristig zu uns passt.",
    name: "M. Richter",
    context: "Beispielstimme · Vermietung",
  },
];

export function TestimonialsSection() {
  const [stored, setStored] = useState(readStoredTestimonials)

  const handleSave = (testimonial: Testimonial): boolean => {
    try {
      // Read again before saving so reviews from another tab are retained.
      const reviews = [testimonial, ...loadTestimonials()]
      saveTestimonials(reviews)
      setStored({ reviews, error: '' })
      return true
    } catch {
      setStored((current) => ({
        ...current,
        error: 'Die Bewertung konnte nicht gespeichert werden. Der Browserspeicher ist möglicherweise voll, gesperrt oder enthält beschädigte Daten.',
      }))
      return false
    }
  }

  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-black/30 px-5 py-16 text-white lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Erfahrungen</Eyebrow>
        <h2
          id="testimonials-title"
          className="mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl"
        >
          Was unsere Kunden schätzen
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-white/60">
          Persönliche Begleitung, klare Kommunikation und ein verlässlicher
          Blick auf jedes Detail.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stored.reviews.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              context="Lokal gespeicherte Bewertung · Demo"
            />
          ))}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
        {stored.error && (
          <p role="alert" className="mt-6 text-sm leading-6 text-white/75">
            {stored.error}
          </p>
        )}
        <TestimonialForm onSave={handleSave} />
      </div>
    </section>
  );
}
