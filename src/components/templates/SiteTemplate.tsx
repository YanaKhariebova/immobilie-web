import { Outlet } from '@tanstack/react-router'
import { SiteFooter } from '../organisms/SiteFooter'
import { SiteHeader } from '../organisms/SiteHeader'

export function SiteTemplate() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-white">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 bg-gold-500 px-4 py-3 font-semibold text-black transition focus:translate-y-0"
      >
        Zum Hauptinhalt springen
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
