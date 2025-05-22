# Projektstruktur:

For at skabe et overblik og sikre en logisk opbygning har vi struktureret vores projektmappe med udgangspunkt i indhold og funktion. I vores src-mappe har vi organiseret projektet i undermapper, der er navngivet efter deres indhold. Vores sider ligger i pages-mappen, mens alle genanvendelige komponenter findes i components. Variabler og fonte er samlet i layouts, og alt medieindhold – som billeder, videoer og logoer – er placeret i assets. Til sidst er al CSS samlet i styles, opdelt efter de forskellige sider.

# Navngivning:

Vi benytter små bogstaver i filnavne, både til CSS-, JavaScript- og Astro-filer. Det samme gælder vores komponenter. Navngivningen af sider er baseret på sidens funktion eller indhold – fx hedder vores forside index.astro, galleriet galleri.astro og kontaktsiden kontakt.astro. Komponenter navngives på engelsk for at sikre konsistens, som fx header.astro og footer.astro.

# Link til scripts:

Vores JavaScript-filer bliver linket til nederst i <body> med defer-attributten, så vi sikrer, at indholdet indlæses effektivt uden at blokere siden.

# Git branches:

Vi navngiver vores branches med feature først og så ud fra den funktionalitet, der arbejdes på, efterfulgt af navnet på den person, der arbejder med den. Et eksempel kunne være feature-header-navn. Til commits anvender vi entydige beskeder med handlinger som add, fix, start og delete, så det hurtigt er tydeligt, hvad der er lavet.

# Arbejdsflow:

Vi undgår at arbejde i de samme filer ved at fordele opgaverne tydeligt og kommunikere løbende i gruppen. På den måde minimerer vi risikoen for merge-konflikter. Vi skriver alle commits på engelsk og sørger for, at ingen arbejder direkte i main – alt sker gennem separate feature branches, som merges efter godkendelse.

# Kode:

## Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)

Vi bruger class-selectors til styling i CSS, da det er vores fælles præference. id-selectors bruges kun, hvis det er relevant i forhold til en specifik funktion – fx i forbindelse med JavaScript.

## Skal filer have korte forklaringer som kommentarer?

Vi har besluttet, at det er en god idé at kommentere koden løbende. Det gør det lettere for hele gruppen at forstå strukturen og funktionerne – også selvom man ikke selv har skrevet koden. Kommentaren kan både forklare styling, funktionalitet eller struktur og bidrager til en bedre fælles forståelse.

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
