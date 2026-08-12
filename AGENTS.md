# Codex-Projektregeln

## Verbindliche Kursgrundlage

- Verwende zuerst die lokalen DCI-Lektionen und Guides im Course-Wiki als technische Arbeitsgrundlage.
- Für TanStack Router gilt insbesondere Lektion `011` mit File-Based Routing.
- Wenn externe Dokumentation von der DCI-Lektion abweicht, weise vor einer Strukturänderung darauf hin.

## Tech-Stack

- Framework: Vite und React
- Sprache: TypeScript
- Styling: Tailwind CSS
- Routing: TanStack Router mit dateibasierter Routenstruktur
- UI-Architektur: Atomic Design
- Sprache der Benutzeroberfläche und Inhalte: Deutsch (DE)

## Befehle

- Entwicklungsserver: `npm run dev`
- Lint-Prüfung: `npm run lint`
- Produktions-Build: `npm run build`

Bevorzuge immer die in `package.json` definierten Skripte.

## Arbeitsweise

- Lies die betroffenen Dateien vollständig, bevor du sie änderst.
- Erstelle vor größeren Änderungen einen kurzen Plan.
- Halte Änderungen klein und auf die aktuelle Aufgabe begrenzt.
- Verwende bestehende Komponenten, Types und Patterns, bevor du neue erstellst.
- Führe nach Codeänderungen mindestens `npm run lint` und `npm run build` aus.

## Atomic-Design-Struktur

- `components/atoms/`: kleinste wiederverwendbare UI-Bausteine.
- `components/molecules/`: Kombinationen weniger Atoms mit einer klaren Aufgabe.
- `components/organisms/`: vollständige UI-Bereiche wie Header, Footer, Hero oder Formulare.
- `components/templates/`: Seitenlayouts ohne konkrete Seitendaten.
- `pages/`: konkrete Seiten, die Templates und Organisms zusammensetzen.
- `routes/`: ausschließlich TanStack-Routen und routenspezifische Logik.
- Komponenten dürfen nur Bausteine derselben oder einer niedrigeren Atomic-Ebene verwenden.
- Ordne eine Komponente nach ihrer Verantwortung ein, nicht nur nach ihrer Größe.

## Coding-Standards

- Halte die Atomic-Design-Struktur unter `components/` konsequent ein.
- Verwende funktionale Komponenten und explizite TypeScript-Interfaces.
- Lege Seitenrouten in `src/routes/` nach den DCI-Konventionen für TanStack Router an.
- Bearbeite `src/routeTree.gen.ts` niemals manuell.
- Verwende `React.FC` nur, wenn es zum bestehenden Projektstil passt.
- Entwickle konsequent mobile-first und responsiv mit Tailwind CSS.
- Jede Seite muss ohne horizontalen Scroll bei 320, 375, 768, 1024 und 1440 Pixel Breite funktionieren.
- Navigation, Formulare, Bilder und CTAs müssen auf kleinen Bildschirmen vollständig bedienbar bleiben.
- Verwende semantische Landmarks wie `header`, `nav`, `main`, `section`, `article`, `aside` und `footer` entsprechend ihrer Bedeutung.
- Verwende pro Seite genau eine inhaltliche `h1` und danach eine logisch fortlaufende Überschriftenhierarchie.
- Verwende echte `button`-Elemente für Aktionen und Links nur für Navigation.
- Formulare benötigen zugeordnete `label`-Elemente; informative Bilder brauchen sinnvolle Alt-Texte.
- Nutze ARIA nur dann, wenn native semantische HTML-Elemente nicht ausreichen.
- Alle Texte, UI-Beschriftungen, Formulare und Mock-Daten müssen auf Deutsch sein.
- Verwende kein `any`, außer es gibt einen klaren und dokumentierten Grund.
- Führe keine Refactorings außerhalb der aktuellen Aufgabe durch.

## Schwerpunkte

- Klare CTAs für Käufer, Mieter, Verkäufer und Eigentümer.
- Gute Ladezeiten und Barrierefreiheit.
- Hochwertige, elegante Immobilienästhetik mit klaren Layouts.

## Sicherheitsregeln

- Keine blinden Änderungen: Ist die Ursache unklar, analysiere zuerst.
- Lösche oder benenne keine Dateien ohne ausdrückliche Aufforderung um.
- Verändere keine Authentifizierung, API-Verträge, `.env*`, CI/CD oder Deployment-Konfiguration ohne ausdrückliche Freigabe.
- Deaktiviere keine Tests oder Prüfungen, um Fehler zu verstecken.
- Verwende keine echten personenbezogenen Daten oder Zugangsdaten.
- Kennzeichne rechtliche Texte als Entwürfe, die fachlich geprüft werden müssen.

## Erwartete Ausgabe

- Nenne die geänderten Dateien.
- Nenne die ausgeführten Befehle und deren Ergebnisse.
- Nenne offene Risiken, Annahmen oder nicht abgeschlossene Punkte.
- Berichte bei UI-Änderungen, welche responsive Breiten und semantischen Strukturen geprüft wurden.
