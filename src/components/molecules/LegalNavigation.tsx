import { Link } from '@tanstack/react-router'

export function LegalNavigation() {
  return (
    <nav aria-label="Rechtliche Navigation" className="flex gap-5">
      <Link to="/impressum" className="hover:text-sand-100">
        Impressum
      </Link>
      <Link to="/datenschutz" className="hover:text-sand-100">
        Datenschutz
      </Link>
    </nav>
  )
}
