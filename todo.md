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

- [ ] Startseite mit Hero, Schnellsuche, Highlight-Objekten und Eigentümer-CTA erstellen
- [x] Katalogseite mit Filterung nach Kauf oder Miete, Preis und Zimmern erstellen
- [x] Detailseite mit Galerie, Eckdaten und Maklerkontakt erstellen
- [ ] Bewertungsseite mit Lead-Formular für Verkäufer erstellen
- [ ] Entwürfe für Impressum und Datenschutz einbinden
- [ ] Rechtliche Inhalte vor der Veröffentlichung fachlich prüfen lassen

## Phase 4: Optimierung und Tests

- [ ] Mobile Darstellung prüfen und optimieren
- [ ] Formularvalidierungen einbauen
- [ ] Barrierefreiheit prüfen
- [ ] `npm run lint` ausführen
- [ ] `npm run build` ausführen
- [ ] Performance und Lighthouse-Audit durchführen
