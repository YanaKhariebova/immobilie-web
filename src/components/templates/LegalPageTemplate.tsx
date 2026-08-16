import type { ReactNode } from 'react'
import { Eyebrow } from '../atoms/Eyebrow'

interface LegalPageTemplateProps {
  title: string
  children: ReactNode
}

export function LegalPageTemplate({
  title,
  children,
}: LegalPageTemplateProps) {
  return (
    <article className="bg-ink-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>Rechtliche Informationen</Eyebrow>
        <h1 className="mt-5 font-display text-5xl tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <aside
          aria-label="Hinweis zum Entwurfsstatus"
          className="mt-8 border border-amber-400/30 bg-amber-950/30 p-5 text-sm leading-6 text-amber-100"
        >
          <strong className="block text-white">Entwurf mit Musterangaben</strong>
          Dieser Text ist keine Rechtsberatung. Unternehmensdaten,
          Verarbeitungsvorgänge und Aufsichtsangaben müssen vor der
          Veröffentlichung ergänzt und fachlich geprüft werden.
        </aside>
        <div className="mt-10 space-y-10 leading-7 text-white/70">
          {children}
        </div>
      </div>
    </article>
  )
}
