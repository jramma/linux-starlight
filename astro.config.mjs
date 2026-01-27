// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  site: "https://linux-starlight.netlify.app/",
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
      customCss: [
        './src/styles/global.css'
      ],
      components: {
        Head: './src/overrides/Head.astro',
        Footer: './src/overrides/Footer.astro',
      },
      plugins: [
        starlightThemeNova(/* options */),
      ],
    }),
  ],
});
