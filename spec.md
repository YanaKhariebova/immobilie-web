# Software Requirement Specification (SRS): ImmobilieWeb

## 1. Projektübersicht

Erstellung einer modernen, leistungsorientierten Website für ein deutsches Immobilienbüro zur Präsentation von Kauf- und Mietobjekten sowie zur Akquise von Eigentümern für eine Objektbewertung.

## 2. Zielgruppen

- **Käufer und Mieter:** Suchen Wohn- oder Gewerbeimmobilien.
- **Eigentümer und Verkäufer:** Möchten ihre Immobilie bewerten lassen oder verkaufen.

## 3. Hauptfunktionen und Seitenstruktur

### Startseite

- Hero-Bereich mit Suchfilter für Kaufen oder Mieten, Ort und Preis.
- Hervorgehobene Immobilien.
- Eigentümer-Service mit CTA zur kostenlosen Immobilienbewertung.
- Bereich Über uns und Kundenstimmen.

### Immobilienkatalog

- Filter für Objekttyp, Preis, Zimmer und Fläche.
- Rasteransicht mit Status: Verfügbar, Reserviert oder Verkauft.

### Objektdetailseite

- Bildergalerie.
- Eckdaten wie Preis, Zimmer, Fläche und Energieausweis.
- Kontaktformular für den zuständigen Makler.

### Immobilienbewertung für Eigentümer

- Mehrstufiges Formular zur Erfassung einer Bewertungsanfrage.

### Kontakt und Rechtliches

- Kontaktformular und Anfahrtskarte.
- Entwürfe für Impressum und Datenschutzerklärung.
- Rechtliche Inhalte müssen vor der Veröffentlichung fachlich geprüft werden.

## 4. Technische Anforderungen

- Build-Tool: Vite
- UI: React mit TypeScript
- Styling: Tailwind CSS
- Routing: TanStack Router mit dateibasierter Routenstruktur
- UI-Architektur: Atomic Design mit Atoms, Molecules, Organisms, Templates und Pages
- Icons: Lucide React
- Hauptsprache: Deutsch
- Mobile-first und vollständig responsiv von 320 bis mindestens 1440 Pixel Viewport-Breite
- Kein horizontaler Scroll; Navigation, Formulare, Bilder und CTAs bleiben auf allen Zielbreiten nutzbar
- Semantisch korrektes HTML mit Landmarks und logischer `h1`-bis-`h6`-Hierarchie
- Native interaktive Elemente, korrekt beschriftete Formulare und sinnvolle Bildalternativen
- Barrierearme Tastaturbedienung mit sichtbaren Fokuszuständen und ausreichendem Kontrast
