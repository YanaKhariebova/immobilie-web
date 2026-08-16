# Entwicklungs-Roadmap und TODOs

## Phase 1: Setup und Grundgerüst

- [x] Vite-, React- und TypeScript-Projekt initialisieren
- [x] Tailwind CSS konfigurieren und Schriftarten sowie Farben festlegen
- [x] Ordnerstruktur anlegen: `src/components`, `src/pages`, `src/types`, `src/data`
- [x] Dateibasiertes Routing mit TanStack Router aufsetzen
- [x] UI-Komponenten nach Atomic Design strukturieren

## Phase 2: Komponenten und Datenmodell

- [x] TypeScript-Types erstellen: `Property`, `FilterOptions`, `Agent`, `InquiryForm`
- [x] Deutsche Mock-Daten in `src/data/properties.ts` anlegen
- [x] `Navbar` und `Footer` als Atomic-Komponenten erstellen
- [x] `PropertyCard` als Molecule erstellen
- [x] `FilterBar` als Molecule oder Organism erstellen
- [x] `ContactModal` oder `InquiryForm` als Organism erstellen

## Phase 3: Seitenentwicklung

- [x] Startseite mit Hero, Schnellsuche, Highlight-Objekten und Eigentümer-CTA erstellen
- [x] Kontaktseite mit lokal validiertem Formular erstellen
- [x] Kundenstimmen als klar gekennzeichnete Mustertexte einbinden
- [x] Katalogseite mit Filterung nach Kauf oder Miete, Preis und Zimmern erstellen
- [x] Detailseite mit Galerie, Eckdaten und Maklerkontakt erstellen
- [x] Bewertungsseite mit Lead-Formular für Verkäufer erstellen
- [x] Entwürfe für Impressum und Datenschutz einbinden
- [ ] Rechtliche Inhalte vor der Veröffentlichung fachlich prüfen lassen

## Phase 4: Optimierung und Tests

- [x] Mobile Darstellung bei 320, 375, 768, 1024 und 1440 Pixel prüfen und optimieren
- [x] Formularvalidierungen einbauen und im Browser testen
- [x] Barrierefreiheit prüfen (Lighthouse: 100/100)
- [x] `npm run lint` ausführen
- [x] `npm run build` ausführen
- [x] Performance- und Lighthouse-Audit durchführen (Performance 77, Accessibility 100, Best Practices 100, SEO 100; 16.08.2026)
