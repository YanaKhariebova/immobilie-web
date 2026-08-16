import { createFileRoute } from '@tanstack/react-router'
import { ImprintPage } from '../pages/ImprintPage'

export const Route = createFileRoute('/impressum')({
  component: ImprintPage,
})
