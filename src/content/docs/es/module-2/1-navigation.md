---
title: 2.1 Navegación y Gestión de Archivos
description: Cómo moverse y manipular archivos en la terminal.
sidebar:
  order: 1
---

## Jerarquía

Recuerda que todo comienza en `/`.

### Conceptos de PATH
-   **Ruta Absoluta**: Comienza con `/`. Siempre funciona, no importa dónde estés. (ej., `/home/user/docs/file.txt`).
-   **Ruta Relativa**: *No* comienza con `/`. Depende de tu ubicación actual. (ej., `docs/file.txt` o `../file.txt`).

## Comandos de Navegación

| Comando | Nombre | Función |
| :--- | :--- | :--- |
| `pwd` | Print Working Directory | Te dice dónde estás ahora mismo. |
| `cd` | Change Directory | Te mueve a una nueva carpeta. |
| `cd ..` | | Mueve un nivel arriba. |
| `cd ~` | | Mueve a tu directorio personal (home). |
| `ls` | List | Muestra los archivos en el directorio actual. |

### Banderas de `ls`
Raramente ejecutas solo `ls`. Banderas comunes:
-   `ls -l`: Listado **Largo** (permisos, propietario, tamaño, fecha).
-   `ls -a`: **Todos** los archivos (muestra archivos ocultos que empiezan con `.`).
-   `ls -lh`: Listado largo con tamaños **legibles por humanos** (MB, GB).

## Gestión de Archivos

| Comando | Función | Ejemplo |
| :--- | :--- | :--- |
| `mkdir` | Make Directory | `mkdir projects` |
| `touch` | Crear archivo vacío | `touch notes.txt` |
| `cp` | Copy | `cp notes.txt backup.txt` |
| `cp -r` | Copy Recursive (Carpeta) | `cp -r projects/ projects-backup/` |
| `mv` | Move (o Rename) | `mv notes.txt doc.txt` |
| `rm` | Remove (Delete) | `rm file.txt` |

> [!CAUTION]
> **`rm -rf /`**: El `rm -r` (recursivo) combinado con `-f` (forzar) es peligroso. Borra carpetas y su contenido sin preguntar. Siempre revisa tu ruta antes de presionar Enter.
