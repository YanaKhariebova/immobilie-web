import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  context: string
}

export function TestimonialCard({
  quote,
  name,
  context,
}: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 sm:p-7">
      <div
        className="flex gap-1 text-gold-500"
        role="img"
        aria-label="5 von 5 Sternen"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-6 flex-1 font-display text-2xl leading-9 text-white">
        „{quote}“
      </blockquote>
      <figcaption className="mt-7 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-white/65">{context}</p>
      </figcaption>
    </figure>
  )
}
