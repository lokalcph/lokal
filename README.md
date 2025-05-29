# Projektstruktur:

For at skabe et overblik og sikre en logisk opbygning har vi struktureret vores projektmappe med udgangspunkt i indhold og funktion. I vores src-mappe har vi organiseret projektet i undermapper, der er navngivet efter deres indhold. Vores sider ligger i pages-mappen, mens alle genanvendelige komponenter findes i components. Variabler og fonte er samlet i layouts, og alt medieindhold – som billeder, videoer og logoer – er placeret i public. Til sidst er al CSS samlet i styles, opdelt efter de forskellige sider.

# Navngivning:

Vi benytter små bogstaver i filnavne, både til CSS-, JavaScript- og Astro-filer. Det samme gælder vores komponenter. Navngivningen af sider er baseret på sidens funktion eller indhold – fx hedder vores forside index.astro, galleriet galleri.astro og kontaktsiden kontakt.astro. Komponenter navngives på engelsk for at sikre konsistens, som fx header.astro og footer.astro.

# Link til scripts:

Vores JavaScript-filer bliver linket til nederst i <body> med defer-attributten, så vi sikrer, at indholdet indlæses effektivt uden at blokere siden.

# Git branches:

Vi navngiver vores branches med feature først og så ud fra den funktionalitet, der arbejdes på, efterfulgt af navnet på den person, der arbejder med den. Et eksempel kunne være feature-header-navn. Til commits anvender vi entydige beskeder med handlinger som add, fix, start og delete, så det hurtigt er tydeligt, hvad der er lavet.

# Arbejdsflow:

Vi undgår at arbejde i de samme filer ved at fordele opgaverne tydeligt og kommunikere løbende i gruppen. På den måde minimerer vi risikoen for merge-konflikter. Vi skriver alle commits på engelsk og sørger for, at ingen arbejder direkte i main – alt sker gennem separate feature branches, som merges efter godkendelse.

# Kode:

Vi har struktureret vores kode med fokus på overskuelighed og genbrug. Styling håndteres med class-baseret CSS, som genbruges på tværs af komponenter for ensartethed. ID’er bruger vi kun i de tilfælde, hvor vi skal lave specifikke funktioner – fx til knapper (CTA’er), der scroller brugeren hen til bestemte sektioner på siden. Det gælder blandt andet vores “Se menu”-knap, som fører direkte ned til menusektionen.
Før kodestart lavede vi en fælles kodeguide med regler, fx:

Fontstørrelser skrives i rem

Margin og padding sættes i vh, vw eller rem

Branch-navne: feature-detviharlavet-navn

Klassers navne: navngives efter funktion/indhold

ID’er: navngives efter hvad de refererer til

Vi skal kommentere al kode – så det er let at læse og arbejde videre på

Commit-beskeder starter med: add, fix, start, eller delete

Vi har gjort vores bedste for at kommentere koden undervejs – særligt ved tungere og mere komplekse funktioner – så alle i gruppen kunne følge med og forstå det arbejde, der blev lavet.

## Skal filer have korte forklaringer som kommentarer?

Vi har besluttet, at det er en god idé at kommentere koden løbende. Det gør det lettere for hele gruppen at forstå strukturen og funktionerne – også selvom man ikke selv har skrevet koden. Kommentaren kan både forklare styling, funktionalitet eller struktur og bidrager til en bedre fælles forståelse.

# Astro som framework:

Vi har bygget projektet i Astro, som er et frameworkj, der hjælper med at strukturere og opbygge hjemmesider på en nemmere og mere organiseret måde.
Astro loader kun det, der er nødvendigt, hvilket gør siden hurtigere – og samtidig er det både SEO-venligt og hurtigt at arbejde med. Det gør oplevelsen bedre for brugeren og giver også bedre synlighed på Google.
I Astro kan vi mixe forskellige teknologier som JavaScript, HTML og CSS i samme projekt, uden at det bliver tungt, hvilket gør siden mere bæredygtig, fordi der er mindre der skal loades.
Vi har fx brugt Astros måde at bygge sider på via pages-mappen, og vi har samlet fælles ting som menu og footer i komponenter, så vi kunne genbruge dem flere steder og holde koden ryddelig.

# Components

I Astro bygger man sider i pages-mappen, og fælles elementer som komponenter. Vi har fx lavet header og footer som separate komponenter, så de nemt kan genbruges på tværs af sider. En komponent kan genbruges og importeres flere steder uden at gentage koden. Udover menu og footer har vi fx også lavet vores Instagram-scroll-galleri og ImgTekstGalleri som komponenter – sidstnævnte til et mere avanceret galleri-layout. Det har gjort koden mere struktureret og overskuelig.

# Props

