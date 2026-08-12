import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
      {children}
    </p>
  )
}
