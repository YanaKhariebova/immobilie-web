import { LegalNavigation } from '../molecules/LegalNavigation'

export function SiteFooter() {
  return (
    <footer className="theme-chrome relative border-t border-white/15 bg-black/60 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 ImmobilieWeb. Alle Rechte vorbehalten.</p>
        <LegalNavigation />
      </div>
    </footer>
  )
}
