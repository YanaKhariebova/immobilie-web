import { Brand } from '../atoms/Brand'
import { MainNavigation } from '../molecules/MainNavigation'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black/60 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Brand />
        <MainNavigation />
      </div>
    </header>
  )
}
