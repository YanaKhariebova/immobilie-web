import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type {
  ValuationFormData,
  ValuationPropertyType,
} from '../../types'

const steps = ['Objekttyp', 'Angaben', 'Adresse', 'Kontakt']

const propertyTypes: Array<{
  value: ValuationPropertyType
  label: string
  description: string
}> = [
  {
    value: 'haus',
    label: 'Haus',
    description: 'Ein- oder Mehrfamilienhaus',
  },
  {
    value: 'wohnung',
    label: 'Wohnung',
    description: 'Eigentums- oder Ferienwohnung',
  },
  {
    value: 'grundstueck',
    label: 'Grundstück',
    description: 'Bebaut oder unbebaut',
  },
  {
    value: 'gewerbe',
    label: 'Gewerbe',
    description: 'Büro, Praxis oder Ladenfläche',
  },
]

const initialFormData: ValuationFormData = {
  propertyType: '',
  livingArea: '',
  plotArea: '',
  rooms: '',
  yearOfConstruction: '',
  street: '',
  postalCode: '',
  city: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  privacyAccepted: false,
}

const inputClassName =
  'mt-2 min-h-12 w-full border border-white/15 bg-black/35 px-3 text-white outline-none transition hover:border-white/30 focus:border-gold-500'

export function ValuationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] =
    useState<ValuationFormData>(initialFormData)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const stepHeadingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    stepHeadingRef.current?.focus()
  }, [currentStep])

  const updateField = <Key extends keyof ValuationFormData>(
    field: Key,
    value: ValuationFormData[Key],
  ) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
    setErrorMessage('')
  }

  const validateStep = (step: number): string => {
    if (step === 0 && !formData.propertyType) {
      return 'Bitte wählen Sie einen Objekttyp aus.'
    }

    if (step === 1) {
      const livingArea = Number(formData.livingArea)
      const rooms = Number(formData.rooms)
      const yearOfConstruction = Number(formData.yearOfConstruction)
      const currentYear = new Date().getFullYear()

      if (!Number.isFinite(livingArea) || livingArea <= 0) {
        return 'Bitte geben Sie eine gültige Wohn- oder Nutzfläche an.'
      }

      if (!Number.isFinite(rooms) || rooms <= 0) {
        return 'Bitte geben Sie die Anzahl der Zimmer an.'
      }

      if (
        !Number.isInteger(yearOfConstruction) ||
        yearOfConstruction < 1800 ||
        yearOfConstruction > currentYear
      ) {
        return 'Bitte geben Sie ein gültiges Baujahr an.'
      }

      if (
        formData.propertyType === 'grundstueck' &&
        Number(formData.plotArea) <= 0
      ) {
        return 'Bitte geben Sie die Grundstücksfläche an.'
      }
    }

    if (step === 2) {
      if (!formData.street.trim() || !formData.city.trim()) {
        return 'Bitte geben Sie Straße und Ort vollständig an.'
      }

      if (!/^\d{5}$/.test(formData.postalCode)) {
        return 'Die Postleitzahl muss aus fünf Ziffern bestehen.'
      }
    }

    if (step === 3) {
      if (!formData.firstName.trim() || !formData.lastName.trim()) {
        return 'Bitte geben Sie Ihren Vor- und Nachnamen an.'
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        return 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
      }

      if (!formData.privacyAccepted) {
        return 'Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.'
      }
    }

    return ''
  }

  const handleNext = () => {
    const validationError = validateStep(currentStep)

    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
  }

  const handleBack = () => {
    setErrorMessage('')
    setCurrentStep((step) => Math.max(step - 1, 0))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationError = validateStep(currentStep)

    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    setIsSubmitted(true)
  }

  const handleRestart = () => {
    setFormData(initialFormData)
    setCurrentStep(0)
    setErrorMessage('')
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <section
        aria-labelledby="valuation-success-title"
        className="border border-emerald-400/30 bg-emerald-950/30 p-6 sm:p-10"
      >
        <div
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-full bg-emerald-400 text-emerald-950"
        >
          <Check size={24} />
        </div>
        <h2
          id="valuation-success-title"
          className="mt-6 font-display text-3xl text-white sm:text-4xl"
        >
          Vielen Dank für Ihre Angaben.
        </h2>
        <p role="status" className="mt-4 max-w-2xl leading-7 text-white/70">
          Ihre Daten wurden in dieser Demo nur lokal erfasst und nicht an
          einen Server übertragen. Später kann hier die persönliche
          Bewertung angefragt werden.
        </p>
        <button
          type="button"
          onClick={handleRestart}
          className="mt-7 inline-flex min-h-12 items-center gap-2 border border-white/25 px-5 font-semibold text-white transition hover:border-gold-500 hover:text-gold-500"
        >
          <RotateCcw size={18} aria-hidden="true" />
          Neue Bewertung starten
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
      <ol
        aria-label="Fortschritt der Immobilienbewertung"
        className="grid grid-cols-2 gap-3 border-b border-white/10 pb-6 sm:grid-cols-4"
      >
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isComplete = index < currentStep

          return (
            <li
              key={step}
              aria-current={isActive ? 'step' : undefined}
              className={
                isActive
                  ? 'border-l-2 border-gold-500 pl-3 text-white'
                  : 'border-l-2 border-white/15 pl-3 text-white/45'
              }
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.14em]">
                Schritt {index + 1}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold">
                {isComplete && <Check size={15} aria-hidden="true" />}
                {step}
              </span>
            </li>
          )
        })}
      </ol>

      <div className="py-7 sm:py-9">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
          Schritt {currentStep + 1} von {steps.length}
        </p>
        <h2
          ref={stepHeadingRef}
          tabIndex={-1}
          className="mt-3 font-display text-3xl text-white outline-none sm:text-4xl"
        >
          {currentStep === 0 && 'Welche Immobilie möchten Sie bewerten?'}
          {currentStep === 1 && 'Die wichtigsten Eckdaten'}
          {currentStep === 2 && 'Wo befindet sich die Immobilie?'}
          {currentStep === 3 && 'Wie dürfen wir Sie erreichen?'}
        </h2>

        {errorMessage && (
          <p
            role="alert"
            className="mt-5 border border-red-400/30 bg-red-950/35 px-4 py-3 text-sm text-red-100"
          >
            {errorMessage}
          </p>
        )}

        {currentStep === 0 && (
          <fieldset className="mt-7">
            <legend className="sr-only">Objekttyp auswählen</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {propertyTypes.map((propertyType) => (
                <label
                  key={propertyType.value}
                  className={
                    formData.propertyType === propertyType.value
                      ? 'cursor-pointer border border-gold-500 bg-gold-500/10 p-5'
                      : 'cursor-pointer border border-white/15 bg-black/20 p-5 transition hover:border-white/35'
                  }
                >
                  <span className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="propertyType"
                      value={propertyType.value}
                      checked={
                        formData.propertyType === propertyType.value
                      }
                      onChange={() =>
                        updateField('propertyType', propertyType.value)
                      }
                      className="mt-1 size-4 shrink-0 accent-gold-500"
                    />
                    <span>
                      <span className="block font-semibold text-white">
                        {propertyType.label}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-white/55">
                        {propertyType.description}
                      </span>
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {currentStep === 1 && (
          <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Eckdaten der Immobilie</legend>
            <label className="text-sm font-medium text-white/75">
              Wohn- oder Nutzfläche in m²
              <input
                type="number"
                min="1"
                inputMode="decimal"
                value={formData.livingArea}
                onChange={(event) =>
                  updateField('livingArea', event.target.value)
                }
                required
                className={inputClassName}
              />
            </label>
            <label className="text-sm font-medium text-white/75">
              Grundstücksfläche in m²
              <input
                type="number"
                min="1"
                inputMode="decimal"
                value={formData.plotArea}
                onChange={(event) =>
                  updateField('plotArea', event.target.value)
                }
                required={formData.propertyType === 'grundstueck'}
                className={inputClassName}
              />
            </label>
            <label className="text-sm font-medium text-white/75">
              Zimmer
              <input
                type="number"
                min="0.5"
                step="0.5"
                inputMode="decimal"
                value={formData.rooms}
                onChange={(event) =>
                  updateField('rooms', event.target.value)
                }
                required
                className={inputClassName}
              />
            </label>
            <label className="text-sm font-medium text-white/75">
              Baujahr
              <input
                type="number"
                min="1800"
                max={new Date().getFullYear()}
                inputMode="numeric"
                value={formData.yearOfConstruction}
                onChange={(event) =>
                  updateField('yearOfConstruction', event.target.value)
                }
                required
                className={inputClassName}
              />
            </label>
          </fieldset>
        )}

        {currentStep === 2 && (
          <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Adresse der Immobilie</legend>
            <label className="text-sm font-medium text-white/75 sm:col-span-2">
              Straße und Hausnummer
              <input
                type="text"
                autoComplete="street-address"
                value={formData.street}
                onChange={(event) =>
                  updateField('street', event.target.value)
                }
                required
                className={inputClassName}
              />
            </label>
            <label className="text-sm font-medium text-white/75">
              Postleitzahl
              <input
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                value={formData.postalCode}
                onChange={(event) =>
                  updateField(
                    'postalCode',
                    event.target.value.replace(/\D/g, ''),
                  )
                }
                required
                className={inputClassName}
              />
            </label>
            <label className="text-sm font-medium text-white/75">
              Ort
              <input
                type="text"
                autoComplete="address-level2"
                value={formData.city}
                onChange={(event) =>
                  updateField('city', event.target.value)
                }
                required
                className={inputClassName}
              />
            </label>
          </fieldset>
        )}

        {currentStep === 3 && (
          <fieldset className="mt-7 grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Kontaktdaten</legend>
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
                className={inputClassName}
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
                className={inputClassName}
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
                className={inputClassName}
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
                className={inputClassName}
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
          </fieldset>
        )}
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-5 font-semibold text-white transition hover:border-gold-500 hover:text-gold-500 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Zurück
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold-500 px-6 font-semibold text-black transition hover:bg-white"
          >
            Weiter
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold-500 px-6 font-semibold text-black transition hover:bg-white"
          >
            Bewertung anfragen
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        )}
      </div>
    </form>
  )
}
