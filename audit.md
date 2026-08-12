# Audit- und Qualitätssicherungs-Checkliste

## 1. UI, UX und Design

- [ ] Das Design wirkt vertrauenswürdig, hochwertig und professionell.
- [ ] Das Farbschema besitzt ausreichenden Kontrast.
- [ ] Die mobile Navigation funktioniert reibungslos.
- [ ] Bilder besitzen feste Seitenverhältnisse, um Layout Shift zu vermeiden.
- [ ] CTAs sind klar beschriftet und gut sichtbar.

## 2. Responsive Design

- [ ] Bei 320 und 375 Pixel Breite gibt es keinen horizontalen Scroll.
- [ ] Bei 768, 1024 und 1440 Pixel Breite bleiben Layout und Abstände harmonisch.
- [ ] Navigation und alle CTAs sind auf Touch-Geräten vollständig erreichbar.
- [ ] Schriftgrößen, Bilder, Grids und Formulare reagieren sinnvoll auf die Viewport-Breite.
- [ ] Parallax-Hintergründe besitzen auf mobilen Geräten einen performanten Fallback.

## 3. Semantisches HTML

- [ ] Jede Seite besitzt genau eine inhaltliche `h1`.
- [ ] Die weitere Überschriftenhierarchie ist logisch.
- [ ] Semantische Landmarks werden nach ihrer Bedeutung verwendet.
- [ ] Aktionen verwenden `button`; Navigation verwendet Links.
- [ ] Listen, Adressen, Formulare und Tabellen verwenden passende native HTML-Elemente.

## 4. Rechtliches und Datenschutz

- [ ] Das Impressum ist von jeder Seite aus mit maximal zwei Klicks erreichbar.
- [ ] Eine Datenschutzerklärung ist vorhanden.
- [ ] Kontaktformulare enthalten eine Einwilligung zur Datenverarbeitung, soweit erforderlich.
- [ ] Erforderliche Energieausweis-Angaben sind bei Immobilien vorhanden.
- [ ] Alle rechtlichen Inhalte wurden vor Veröffentlichung fachlich geprüft.

## 5. Barrierefreiheit

- [ ] Informative Bilder besitzen passende Alt-Texte.
- [ ] Dekorative Bilder haben leere Alt-Attribute.
- [ ] Alle interaktiven Elemente sind per Tastatur bedienbar.
- [ ] Formulare besitzen sichtbare Labels und verständliche Fehlermeldungen.
- [ ] Fokuszustände sind deutlich erkennbar.

## 6. Codequalität und Performance

- [ ] `npm run lint` läuft ohne Fehler durch.
- [ ] `npm run build` läuft ohne TypeScript-Fehler durch.
- [ ] Es gibt keine ungenutzten Imports oder Altlasten.
- [ ] Bilder werden in geeigneten Formaten und Größen ausgeliefert.
- [ ] Es gibt keine unnötig großen JavaScript-Abhängigkeiten.
