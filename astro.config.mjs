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
      sidebar: [
        {
          label: 'Guía de Linux',
          translations: {
            en: 'Linux Guide',
            ca: 'Guia de Linux',
          },
          items: [
            {
              label: 'Módulo 1: Introducción',
              translations: {
                en: 'Module 1: Introduction',
                ca: 'Mòdul 1: Introducció',
              },
              autogenerate: { directory: 'module-1' },
            },
            {
              label: 'Módulo 2: Comandos',
              translations: {
                en: 'Module 2: Commands',
                ca: 'Mòdul 2: Comandaments',
              },
              autogenerate: { directory: 'module-2' },
            },
            {
              label: 'Módulo 3: Administración',
              translations: {
                en: 'Module 3: Administration',
                ca: 'Mòdul 3: Administració',
              },
              autogenerate: { directory: 'module-3' },
            },
            {
              label: 'Módulo 4: Almacenamiento',
              translations: {
                en: 'Module 4: Storage',
                ca: 'Mòdul 4: Emmagatzematge',
              },
              autogenerate: { directory: 'module-4' },
            },
            {
              label: 'Módulo 5: Redes y Seguridad',
              translations: {
                en: 'Module 5: Networking & Security',
                ca: 'Mòdul 5: Xarxes i Seguretat',
              },
              autogenerate: { directory: 'module-5' },
            },
            {
              label: 'Módulo 6: Automatización',
              translations: {
                en: 'Module 6: Automation',
                ca: 'Mòdul 6: Automatització',
              },
              autogenerate: { directory: 'module-6' },
            },
          ],
        },
        {
          label: 'Información Adicional',
          translations: {
            en: 'Additional Information',
            ca: 'Informació Addicional',
          },
          items: [
            {
              label: 'Certificaciones',
              translations: {
                en: 'Certifications',
                ca: 'Certificacions',
              },
              slug: 'certification',
            },
            {
              label: 'Recursos',
              translations: {
                en: 'Resources',
                ca: 'Recursos',
              },
              slug: 'resources',
            },
            {
              label: 'Apéndice',
              translations: {
                en: 'Appendix',
                ca: 'Apèndix',
              },
              slug: 'appendix',
            },
          ],
        },
      ],
      components: {
        Head: './src/overrides/Head.astro',
        Footer: './src/overrides/Footer.astro',
      },
      plugins: [
        starlightThemeNova({
          nav: [
            {
              label: {
                es: 'Comenzar',
                en: 'Get Started',
                ca: 'Començar',
              },
              href: {
                es: '/es/',
                en: '/en/',
                ca: '/ca/',
              },
            },
            {
              label: {
                es: 'Certificaciones',
                en: 'Certifications',
                ca: 'Certificacions',
              },
              href: {
                es: '/es/certification/',
                en: '/en/certification/',
                ca: '/ca/certification/',
              },
            },
            {
              label: {
                es: 'Recursos',
                en: 'Resources',
                ca: 'Recursos',
              },
              href: {
                es: '/es/resources/',
                en: '/en/resources/',
                ca: '/ca/resources/',
              },
            },
          ],
        }),
      ],
    }),
  ],
});
