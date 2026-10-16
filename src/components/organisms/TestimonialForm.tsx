import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Testimonial } from '../../types/testimonial'

interface TestimonialFormProps {
  onSave: (testimonial: Testimonial) => boolean
}

const fieldClassName =
  'mt-2 min-h-12 w-full min-w-0 border border-white/15 bg-black/35 px-3 text-white focus:border-gold-500'

export function TestimonialForm({ onSave }: TestimonialFormProps) {
  const [name, setName] = useState('')
  const [rating, setRating] = useState('5')
  const [quote, setQuote] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (name.trim().length < 2 || quote.trim().length < 10) {
      setMessage('Bitte geben Sie mindestens zwei Zeichen für den Anzeigenamen und zehn Zeichen für Ihre Bewertung ein.')
      return
    }

    const saved = onSave({
      id: crypto.randomUUID(),
      name: name.trim(),
      rating: Number(rating),
      quote: quote.trim(),
    })

    if (!saved) {
      setMessage('Speichern fehlgeschlagen. Ihre Eingaben bleiben erhalten. Bitte versuchen Sie es erneut.')
      return
    }

    setName('')
    setRating('5')
    setQuote('')
    setMessage('Vielen Dank! Ihre Bewertung wurde in diesem Browser gespeichert.')
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="testimonial-form-title"
      aria-describedby="testimonial-storage-note"
      className="mt-10 min-w-0 border border-white/10 bg-white/[0.04] p-5 sm:p-8"
    >
      <h3 id="testimonial-form-title" className="font-display text-3xl text-white">
        Ihre Bewertung
      </h3>
      <p id="testimonial-storage-note" className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
        Diese Demo speichert Ihre Bewertung nur in diesem Browser. Sie bleibt
        nach dem Neuladen erhalten und ist für andere Besucher nicht sichtbar.
        Beim Löschen der Website-Daten wird sie entfernt. Bitte verwenden Sie
        einen erfundenen Anzeigenamen und keine persönlichen Daten.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="min-w-0 text-sm font-medium text-white/75">
          Anzeigename
          <input
            name="reviewName"
            value={name}
            onChange={(event) => { setName(event.target.value); setMessage('') }}
            required
            minLength={2}
            maxLength={60}
            autoComplete="off"
            className={fieldClassName}
          />
        </label>
        <label className="min-w-0 text-sm font-medium text-white/75">
          Bewertung
          <select
            name="reviewRating"
            value={rating}
            onChange={(event) => { setRating(event.target.value); setMessage('') }}
            className={fieldClassName}
          >
            {[5, 4, 3, 2, 1].map((value) => (
              <option key={value} value={value}>
                {value} von 5 Sternen
              </option>
            ))}
          </select>
        </label>
        <label className="min-w-0 text-sm font-medium text-white/75 sm:col-span-2">
          Ihr Erfahrungsbericht
          <textarea
            name="reviewText"
            value={quote}
            onChange={(event) => { setQuote(event.target.value); setMessage('') }}
            required
            minLength={10}
            maxLength={1000}
            rows={4}
            className={`${fieldClassName} resize-y py-3`}
          />
        </label>
      </div>
      <p role="status" className="mt-4 text-sm leading-6 text-white/75">{message}</p>
      <button
        type="submit"
        className="mt-4 min-h-12 w-full bg-gold-500 px-5 py-3 font-semibold text-black transition hover:bg-white sm:w-auto"
      >
        Bewertung speichern
      </button>
    </form>
  )
}
