import { LegalPageTemplate } from '../components/templates/LegalPageTemplate'
import { companyDetails } from '../data/company'

const headingClassName = 'font-display text-3xl text-white'
const linkClassName =
  'text-gold-500 underline underline-offset-4 transition hover:text-white'

export function ImprintPage() {
  return (
    <LegalPageTemplate title="Impressum">
      <section aria-labelledby="imprint-provider-title">
        <h2 id="imprint-provider-title" className={headingClassName}>
          Angaben zum Diensteanbieter
        </h2>
        <address className="mt-4 not-italic">
          {companyDetails.name}
          <br />
          {companyDetails.street}
          <br />
          {companyDetails.postalCode} {companyDetails.city}
        </address>
        <p className="mt-4">
          Vertreten durch die Geschäftsführerin:{' '}
          {companyDetails.managingDirector}
        </p>
      </section>

      <section aria-labelledby="imprint-contact-title">
        <h2 id="imprint-contact-title" className={headingClassName}>
          Kontakt
        </h2>
        <p className="mt-4">
          Telefon:{' '}
          <a
            href={'tel:' + companyDetails.phoneHref}
            className={linkClassName}
          >
            {companyDetails.phoneDisplay}
          </a>
          <br />
          E-Mail:{' '}
          <a
            href={'mailto:' + companyDetails.email}
            className={linkClassName}
          >
            {companyDetails.email}
          </a>
        </p>
      </section>

      <section aria-labelledby="imprint-register-title">
        <h2 id="imprint-register-title" className={headingClassName}>
          Register und Steuerangaben
        </h2>
        <p className="mt-4">
          Registergericht: {companyDetails.registerCourt}
          <br />
          Registernummer: {companyDetails.registerNumber}
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{' '}
          {companyDetails.vatId}
        </p>
      </section>

      <section aria-labelledby="imprint-supervision-title">
        <h2 id="imprint-supervision-title" className={headingClassName}>
          Aufsichtsbehörde und Berufsrecht
        </h2>
        <p className="mt-4">
          Zuständige Aufsichtsbehörde:{' '}
          {companyDetails.supervisoryAuthority}
        </p>
        <p className="mt-3">
          Erlaubnis nach § 34c GewO sowie konkrete Berufs- und
          Kammerangaben müssen anhand des tatsächlichen Unternehmens geprüft
          und ergänzt werden.
        </p>
      </section>

      <section aria-labelledby="imprint-source-title">
        <h2 id="imprint-source-title" className={headingClassName}>
          Rechtlicher Hinweis
        </h2>
        <p className="mt-4">
          Die allgemeinen Informationspflichten für geschäftsmäßige digitale
          Dienste ergeben sich insbesondere aus{' '}
          <a
            href="https://www.gesetze-im-internet.de/ddg/__5.html"
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            § 5 Digitale-Dienste-Gesetz
          </a>
          . Die hier verwendeten Daten sind ausschließlich Musterangaben.
        </p>
      </section>

      <p className="border-t border-white/10 pt-6 text-sm text-white/65">
        Stand des Entwurfs: August 2026
      </p>
    </LegalPageTemplate>
  )
}
