import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export const Route = createFileRoute('/datenschutz')({ component: () => <PlaceholderPage title="Datenschutz" /> })
