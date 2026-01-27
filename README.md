# 🐧 Linux Starlight

> Una guía completa de iniciación a Linux, construida con Astro y Starlight

![Astro](https://img.shields.io/badge/Astro-5.6.1-FF5D01?style=flat&logo=astro&logoColor=white)
![Starlight](https://img.shields.io/badge/Starlight-0.37.4-7C3AED?style=flat)
![License](https://img.shields.io/badge/license-Open%20Source-blue?style=flat)

**🌐 Sitio web:** [linux-starlight.netlify.app](https://linux-starlight.netlify.app/)

## 📖 Sobre el proyecto

**Linux Starlight** es una guía de iniciación a Linux diseñada para ayudar a usuarios principiantes y intermedios a dominar el sistema operativo. El proyecto está enfocado en proporcionar documentación clara, práctica y accesible en múltiples idiomas.

### 🎯 Objetivos

- Proporcionar una guía completa y accesible para aprender Linux
- Ofrecer contenido en español, inglés y catalán
- Facilitar el aprendizaje con ejemplos prácticos y documentación clara
- Crear una comunidad de contribuidores alrededor del aprendizaje de Linux

## 🚀 Tecnologías utilizadas

Este proyecto está construido con tecnologías modernas y potentes:

- **[Astro](https://astro.build/)** - Framework web ultrarrápido para crear sitios estáticos
- **[Starlight](https://starlight.astro.build/)** - Tema de documentación para Astro
- **[Starlight Theme Nova](https://starlight-theme-nova.pages.dev/)** - Tema personalizado con diseño moderno

## 📁 Estructura del proyecto

```text
linux-starlight/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes reutilizables de Astro
│   ├── content/
│   │   ├── docs/        # Documentación principal
│   │   │   ├── ca/      # Contenido en catalán
│   │   │   ├── en/      # Contenido en inglés
│   │   │   ├── es/      # Contenido en español
│   │   │   └── index.mdx
│   │   └── i18n/        # Traducciones de la interfaz
│   ├── overrides/       # Sobreescrituras de componentes de Starlight
│   │   ├── Head.astro   # Personalización del <head>
│   │   └── Footer.astro # Personalización del footer
│   └── styles/          # Estilos globales personalizados
├── public/              # Archivos públicos estáticos
├── astro.config.mjs     # Configuración de Astro y Starlight
├── package.json
└── README.md
```

### 🗂️ Detalles de la estructura

- **`src/content/docs/`**: Contiene toda la documentación en formato Markdown/MDX, organizada por idiomas
- **`src/overrides/`**: Componentes personalizados que sobrescriben los componentes por defecto de Starlight
- **`src/styles/`**: Estilos CSS personalizados para dar un toque único al sitio
- **`src/content/i18n/`**: Archivos de traducción para la interfaz del sitio

## 🌍 Idiomas disponibles

El sitio está disponible en tres idiomas:

- 🇪🇸 **Español** (idioma por defecto)
- 🇬🇧 **English**
- **Català**

## 🛠️ Desarrollo local

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm, pnpm o bun

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jramma/linux-starlight.git
   cd linux-starlight
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   bun install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   bun dev
   ```

4. Abre tu navegador en `http://localhost:4321`

### Comandos disponibles

| Comando           | Acción                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo    |
| `npm run build`   | Construye el sitio para producción  |
| `npm run preview` | Previsualiza la build de producción |

## 🤝 Contribuir

**¡Las contribuciones son bienvenidas!** Este proyecto está abierto a la comunidad y cualquiera puede contribuir para mejorar la documentación de Linux.

### ¿Cómo contribuir?

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Añade o modifica** contenido en `src/content/docs/`
4. **Asegúrate** de que el contenido esté en los tres idiomas (o al menos en español)
5. **Commit** tus cambios (`git commit -m 'Añadir nueva sección sobre comandos básicos'`)
6. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
7. **Abre un Pull Request**

### Pautas para contribuir

- Escribe en un lenguaje claro y accesible
- Añade ejemplos prácticos cuando sea posible
- Mantén la consistencia con el formato existente
- Si añades contenido nuevo, intenta traducirlo a los tres idiomas
- Revisa que no haya errores ortográficos

### Ideas para contribuir

- 📝 Añadir nuevas secciones o temas
- 🌐 Mejorar las traducciones existentes
- 🐛 Corregir errores o imprecisiones
- 💡 Sugerir mejoras en la documentación
- 🎨 Mejorar el diseño o la experiencia de usuario

## 📄 Licencia

Este proyecto es open source y está disponible para que cualquiera lo use, modifique y mejore.

## 👤 Autor

jramma

- Website: [jramma.com](https://jramma.com)
- GitHub: [@jramma](https://github.com/jramma)
