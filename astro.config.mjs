// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
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
        en: {
          label: "English",
        },
        ca: {
          label: "Català",
        },
      },
      plugins: [starlightThemeObsidian()],
    }),
  ],
});
