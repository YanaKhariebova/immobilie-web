import { LegalPageTemplate } from '../components/templates/LegalPageTemplate'
import { companyDetails } from '../data/company'

const headingClassName = 'font-display text-3xl text-white'
const subheadingClassName = 'mt-6 text-lg font-semibold text-white'
const linkClassName =
  'text-gold-500 underline underline-offset-4 transition hover:text-white'

export function PrivacyPage() {
  return (
    <LegalPageTemplate title="Datenschutzerklärung">
      <section aria-labelledby="privacy-controller-title">
        <h2 id="privacy-controller-title" className={headingClassName}>
          1. Verantwortlicher
        </h2>
        <address className="mt-4 not-italic">
          {companyDetails.name}
          <br />
          {companyDetails.street}
          <br />
          {companyDetails.postalCode} {companyDetails.city}
          <br />
          E-Mail:{' '}
          <a
            href={'mailto:' + companyDetails.email}
            className={linkClassName}
          >
            {companyDetails.email}
          </a>
        </address>
        <p className="mt-4">
          Eine datenschutzbeauftragte Person ist – sofern gesetzlich
          erforderlich – vor Veröffentlichung mit Kontaktdaten zu ergänzen.
        </p>
      </section>

      <section aria-labelledby="privacy-general-title">
        <h2 id="privacy-general-title" className={headingClassName}>
          2. Allgemeine Hinweise
        </h2>
        <p className="mt-4">
          Personenbezogene Daten sind Informationen, mit denen eine Person
          direkt oder indirekt identifiziert werden kann. Welche Daten
          tatsächlich verarbeitet werden, hängt von Hosting, eingebundenen
          Diensten und der späteren technischen Formularanbindung ab.
        </p>
      </section>

      <section aria-labelledby="privacy-hosting-title">
        <h2 id="privacy-hosting-title" className={headingClassName}>
          3. Bereitstellung der Website und Hosting
        </h2>
        <p className="mt-4">
          Beim Aufruf einer veröffentlichten Website kann der Hostinganbieter
          technisch erforderliche Server-Logdaten verarbeiten, insbesondere
          IP-Adresse, Zeitpunkt, angeforderte Datei, Referrer sowie Browser-
          und Betriebssysteminformationen.
        </p>
        <p className="mt-3">
          Hostinganbieter, Speicherort, Rechtsgrundlage und konkrete
          Löschfristen müssen nach Auswahl des Hostings ergänzt werden.
          Als mögliche Rechtsgrundlage kommt Art. 6 Abs. 1 lit. f DSGVO in
          Betracht, soweit die Verarbeitung zur sicheren Bereitstellung
          erforderlich ist.
        </p>
      </section>

      <section aria-labelledby="privacy-forms-title">
        <h2 id="privacy-forms-title" className={headingClassName}>
          4. Kontakt- und Bewertungsformulare
        </h2>
        <p className="mt-4">
          Im aktuellen Prototyp werden Formulardaten ausschließlich lokal im
          Browser verarbeitet und nicht an einen Server übertragen. Vor einer
          produktiven Anbindung müssen Empfänger, Zweck, Rechtsgrundlage,
          Speicherdauer und Löschkonzept ergänzt werden.
        </p>
        <h3 className={subheadingClassName}>Mögliche Zwecke</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Bearbeitung allgemeiner Kontaktanfragen</li>
          <li>Vorbereitung einer Immobilienbewertung</li>
          <li>Beantwortung objektspezifischer Anfragen</li>
        </ul>
        <p className="mt-3">
          Je nach Anfrage können Art. 6 Abs. 1 lit. b DSGVO
          (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung) einschlägig sein. Die konkrete Einordnung muss vor
          Veröffentlichung geprüft werden.
        </p>
      </section>

      <section aria-labelledby="privacy-external-title">
        <h2 id="privacy-external-title" className={headingClassName}>
          5. Externe Links und Karten
        </h2>
        <p className="mt-4">
          Die Kontaktseite lädt keine externe Karte automatisch. Erst beim
          bewussten Öffnen des OpenStreetMap-Links verlassen Sie diese Website.
          Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des externen
          Anbieters.
        </p>
      </section>

      <section aria-labelledby="privacy-cookies-title">
        <h2 id="privacy-cookies-title" className={headingClassName}>
          6. Cookies und Analyse
        </h2>
        <p className="mt-4">
          Der aktuelle Prototyp verwendet keine eigenen Analyse-, Marketing-
          oder Trackingdienste. Falls später solche Dienste, externe Medien
          oder nicht technisch notwendige Cookies ergänzt werden, müssen
          Einwilligungsmanagement und Datenschutzerklärung angepasst werden.
        </p>
      </section>

      <section aria-labelledby="privacy-rights-title">
        <h2 id="privacy-rights-title" className={headingClassName}>
          7. Ihre Rechte
        </h2>
        <p className="mt-4">
          Betroffene Personen können – abhängig von den gesetzlichen
          Voraussetzungen – insbesondere Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
          verlangen. Eine erteilte Einwilligung kann mit Wirkung für die
          Zukunft widerrufen werden.
        </p>
        <p className="mt-3">
          Zudem besteht ein Beschwerderecht bei einer zuständigen
          Datenschutzaufsichtsbehörde. Für die verwendeten Münchner
          Musterangaben wäre die tatsächliche Zuständigkeit vor
          Veröffentlichung zu prüfen.
        </p>
      </section>

      <section aria-labelledby="privacy-source-title">
        <h2 id="privacy-source-title" className={headingClassName}>
          8. Informationspflichten und Aktualisierung
        </h2>
        <p className="mt-4">
          Die Informationspflichten bei Erhebung personenbezogener Daten sind
          insbesondere in{' '}
          <a
            href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679"
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            Art. 13 DSGVO
          </a>{' '}
          geregelt. Diese Erklärung muss bei jeder Änderung von Hosting,
          Formularversand, Drittanbietern oder Tracking aktualisiert werden.
        </p>
      </section>

      <p className="border-t border-white/10 pt-6 text-sm text-white/65">
        Stand des Entwurfs: August 2026
      </p>
    </LegalPageTemplate>
  )
}
