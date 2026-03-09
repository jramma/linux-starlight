---
title: Crear un USB Booteable
description: Aprende a crear un USB de arranque con una distribución Linux desde Windows o Linux, usando Rufus, Balena Etcher o dd.
sidebar:
  order: 1
---

Un **USB booteable** (o de arranque) es el primer paso para instalar Linux en cualquier equipo. Contiene la imagen ISO del sistema operativo y permite arrancar el ordenador desde él para iniciar la instalación.

## ¿Qué necesitas?

- Un pendrive de al menos **4 GB** (8 GB recomendado)
- La **imagen ISO** de tu distribución Linux favorita (Ubuntu, Debian, Fedora, etc.)
- Una herramienta de grabación

> **⚠ Advertencia:** El proceso borrará todos los datos del pendrive. Haz una copia de seguridad antes de continuar.

---

## Opción 1 — Rufus (Windows)

[Rufus](https://rufus.ie) es la herramienta más popular en Windows para crear USB booteables. Es gratuita, portable y muy sencilla de usar.

### Pasos

1. Descarga Rufus desde [rufus.ie](https://rufus.ie) e inícialo (no requiere instalación).
2. Conecta tu pendrive. Rufus lo detectará automáticamente en **Dispositivo**.
3. Haz clic en **Seleccionar** y elige la ISO de Linux que descargaste.
4. Configuración recomendada:
   - **Esquema de partición:** GPT (para equipos modernos con UEFI) o MBR (para equipos antiguos con BIOS)
   - **Sistema de destino:** UEFI (no CSM) si tu equipo es moderno
   - **Sistema de archivos:** FAT32
5. Haz clic en **Empezar**. Si Rufus pregunta por el modo de escritura, elige **Escribir en modo imagen ISO (recomendado)**.
6. Confirma el borrado del pendrive y espera a que finalice.

```
Dispositivo:        [Tu pendrive]      ← Selecciona el pendrive correcto
Tipo de arranque:   [Imagen de disco o ISO]
Selección de arranque: ubuntu-24.04-desktop-amd64.iso
Esquema de partición: GPT
Sistema de destino: UEFI (no CSM)
Sistema de archivos: FAT32
```

✅ Cuando la barra llegue al 100% y aparezca **LISTO**, el USB está preparado.

---

## Opción 2 — Balena Etcher (Windows, macOS y Linux)

[Balena Etcher](https://etcher.balena.io) es una herramienta multiplataforma con interfaz gráfica muy intuitiva. Ideal si buscas simpleza.

### Pasos

1. Descarga Etcher desde [etcher.balena.io](https://etcher.balena.io) e instálalo.
2. Abre Etcher. Verás tres botones:
   - **Flash from file** → Selecciona la ISO de Linux.
   - **Select target** → Elige el pendrive.
   - **Flash!** → Inicia el proceso.
3. Etcher verificará automáticamente la imagen al terminar.

> Etcher valida la escritura por defecto, por lo que es muy fiable aunque algo más lento que Rufus.

---

## Opción 3 — Comando `dd` (Linux / macOS)

Si ya usas Linux o macOS, puedes crear el USB desde la terminal con el comando `dd`. Es el método más rápido y directo, aunque sin interfaz gráfica.

### Pasos

1. Identifica el dispositivo del pendrive (sin montar):
   ```bash
   lsblk
   ```
   Busca tu pendrive en la lista (p. ej., `/dev/sdb`). **No uses la partición** (`/dev/sdb1`), sino el disco completo (`/dev/sdb`).

2. Escribe la ISO en el pendrive:
   ```bash
   sudo dd if=/ruta/a/ubuntu.iso of=/dev/sdb bs=4M status=progress oflag=sync
   ```
   - `if=` → Ruta al archivo ISO
   - `of=` → Dispositivo del pendrive (`/dev/sdb`)
   - `bs=4M` → Tamaño del bloque (mejora la velocidad)
   - `status=progress` → Muestra el progreso en tiempo real

3. Espera a que el comando finalice. El prompt volverá cuando esté listo.

> **⚠ Precaución:** Asegúrate de apuntar al pendrive correcto. `dd` sobreescribirá sin pedir confirmación.

---

## Arrancar desde el USB

Una vez creado el USB:

1. Reinicia el ordenador con el pendrive conectado.
2. Entra en la **BIOS/UEFI** (normalmente pulsando `F2`, `F10`, `F12` o `Supr` durante el arranque, según el fabricante).
3. Cambia el **orden de arranque** para que el USB esté primero, o usa el **menú de arranque rápido**.
4. Guarda y reinicia. El sistema arrancará desde el USB con el instalador de Linux.

---

## Comparativa de herramientas

| Herramienta | Sistema | Interfaz | Velocidad | Verificación |
|-------------|---------|----------|-----------|--------------|
| Rufus | Windows | Gráfica | ⚡ Rápida | Opcional |
| Balena Etcher | Win/Mac/Linux | Gráfica | 🐢 Media | Automática |
| `dd` | Linux/macOS | Terminal | ⚡ Rápida | Manual |

---

## Próximo paso

Con el USB listo, puedes continuar con cualquiera de estas opciones de instalación:

- [Instalación en Dual Boot con Windows](./certification) — Mantén Windows y Linux en el mismo disco
- [Instalación Limpia](./resources) — Reemplaza completamente el sistema operativo
- [Instalación en Máquina Virtual](./virtual-machine) — Sin riesgo, dentro de Windows
