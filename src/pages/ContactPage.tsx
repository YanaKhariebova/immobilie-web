import { Mail, MapPin, Phone } from "lucide-react";
import { Eyebrow } from "../components/atoms/Eyebrow";
import { ContactForm } from "../components/organisms/ContactForm";
import { companyDetails } from "../data/company";

export function ContactPage() {
  return (
    <section className="bg-ink-950 px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Kontakt</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Persönlich für Sie da
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Ob Immobiliensuche, Verkauf oder Bewertung: Wir nehmen uns Zeit für
          Ihr Anliegen und melden uns persönlich bei Ihnen.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <ContactForm />

          <aside className="grid gap-6 lg:sticky lg:top-28">
            <section
              aria-labelledby="contact-details-title"
              className="border border-white/10 bg-white/[0.04] p-6"
            >
              <h2
                id="contact-details-title"
                className="font-display text-2xl text-white"
              >
                Kontaktdaten
              </h2>
              <address className="mt-5 grid gap-4 text-sm not-italic text-white/65">
                <p className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span>
                    {companyDetails.street}
                    <br />
                    {companyDetails.postalCode} {companyDetails.city}
                  </span>
                </p>
                <a
                  href={"tel:" + companyDetails.phoneHref}
                  className="flex min-h-11 items-center gap-3 transition hover:text-gold-500"
                >
                  <Phone
                    size={18}
                    className="shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  {companyDetails.phoneDisplay}
                </a>
                <a
                  href={"mailto:" + companyDetails.email}
                  className="flex min-h-11 items-center gap-3 break-all transition hover:text-gold-500"
                >
                  <Mail
                    size={18}
                    className="shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  {companyDetails.email}
                </a>
              </address>
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-white/55">
                {companyDetails.openingHours}
              </p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
