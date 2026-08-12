import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { SiteTemplate } from '../components/templates/SiteTemplate'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <PlaceholderPage title="Seite nicht gefunden" />,
})

function RootComponent() {
  return (
    <>
      <SiteTemplate />
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </>
  )
}
