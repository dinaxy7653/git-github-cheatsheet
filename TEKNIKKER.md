# Fem avanserte teknikker

## 1. React-komponenter og datadrevet innhold

Siden bruker React som framework. Kommandoer og trinn ligger i arrays og blir skrevet ut med `map()`. Det gjør innholdet enklere å endre, og samme komponent kan brukes flere steder uten å kopiere HTML-struktur.

## 2. Semantisk HTML gjennom JSX

Innholdet er delt inn i `main`, `article`, `header`, `section`, `ol`, `dl` og `footer`. Denne strukturen beskriver hva innholdet betyr, ikke bare hvordan det ser ut. Overskriftene er koblet til seksjonene med `aria-labelledby`.

## 3. CSS Grid for responsivt oppsett

Arbeidsflyten bruker et åttedelt grid, mens hovedinnholdet bruker to kolonner. Media queries gjør oppsettet om til fire, to eller én kolonne på smalere skjermer. Siden kan derfor brukes både på PC og mobil uten horisontal rulling.

## 4. CSS-variabler og `clamp()`

Farger og radiusverdier er samlet som variabler i `:root`. Det gir et konsekvent design og gjør senere endringer enklere. `clamp()` brukes på blant annet tittel og marger, slik at størrelsene tilpasser seg skjermen innenfor kontrollerte grenser.

## 5. Egen utskriftsstil for A4

`@page` og `@media print` lager en egen utskriftsversjon i A4-format. Skygger, avrundede ytterkanter og nettleserbakgrunn fjernes, samtidig som fargene og innholdshierarkiet beholdes. Resultatet kan lagres som PDF på én side.
