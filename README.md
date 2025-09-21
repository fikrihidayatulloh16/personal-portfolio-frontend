# Dynamic Static Personal Portofolio Project

This repository is the frontend for my personal portfolio, built with Astro and connected to a Sanity.io backend for content management.

## Tehnologies

- Javascript
- Astro
- Vite JS
- HTML, CSS
- Boostrap
- Vercel

## features

the core of this stack is vercel and astro. vercel can make deployment easy and astro are supported by vercel, therefore this stack can make front-end development easy. and most of all it all free. vercel can make integration with github when developer changes the data and code using hook.

## AI Support

this front end development assisted with many AI included granite from IBM playground.

## Pre requisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/)

---

## Setup Instruction

### 1 Clone repo

git clone repository
cd after cloning

### 2 Install Dependencies from package.json

npm install

## 3 run development

- create .env on root project
- add this code to .env

PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
PUBLIC_SANITY_DATASET="your_dataset_name_here"

(those variable can found in sanity,json)

- npm run dev (run development on local server)

here the complete guide from astro
# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

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
