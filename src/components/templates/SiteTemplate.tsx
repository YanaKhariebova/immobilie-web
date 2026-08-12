import { Outlet } from '@tanstack/react-router'
import { SiteFooter } from '../organisms/SiteFooter'
import { SiteHeader } from '../organisms/SiteHeader'

export function SiteTemplate() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950 text-white">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
