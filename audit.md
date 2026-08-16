# Audit- und Qualitätssicherungs-Checkliste

## 1. UI, UX und Design

- [x] Das Design wirkt vertrauenswürdig, hochwertig und professionell.
- [x] Das Farbschema besitzt ausreichenden Kontrast.
- [x] Die mobile Navigation funktioniert reibungslos.
- [x] Bilder besitzen feste Seitenverhältnisse, um Layout Shift zu vermeiden.
- [x] CTAs sind klar beschriftet und gut sichtbar.

## 2. Responsive Design

- [x] Bei 320 und 375 Pixel Breite gibt es keinen horizontalen Scroll.
- [x] Bei 768, 1024 und 1440 Pixel Breite bleiben Layout und Abstände harmonisch.
- [x] Navigation und alle CTAs sind auf Touch-Geräten vollständig erreichbar.
- [x] Schriftgrößen, Bilder, Grids und Formulare reagieren sinnvoll auf die Viewport-Breite.
- [x] Parallax-Hintergründe besitzen auf mobilen Geräten einen performanten Fallback.

## 3. Semantisches HTML

- [x] Jede Seite besitzt genau eine inhaltliche `h1`.
- [x] Die weitere Überschriftenhierarchie ist logisch.
- [x] Semantische Landmarks werden nach ihrer Bedeutung verwendet.
- [x] Aktionen verwenden `button`; Navigation verwendet Links.
- [x] Listen, Adressen, Formulare und Tabellen verwenden passende native HTML-Elemente.

## 4. Rechtliches und Datenschutz

- [x] Das Impressum ist von jeder Seite aus mit maximal zwei Klicks erreichbar.
- [x] Eine Datenschutzerklärung ist vorhanden.
- [x] Kontaktformulare enthalten eine Einwilligung zur Datenverarbeitung, soweit erforderlich.
- [x] Erforderliche Energieausweis-Angaben sind bei Immobilien vorhanden.
- [ ] Alle rechtlichen Inhalte wurden vor Veröffentlichung fachlich geprüft.

## 5. Barrierefreiheit

- [x] Informative Bilder besitzen passende Alt-Texte.
- [x] Dekorative Bilder haben leere Alt-Attribute.
- [x] Alle interaktiven Elemente sind per Tastatur bedienbar.
- [x] Formulare besitzen sichtbare Labels und verständliche Fehlermeldungen.
- [x] Fokuszustände sind deutlich erkennbar.

## 6. Codequalität und Performance

- [x] `npm run lint` läuft ohne Fehler durch.
- [x] `npm run build` läuft ohne TypeScript-Fehler durch.
- [x] Es gibt keine ungenutzten Imports oder Altlasten.
- [x] Bilder werden in geeigneten Formaten und Größen ausgeliefert.
- [x] Es gibt keine unnötig großen JavaScript-Abhängigkeiten.

## 7. Lighthouse-Messung

- [x] Production-Audit am 16.08.2026: Performance 77, Barrierefreiheit 100, Best Practices 100, SEO 100.
- [x] CLS 0, Total Blocking Time 210 ms, LCP 4,8 s.
- [ ] LCP bei einer späteren Hosting- und Bild-CDN-Konfiguration erneut optimieren.
