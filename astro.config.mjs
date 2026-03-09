// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import { rehypeTasklistEnhancer } from "./config/plugins/rehype-tasklist-enhancer";

import icon from "astro-icon";
import mermaid from "astro-mermaid";

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
        ca: {
          label: "Català",
        },
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Guía de Linux",
          translations: {
            ca: "Guia de Linux",
          },
          items: [
            {
              label: "1: Instalación",
              translations: {
                ca: "1: Instal·lació",
              },
              autogenerate: { directory: "module-1" },
            },
            {
              label: "2: Comandos Básicos",
              translations: {
                ca: "2: Comandaments Básics",
              },
              autogenerate: { directory: "module-2" },
            },
            {
              label: "3: Usuarios y Red",
              translations: {
                ca: "3: Usuaris i Xarxa",
              },
              autogenerate: { directory: "module-3" },
            },
            {
              label: "4: Arranque y Servicios",
              translations: {
                ca: "4: Arrencada i Serveis",
              },
              autogenerate: { directory: "module-4" },
            },
            {
              label: "5: Almacenamiento",
              translations: {
                ca: "5: Emmagatzematge i LVM",
              },
              autogenerate: { directory: "module-5" },
            },
            {
              label: "6: Software y Tareas",
              translations: {
                ca: "6: Programari i Tasques",
              },
              autogenerate: { directory: "module-6" },
            },
            {
              label: "7: Seguridad y Cortafuegos",
              translations: {
                ca: "7: Seguretat i Tallafocs",
              },
              autogenerate: { directory: "module-7" },
            },
            {
              label: "8: Servidor Web Final",
              translations: {
                ca: "8: Servidor Web Final",
              },
              autogenerate: { directory: "module-8" },
            },
          ],
        },
        {
          label: "Ejercicios Prácticos",
          translations: {
            ca: "Exercicis Pràctics",
          },
          autogenerate: { directory: "exercises" },
        },
        {
          label: "Instalar Linux",
          translations: {
            en: "Install Linux",
            ca: "Instal·lar Linux",
          },
          items: [
            {
              label: "Crear un usb Booteable",
              translations: {
                ca: "Crear un usb Booteable",
              },
              slug: "bootable-usb",
            },
            {
              label: "Dual con Windows",
              translations: {
                ca: "Certificacions",
              },
              slug: "certification",
            },
            {
              label: "Instalación Limpia",
              translations: {
                ca: "Recursos",
              },
              slug: "resources",
            },
            {
              label: "Instalación en máquina virtual",
              translations: {
                ca: "Instal·lació en màquina virtual",
              },
              slug: "virtual-machine",
            },
            {
              label: "Instalar en servidor",
              translations: {
                ca: "Apèndix",
              },
              slug: "appendix",
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
                ca: "Certificacions",
              },
              slug: "certification",
            },
            {
              label: "Recursos",
              translations: {
                ca: "Recursos",
              },
              slug: "resources",
            },
            {
              label: "Apéndice",
              translations: {
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
                ca: "Començar",
              },
              href: {
                es: "/es/",
                ca: "/ca/",
              },
            },
            {
              label: {
                es: "Certificaciones",
                ca: "Certificacions",
              },
              href: {
                es: "/es/certification/",
                ca: "/ca/certification/",
              },
            },
            {
              label: {
                es: "Recursos",
                ca: "Recursos",
              },
              href: {
                es: "/es/resources/",
                ca: "/ca/resources/",
              },
            },
          ],
        }),
      ],
    }),
    icon(),
    mermaid(),
  ],
  markdown: {
    rehypePlugins: [rehypeTasklistEnhancer()],
  },
});
