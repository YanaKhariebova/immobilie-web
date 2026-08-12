import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export const Route = createFileRoute('/bewertung')({ component: () => <PlaceholderPage title="Immobilie bewerten" /> })
