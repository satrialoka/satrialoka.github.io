# My personal/professional page

This repository contains my attempt to build a personal website using [SvleteKit](https://kit.svelte.dev/). The site is developed following Josh Collinsworth's guide on [building static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog).

Feel free to explore the code and setup details!

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Dont forget to run formatter using:

```bash
npx prettier . --write
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Hosting

Hosted in github page at `gh-page` branch, dont forget to do the following after build:

```bash
git subtree push --prefix build origin gh-pages
```