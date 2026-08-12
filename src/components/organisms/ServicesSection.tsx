import { KeyRound, Search, TrendingUp } from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { ServiceCard } from '../molecules/ServiceCard'

const services = [
  {
    title: 'Immobilie finden',
    description: 'Entdecken Sie ausgewählte Kauf- und Mietobjekte.',
    icon: Search,
  },
  {
    title: 'Immobilie verkaufen',
    description: 'Profitieren Sie von persönlicher und fundierter Beratung.',
    icon: KeyRound,
  },
  {
    title: 'Wert ermitteln',
    description: 'Erhalten Sie eine erste Einschätzung Ihrer Immobilie.',
    icon: TrendingUp,
  },
]

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-ink-950 px-5 py-16 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle id="services-title">Was können wir für Sie tun?</SectionTitle>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
