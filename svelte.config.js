import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";

import Prism from "prismjs";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-python.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
  extensions: [".svelte", ".md"],
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatexSvelte],
      layout: {
        blog: "src/routes/blog/post.svelte",
        rawthoughts: "src/routes/rawthoughts/post.svelte",
      },
      alias: {
        js: "javascript",
        html: "markup",
        py: "python", // Alias for Python
      },
      highlighter(code, lang) {
        const grammar = Prism.languages[lang];
        if (!grammar) {
          throw new Error(`Unknown language: ${lang}`);
        }
        return Prism.highlight(code, grammar, lang);
      },
    }),
  ],
};

export default config;
