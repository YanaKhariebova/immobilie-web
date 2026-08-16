import { useNavigate } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import type {
  PropertyFilterSearch,
  TransactionType,
} from '../../types'

type QuickTransactionType = TransactionType | 'alle'

const fieldClassName =
  'mt-2 min-h-12 w-full border border-white/20 bg-black/55 px-3 text-sm text-white outline-none transition hover:border-white/40 focus:border-gold-500'

export function QuickSearchForm() {
  const navigate = useNavigate()
  const [transactionType, setTransactionType] =
    useState<QuickTransactionType>('alle')
  const [city, setCity] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedCity = city.trim()
    const search: Partial<PropertyFilterSearch> = {
      ...(transactionType === 'alle' ? {} : { transactionType }),
      ...(normalizedCity ? { city: normalizedCity } : {}),
      ...(maxPrice ? { maxPrice: Number(maxPrice) } : {}),
    }

    void navigate({ to: '/immobilien', search })
  }

  return (
    <form
      role="search"
      aria-label="Immobilienschnellsuche"
      onSubmit={handleSubmit}
      className="mt-8 border border-white/20 bg-black/45 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-5"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[0.85fr_1.2fr_1fr_auto] lg:items-end">
        <label className="text-sm font-semibold text-white/80">
          Angebot
          <select
            value={transactionType}
            onChange={(event) => {
              setTransactionType(
                event.target.value as QuickTransactionType,
              )
              setMaxPrice('')
            }}
            className={fieldClassName}
          >
            <option value="alle">Kaufen oder Mieten</option>
            <option value="kauf">Kaufen</option>
            <option value="miete">Mieten</option>
          </select>
        </label>

        <label className="text-sm font-semibold text-white/80">
          Ort
          <input
            type="search"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="z. B. München"
            autoComplete="address-level2"
            maxLength={80}
            className={fieldClassName}
          />
        </label>

        <label className="text-sm font-semibold text-white/80">
          Maximalpreis
          <select
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            className={fieldClassName}
          >
            <option value="">Keine Preisgrenze</option>
            {transactionType === 'miete' ? (
              <>
                <option value="5000">Bis 5.000 € / Monat</option>
                <option value="7500">Bis 7.500 € / Monat</option>
                <option value="10000">Bis 10.000 € / Monat</option>
              </>
            ) : (
              <>
                <option value="1000000">Bis 1 Mio. €</option>
                <option value="3000000">Bis 3 Mio. €</option>
                <option value="5000000">Bis 5 Mio. €</option>
              </>
            )}
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold-500 px-5 font-semibold text-black transition hover:bg-white sm:col-span-2 lg:col-span-1"
        >
          <Search size={18} aria-hidden="true" />
          Suchen
        </button>
      </div>
    </form>
  )
}
