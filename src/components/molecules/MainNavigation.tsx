import { Link } from '@tanstack/react-router'

const navigation = [
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/immobilien', label: 'Immobilien' },
  { to: '/bewertung', label: 'Für Eigentümer' },
  { to: '/kontakt', label: 'Kontakt' },
] as const

export function MainNavigation() {
  return (
    <nav aria-label="Hauptnavigation">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {navigation.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-white/75 transition hover:text-white"
              activeProps={{ className: 'font-semibold text-gold-500' }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
