import { createFileRoute, notFound } from '@tanstack/react-router'
import { agents, properties } from '../data'
import { PropertyDetailPage } from '../pages/PropertyDetailPage'
import { PropertyNotFoundPage } from '../pages/PropertyNotFoundPage'

export const Route = createFileRoute('/immobilien/$propertyId')({
  loader: ({ params }) => {
    const property = properties.find((item) => item.id === params.propertyId)

    if (!property) throw notFound()

    const agent = agents.find((item) => item.id === property.agentId)

    if (!agent) throw notFound()

    return { agent, property }
  },
  notFoundComponent: PropertyNotFoundPage,
  component: PropertyDetailRoute,
})

function PropertyDetailRoute() {
  const { agent, property } = Route.useLoaderData()

  return <PropertyDetailPage agent={agent} property={property} />
}
