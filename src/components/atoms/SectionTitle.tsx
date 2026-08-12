import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  id?: string
}

export function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2 id={id} className="font-display text-3xl text-white sm:text-4xl">
      {children}
    </h2>
  )
}
