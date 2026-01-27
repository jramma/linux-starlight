---
title: 2.6 Archivado y Compresión
description: Empaquetando y reduciendo archivos.
sidebar:
  order: 6
---

import { Aside } from '@astrojs/starlight/components';

En Linux, "archivar" (empaquetar muchos archivos en uno) y "comprimir" (hacer los archivos más pequeños) son a menudo dos pasos separados, aunque las herramientas modernas los combinan.

## Archivado con `tar`

`tar` (Tape ARchive) es la herramienta estándar para empaquetar archivos.

- **Crear** un archivo (`-c`):
    ```bash
    tar -cvf archivo.tar archivo1 archivo2 dir/
    ```
    *(Opciones: **c**reate (crear), **v**erbose (verborrea/detallado), **f**ile (archivo))*

- **Extraer** un archivo (`-x`):
    ```bash
    tar -xvf archivo.tar
    ```
    *(Opciones: e**x**tract (extraer))*

- **Listar** contenido (`-t`):
    ```bash
    tar -tvf archivo.tar
    ```

## Herramientas de Compresión

Linux soporta múltiples formatos de compresión. `gzip` es el más común, mientras que `xz` ofrece mejor compresión a costa de velocidad.

| Herramienta | Extensión | Comprimir | Descomprimir |
| :--- | :--- | :--- | :--- |
| `gzip` | `.gz` | `gzip archivo` | `gunzip archivo.gz` |
| `bzip2` | `.bz2` | `bzip2 archivo` | `bunzip2 archivo.bz2` |
| `xz` | `.xz` | `xz archivo` | `unxz archivo.xz` |
| `zip` | `.zip` | `zip -r arch.zip dir` | `unzip arch.zip` |

## Combinando con `tar`

Usualmente no comprimes archivos distintos por separado; comprimes un "tarball" (archivo tar).

- **gzip** (`-z`): `archivo.tar.gz` o `.tgz`
    ```bash
    tar -czvf archivo.tar.gz carpeta/
    tar -xzvf archivo.tar.gz
    ```

- **bzip2** (`-j`): `archivo.tar.bz2`
    ```bash
    tar -cjvf archivo.tar.bz2 carpeta/
    ```

- **xz** (`-J`): `archivo.tar.xz`
    ```bash
    tar -cJvf archivo.tar.xz carpeta/
    ```

## Copias de seguridad con `rsync`

`rsync` es una herramienta poderosa para sincronización y copias de seguridad. Solo copia los cambios.

```bash
# Sincronizar contenidos de origen a destino
# -a: modo archivo (preserva permisos, tiempos, etc.)
# -v: verbose (detallado)
rsync -av origen/ destino/

# Sincronización remota (sobre SSH)
rsync -avz origen/ usuario@remoto:/backup/DIR/
```
