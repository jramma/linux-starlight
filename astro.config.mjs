// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import { rehypeTasklistEnhancer } from "./config/plugins/rehype-tasklist-enhancer";

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
      defaultLocale: "ca",
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
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Guía de Linux",
          translations: {
            en: "Linux Guide",
            ca: "Guia de Linux",
          },
          items: [
            {
              label: "1: Instalación",
              translations: {
                en: "1: Installation",
                ca: "1: Instal·lació",
              },
              autogenerate: { directory: "module-1" },
            },
            {
              label: "2: Comandos Básicos",
              translations: {
                en: "2: Basic Commands",
                ca: "2: Comandaments Básics",
              },
              autogenerate: { directory: "module-2" },
            },
            {
              label: "3: Usuarios y Red",
              translations: {
                en: "3: Users & Network",
                ca: "3: Usuaris i Xarxa",
              },
              autogenerate: { directory: "module-3" },
            },
            {
              label: "4: Arranque y Servicios",
              translations: {
                en: "4: Boot & Services",
                ca: "4: Arrencada i Serveis",
              },
              autogenerate: { directory: "module-4" },
            },
            {
              label: "5: Almacenamiento",
              translations: {
                en: "5: Storage & LVM",
                ca: "5: Emmagatzematge i LVM",
              },
              autogenerate: { directory: "module-5" },
            },
            {
              label: "6: Software y Tareas",
              translations: {
                en: "6: Software & Tasks",
                ca: "6: Programari i Tasques",
              },
              autogenerate: { directory: "module-6" },
            },
            {
              label: "7: Seguridad y Cortafuegos",
              translations: {
                en: "7: Security & Firewall",
                ca: "7: Seguretat i Tallafocs",
              },
              autogenerate: { directory: "module-7" },
            },
            {
              label: "8: Servidor Web Final",
              translations: {
                en: "8: Final Web Server",
                ca: "8: Servidor Web Final",
              },
              autogenerate: { directory: "module-8" },
            },
          ],
        },
        {
          label: "Información Adicional",
          translations: {
            en: "Additional Information",
            ca: "Informació Addicional",
          },
          items: [
            {
              label: "Certificaciones",
              translations: {
                en: "Certifications",
                ca: "Certificacions",
              },
              slug: "certification",
            },
            {
              label: "Recursos",
              translations: {
                en: "Resources",
                ca: "Recursos",
              },
              slug: "resources",
            },
            {
              label: "Apéndice",
              translations: {
                en: "Appendix",
                ca: "Apèndix",
              },
              slug: "appendix",
            },
          ],
        },
      ],
      components: {
        Head: "./src/overrides/Head.astro",
        Footer: "./src/overrides/Footer.astro",
      },
      plugins: [
        starlightThemeNova({
          nav: [
            {
              label: {
                es: "Comenzar",
                en: "Get Started",
                ca: "Començar",
              },
              href: {
                es: "/es/",
                en: "/en/",
                ca: "/ca/",
              },
            },
            {
              label: {
                es: "Certificaciones",
                en: "Certifications",
                ca: "Certificacions",
              },
              href: {
                es: "/es/certification/",
                en: "/en/certification/",
                ca: "/ca/certification/",
              },
            },
            {
              label: {
                es: "Recursos",
                en: "Resources",
                ca: "Recursos",
              },
              href: {
                es: "/es/resources/",
                en: "/en/resources/",
                ca: "/ca/resources/",
              },
            },
          ],
        }),
      ],
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeTasklistEnhancer()],
  },
});
