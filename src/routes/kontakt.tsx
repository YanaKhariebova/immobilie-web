import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export const Route = createFileRoute('/kontakt')({ component: () => <PlaceholderPage title="Kontakt" /> })