Vi har brugt props til at sende dynamisk data ind i vores komponenter – fx tekster, billeder eller links. Props er en måde at give komponenter information udefra, så de kan genbruges med forskelligt indhold, uden at selve layoutet ændres.
Det har givet rigtig god mening i vores projekt, fordi mange af vores komponenter – som fx headeren og vores grid– har haft et fast og komplekst layout, hvor indholdet godt kunne variere, men strukturen skulle være ens.

Her passer props perfekt, fordi vi nemt kunne genbruge komponenterne med forskellige værdier. Slots ville derimod have givet for meget fleksibilitet og krævet, at vi manuelt indsatte større stykker indhold hver gang – hvilket ikke passede til vores faste design struktur.

# Const

Vi har brugt const til at definere værdier, som ikke skal ændres – fx billeder, titler og props i vores Astro-komponenter. De definerer en fast værdi, som derfor ikke kan overskrives.

# Import i fences

Fordi vi arbejder i Astro, har vi mulighed for at importere både komponenter og data direkte ind i vores sider. Det gør vi øverst i vores filer – i det, man kalder en fence (de tre stiplede streger med JavaScript øverst). Her importerer vi fx vores fælles komponenter som Header, Footer og Layout, så vi kan genbruge dem på tværs af hele projektet. Det er også her, vi henter vores konstanter (const) – som fx billeder eller tekst – ind, så de kan vises dynamisk på siden.

# Javascript

I projektet har vi brugt JavaScript forskellige steder til at skabe små, men vigtige funktioner, der forbedrer brugeroplevelsen. Blandt andet har vi lavet en simpel burgermenu, en logo-animation og en scroll-bar med Instagram-opslag. Alle tre ting er håndteret med JavaScript, og vi har forsøgt at kommentere koden godt undervejs, så det er let at forstå og bygge videre på. Mere komplekse funktioner som fetch og dynamisk datahentning uddyber vi i afsnittet om fetch.

# Supabase og dynamisk indhold

Vi har oprettet vores egen API-database ved hjælp af Supabase, for at kunne gøre indholdet på vores site dynamisk – det vil sige, at dataene ikke er hårdkodede i koden, men hentes direkte fra databasen. På den måde kan vi/kunden opdatere indhold som produkter og priser uden at skulle ændre i selve koden. I vores Supabase-database gemmer vi bl.a. produktnavn, pris, billednavn og beskrivelse.

# Fetch

Vi bruger fetch til at hente data fra vores Supabase-database, når sitet indlæses. Det betyder, at produktinformationer som navn, pris, billeder og beskrivelser automatisk bliver hentet og vist på siden. Det gør sitet nemmere at vedligeholde og opdatere, fordi vi blot kan ændre indholdet i databasen. For at hente dataene sikkert, bruger vi fetch med en API-nøgle, som sikrer, at det kun er vores projekt, der har adgang til informationerne.​​

# Slug

For at gøre vores produktvisning dynamisk har vi oprettet en [slug].astro side i stedet for én statisk singleprodukt.astro. Ved at bruge [slug] bliver produktets titel en del af URL’en – fx: /galleri/kop-i-stentøj – og det gør, at man automatisk sendes videre til den rigtige produktside, når man klikker på et produkt i galleriet.

Vi bruger funktionen getStaticPaths() til at hente alle produkter fra Supabase og generere en statisk side for hver. Her returnerer vi både slug’en som URL og produktets data som props. Det betyder, at vi kan bruge de dynamiske værdier i vores HTML – fx til billede, beskrivelse, pris og navn – og i layout-komponenten bruger vi produktets navn som dynamisk page title.
Det gør løsningen fleksibel og skalerbar, fordi vi ikke manuelt skal lave en side for hvert produkt – og nye produkter kan tilføjes direkte via databasen.

# Netlify

Vi bruger Netlify til at hoste og bygge vores site. Hver gang vi opdaterer koden på GitHub, sørger Netlify automatisk for at bygge siden og gøre den tilgængelig online.
Gennem vores erfaringer med at bygge sitet via Netlify blev det tydeligt, hvor vigtig struktur – og særligt mappestruktur og korrekt filplacering – er i sådan et projekt. Flere gange oplevede vi, at billeder ikke blev vist, eller at komponenter manglede, fordi fil-stierne ikke var skrevet korrekt, eller fordi filer lå de forkerte steder. Vi lærte også, at Netlify kun har adgang til filer i projektets public-mappe, hvilket betød, at vi måtte flytte både billeder og fonte ud af vores oprindelige assets-mappe i src og over i public for at få det hele til at fungere. Det har lært os meget om, hvor vigtig en gennemtænkt struktur og overblik er – især når et projekt skal fungere i et deployment-miljø.

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
