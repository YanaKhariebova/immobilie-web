import { Link } from '@tanstack/react-router'
import { Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import type { Agent, Property } from '../../types'

interface InquiryFormProps {
  agent: Agent
  property: Property
}

export function InquiryForm({ agent, property }: InquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const agentName = `${agent.firstName} ${agent.lastName}`
  const agentInitials = `${agent.firstName[0]}${agent.lastName[0]}`

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="border border-emerald-400/30 bg-emerald-950/35 p-6"
      >
        <p className="font-display text-2xl text-white">Vielen Dank für Ihre Anfrage.</p>
        <p className="mt-3 leading-7 text-white/65">
          Ihre Angaben wurden in dieser Demo nicht an einen Server übertragen.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-5 text-sm font-semibold text-gold-500 underline decoration-2 underline-offset-4 transition hover:text-white"
        >
          Weitere Anfrage senden
        </button>
      </div>
    )
  }

  return (
    <aside
      aria-labelledby="inquiry-title"
      className="border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25 sm:p-7 lg:sticky lg:top-28"
    >
      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gold-500 font-display text-xl font-semibold text-black"
          aria-hidden="true"
        >
          {agentInitials}
        </div>
        <div>
          <p className="text-sm text-white/55">Ihre Ansprechperson</p>
          <p className="mt-1 text-lg font-semibold text-white">{agentName}</p>
          <p className="text-sm text-gold-500">{agent.position}</p>
        </div>
      </div>

      <div className="grid gap-3 border-b border-white/10 py-5 text-sm">
        <a
          href={`tel:${agent.phone.replaceAll(' ', '')}`}
          className="flex min-h-11 items-center gap-3 text-white/70 transition hover:text-gold-500"
        >
          <Phone size={17} aria-hidden="true" />
          {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex min-h-11 items-center gap-3 break-all text-white/70 transition hover:text-gold-500"
        >
          <Mail size={17} aria-hidden="true" />
          {agent.email}
        </a>
      </div>

      <form
        noValidate
        className="mt-6"
        onInput={() => setErrorMessage('')}
        onSubmit={(event) => {
          event.preventDefault()
          const firstInvalidField =
            event.currentTarget.querySelector<HTMLElement>(':invalid')

          if (firstInvalidField) {
            setErrorMessage(
              'Bitte füllen Sie alle Pflichtfelder korrekt aus und bestätigen Sie den Datenschutz.',
            )
            firstInvalidField.focus()
            return
          }

          setErrorMessage('')
          setIsSubmitted(true)
        }}
      >
        <h2 id="inquiry-title" className="font-display text-3xl text-white">
          Interesse an diesem Objekt?
        </h2>
        <p className="mt-2 text-sm leading-6 text-white/55">
          Senden Sie uns eine unverbindliche Anfrage.
        </p>

        {errorMessage && (
          <p
            role="alert"
            className="mt-5 border border-red-400/30 bg-red-950/35 px-4 py-3 text-sm text-red-100"
          >
            {errorMessage}
          </p>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <label className="text-sm font-medium text-white/75">
            Vorname
            <input
              id="inquiry-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-white outline-none transition focus:border-gold-500"
            />
          </label>
          <label className="text-sm font-medium text-white/75">
            Nachname
            <input
              id="inquiry-last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-white outline-none transition focus:border-gold-500"
            />
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-white/75">
          E-Mail-Adresse
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-white outline-none transition focus:border-gold-500"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-white/75">
          Telefonnummer (optional)
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-white outline-none transition focus:border-gold-500"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-white/75">
          Nachricht
          <textarea
            id="inquiry-message"
            name="message"
            rows={5}
            required
            defaultValue={`Guten Tag, ich interessiere mich für „${property.title}“ und wünsche weitere Informationen.`}
            className="mt-2 w-full resize-y border border-white/15 bg-black/35 px-3 py-3 text-white outline-none transition focus:border-gold-500"
          />
        </label>

        <label className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/60">
          <input
            id="inquiry-privacy"
            name="privacyAccepted"
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 accent-gold-500"
          />
          <span>
            Ich stimme der Verarbeitung meiner Angaben gemäß der{' '}
            <Link
              to="/datenschutz"
              className="text-gold-500 underline underline-offset-4 hover:text-white"
            >
              Datenschutzerklärung
            </Link>{' '}
            zu.
          </span>
        </label>

        <button
          type="submit"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-gold-500 px-5 font-semibold text-black transition hover:bg-white"
        >
          Anfrage senden
          <Send size={17} aria-hidden="true" />
        </button>
      </form>
    </aside>
  )
}
