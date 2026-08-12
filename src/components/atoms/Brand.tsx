import { Link } from '@tanstack/react-router'
import { Building2 } from 'lucide-react'

export function Brand() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-semibold tracking-tight text-white transition hover:text-sand-100"
      aria-label="ImmobilieWeb Startseite"
    >
      <Building2 aria-hidden="true" className="text-gold-500" />
      <span>ImmobilieWeb</span>
    </Link>
  )
}
