import type { StarlightUserConfig } from '@astrojs/starlight/types';

/**
 * Sidebar del curso Linux Starlight.
 *
 * El directorio en autogenerate es relativo a src/content/docs/
 * (sin prefijo de idioma — Starlight lo gestiona automáticamente).
 */
export const sidebar = [
	// Guía de Linux — módulos del curso
	{
		label: 'Módulos',
		translations: {
			ca: 'Mòduls',
			en: 'Modules',
			es: 'Módulos',
		},
		collapsed: false,
		items: [
			{
				label: 'Módulo 1: Unix/Linux',
				translations: {
					ca: 'Mòdul 1: Unix/Linux',
					en: 'Module 1: Unix/Linux',
					es: 'Módulo 1: Unix/Linux',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-1' } }],
			},
			{
				label: 'Módulo 2: FileSystem',
				translations: {
					ca: 'Mòdul 2: FileSystem',
					en: 'Module 2: FileSystem',
					es: 'Módulo 2: FileSystem',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-2' } }],
			},
			{
				label: 'Módulo 3: Procesos',
				translations: {
					ca: 'Mòdul 3: Processos',
					en: 'Module 3: Processes',
					es: 'Módulo 3: Procesos',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-3' } }],
			},
			{
				label: 'Módulo 4: Shell',
				translations: {
					ca: 'Mòdul 4: Shell',
					en: 'Module 4: Shell',
					es: 'Módulo 4: Shell',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-4' } }],
			},
			{
				label: 'Módulo 5: Redes',
				translations: {
					ca: 'Mòdul 5: Xarxes',
					en: 'Module 5: Networking',
					es: 'Módulo 5: Redes',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-5' } }],
			},
			{
				label: 'Módulo 6: Software y Tiempo',
				translations: {
					ca: 'Mòdul 6: Software i Temps',
					en: 'Module 6: Software & Time',
					es: 'Módulo 6: Software y Tiempo',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-6' } }],
			},
			{
				label: 'Módulo 7: Scripting',
				translations: {
					ca: 'Mòdul 7: Scripting',
					en: 'Module 7: Scripting',
					es: 'Módulo 7: Scripting',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-7' } }],
			},
			{
				label: 'Módulo 8: Seguridad',
				translations: {
					ca: 'Mòdul 8: Seguretat',
					en: 'Module 8: Security',
					es: 'Módulo 8: Seguridad',
				},
				collapsed: true,
				items: [{ autogenerate: { directory: 'modules/module-8' } }],
			},
		],
	},

	// Ejercicios prácticos por módulo
	{
		label: 'Ejercicios Prácticos',
		translations: {
			ca: 'Exercicis Pràctics',
			en: 'Practical Exercises',
			es: 'Ejercicios Prácticos',
		},
		collapsed: true,
		items: [{ autogenerate: { directory: 'exercises' } }],
	},

	// Guías de instalación de Linux
	{
		label: 'Instalar Linux',
		translations: {
			ca: 'Instal·lar Linux',
			en: 'Install Linux',
			es: 'Instalar Linux',
		},
		collapsed: true,
		items: [{ autogenerate: { directory: 'install' } }],
	},

	// Recursos, certificaciones y apéndice
	{
		label: 'Información Adicional',
		translations: {
			ca: 'Informació Addicional',
			en: 'Additional Information',
			es: 'Información Adicional',
		},
		collapsed: true,
		items: [{ autogenerate: { directory: 'utils' } }],
	},
] satisfies StarlightUserConfig['sidebar'];