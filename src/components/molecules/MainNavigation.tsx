import { Link } from '@tanstack/react-router'

const navigation = [
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/immobilien', label: 'Immobilien' },
  { to: '/bewertung', label: 'Für Eigentümer' },
  { to: '/kontakt', label: 'Kontakt' },
] as const

interface MainNavigationProps {
  ariaLabel?: string
  layout?: 'horizontal' | 'vertical'
  onNavigate?: () => void
}

export function MainNavigation({
  ariaLabel = 'Hauptnavigation',
  layout = 'horizontal',
  onNavigate,
}: MainNavigationProps) {
  return (
    <nav aria-label={ariaLabel}>
      <ul
        className={
          layout === 'vertical'
            ? 'flex flex-col gap-1 text-base'
            : 'flex items-center gap-x-5 text-sm'
        }
      >
        {navigation.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={
                layout === 'vertical'
                  ? 'block min-h-11 py-2 text-white/75 transition hover:text-white'
                  : 'text-white/75 transition hover:text-white'
              }
              onClick={onNavigate}
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
