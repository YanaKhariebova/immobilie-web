import { createFileRoute } from '@tanstack/react-router'
import { ValuationPage } from '../pages/ValuationPage'

export const Route = createFileRoute('/bewertung')({
  component: ValuationPage,
})
