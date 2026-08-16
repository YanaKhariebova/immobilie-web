import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Brand } from '../atoms/Brand'
import { MainNavigation } from '../molecules/MainNavigation'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black/60 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Brand />
        <div className="hidden md:block">
          <MainNavigation />
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/25 text-white transition hover:border-gold-500 hover:text-gold-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 md:hidden"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="w-full border-t border-white/15 pt-3 md:hidden"
          >
            <MainNavigation
              ariaLabel="Mobile Hauptnavigation"
              layout="vertical"
              onNavigate={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </header>
  )
}
