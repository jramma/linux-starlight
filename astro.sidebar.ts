import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/**
 * Sidebar del curso Linux Starlight.
 *
 * Usa el helper group() que lee los labels y traducciones
 * de los archivos en src/content/nav/*.ts
 *
 * El directorio en autogenerate es relativo a src/content/docs/
 * (sin prefijo de idioma — Starlight lo gestiona automáticamente).
 */
export const sidebar = [
	// Guía de Linux — módulos del curso
	group('modules', {
		items: [
			group('modules.m1', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-1' },
			}),
			group('modules.m2', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-2' },
			}),
			group('modules.m3', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-3' },
			}),
			group('modules.m4', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-4' },
			}),
			group('modules.m5', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-5' },
			}),
			group('modules.m6', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-6' },
			}),
			group('modules.m7', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-7' },
			}),
			group('modules.m8', {
				collapsed: true,
				autogenerate: { directory: 'modules/module-8' },
			}),
		],
	}),

	// Ejercicios prácticos por módulo
	group('exercises', {
		collapsed: true,
		autogenerate: { directory: 'exercises' },
	}),

	// Guías de instalación de Linux
	group('install', {
		collapsed: true,
		autogenerate: { directory: 'install' },
	}),

	// Recursos, certificaciones y apéndice
	group('utils', {
		collapsed: true,
		autogenerate: { directory: 'utils' },
	}),
] satisfies StarlightUserConfig['sidebar'];
