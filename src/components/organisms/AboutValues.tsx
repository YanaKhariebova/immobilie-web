const values = [
  {
    number: '01',
    title: 'Persönliche Beratung',
    description:
      'Wir hören zu, verstehen Ihre Ziele und begleiten Sie mit einem festen Ansprechpartner.',
  },
  {
    number: '02',
    title: 'Lokale Expertise',
    description:
      'Fundierte Marktkenntnis bildet die Basis für realistische Bewertungen und sichere Entscheidungen.',
  },
  {
    number: '03',
    title: 'Höchste Sorgfalt',
    description:
      'Von der ersten Analyse bis zum Abschluss arbeiten wir transparent, diskret und verlässlich.',
  },
]

export function AboutValues() {
  return (
    <section className="bg-ink-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            Unser Selbstverständnis
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white">
            Vertrauen entsteht durch Klarheit.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <article key={value.number} className="border-t border-white/15 pt-5">
              <span className="text-sm font-semibold text-gold-500">
                {value.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
