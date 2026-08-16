import { Link } from '@tanstack/react-router'
import { Check, RotateCcw, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import type { ContactFormData } from '../../types'

const initialFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacyAccepted: false,
}

const fieldClassName =
  'mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-white outline-none transition hover:border-white/30 focus:border-gold-500'

export function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = <Key extends keyof ContactFormData>(
    field: Key,
    value: ContactFormData[Key],
  ) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
    setErrorMessage('')
  }

  const validateForm = (): string => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      return 'Bitte geben Sie Ihren Vor- und Nachnamen an.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    }

    if (!formData.subject) {
      return 'Bitte wählen Sie ein Anliegen aus.'
    }

    if (formData.message.trim().length < 10) {
      return 'Ihre Nachricht muss mindestens zehn Zeichen enthalten.'
    }

    if (!formData.privacyAccepted) {
      return 'Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.'
    }

    return ''
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationError = validateForm()

    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setIsSubmitted(true)
  }

  const handleRestart = () => {
    setFormData(initialFormData)
    setErrorMessage('')
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <section
        aria-labelledby="contact-success-title"
        className="border border-emerald-400/30 bg-emerald-950/30 p-6 sm:p-8"
      >
        <div
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-full bg-emerald-400 text-emerald-950"
        >
          <Check size={24} />
        </div>
        <h2
          id="contact-success-title"
          className="mt-5 font-display text-3xl text-white"
        >
          Vielen Dank für Ihre Nachricht.
        </h2>
        <p role="status" className="mt-3 leading-7 text-white/65">
          In dieser Demo wurden keine Daten an einen Server übertragen.
        </p>
        <button
          type="button"
          onClick={handleRestart}
          className="mt-6 inline-flex min-h-12 items-center gap-2 border border-white/20 px-5 font-semibold text-white transition hover:border-gold-500 hover:text-gold-500"
        >
          <RotateCcw size={18} aria-hidden="true" />
          Neue Nachricht
        </button>
      </section>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25 sm:p-8"
    >
      <h2 className="font-display text-3xl text-white sm:text-4xl">
        Schreiben Sie uns
      </h2>
      <p className="mt-3 max-w-xl leading-7 text-white/55">
        Beschreiben Sie kurz Ihr Anliegen. Wir melden uns persönlich bei
        Ihnen.
      </p>

      {errorMessage && (
        <p
          id="contact-form-error"
          role="alert"
          className="mt-5 border border-red-400/30 bg-red-950/35 px-4 py-3 text-sm text-red-100"
        >
          {errorMessage}
        </p>
      )}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-white/75">
          Vorname
          <input
            type="text"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={(event) =>
              updateField('firstName', event.target.value)
            }
            required
            aria-describedby={errorMessage ? 'contact-form-error' : undefined}
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-medium text-white/75">
          Nachname
          <input
            type="text"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(event) =>
              updateField('lastName', event.target.value)
            }
            required
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-medium text-white/75">
          E-Mail-Adresse
          <input
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) =>
              updateField('email', event.target.value)
            }
            required
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-medium text-white/75">
          Telefonnummer (optional)
          <input
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) =>
              updateField('phone', event.target.value)
            }
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-medium text-white/75 sm:col-span-2">
          Ihr Anliegen
          <select
            value={formData.subject}
            onChange={(event) =>
              updateField('subject', event.target.value)
            }
            required
            className={fieldClassName}
          >
            <option value="">Bitte auswählen</option>
            <option value="immobiliensuche">Immobiliensuche</option>
            <option value="verkauf">Immobilienverkauf</option>
            <option value="bewertung">Immobilienbewertung</option>
            <option value="allgemein">Allgemeine Anfrage</option>
          </select>
        </label>
        <label className="text-sm font-medium text-white/75 sm:col-span-2">
          Nachricht
          <textarea
            rows={6}
            value={formData.message}
            onChange={(event) =>
              updateField('message', event.target.value)
            }
            required
            minLength={10}
            className={fieldClassName + ' resize-y py-3'}
          />
        </label>
        <label className="flex items-start gap-3 text-sm leading-6 text-white/65 sm:col-span-2">
          <input
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={(event) =>
              updateField('privacyAccepted', event.target.checked)
            }
            required
            className="mt-1 size-4 shrink-0 accent-gold-500"
          />
          <span>
            Ich stimme der Verarbeitung meiner Angaben gemäß der{' '}
            <Link
              to="/datenschutz"
              className="text-gold-500 underline underline-offset-4 transition hover:text-white"
            >
              Datenschutzerklärung
            </Link>{' '}
            zu.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-gold-500 px-6 font-semibold text-black transition hover:bg-white sm:w-auto"
      >
        Nachricht senden
        <Send size={18} aria-hidden="true" />
      </button>
    </form>
  )
}
