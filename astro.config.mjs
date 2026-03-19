// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { rehypeTasklistEnhancer } from "./config/plugins/rehype-tasklist-enhancer";
import { sidebar } from "./astro.sidebar";

import icon from "astro-icon";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://linux.casset.cat/",
  output: "static",
  integrations: [
    starlight({
      title: "Linux Starlight",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jramma/linux-starlight",
        },
      ],
      defaultLocale: "es",
      locales: {
        es: {
          label: "Español",
        },
      },
      customCss: ["./src/styles/global.css"],
      sidebar,
      components: {
        Head: "./src/overrides/Head.astro",
        Footer: "./src/overrides/Footer.astro",
      },
    }),
    icon(),
  ],
  markdown: {
    rehypePlugins: [
      rehypeTasklistEnhancer(),
      [rehypeMermaid, { strategy: "pre-mermaid" }],
    ],
  },
});
