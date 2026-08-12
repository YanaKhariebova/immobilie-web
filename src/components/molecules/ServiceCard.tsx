import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:border-gold-500/50 hover:bg-white/[0.07]">
      <Icon aria-hidden="true" className="text-gold-500" />
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 leading-7 text-white/65">{description}</p>
    </article>
  )
}
