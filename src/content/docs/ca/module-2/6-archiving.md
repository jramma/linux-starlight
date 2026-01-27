---
title: 2.6 Arxivat i Compressió
description: Empaquetant i reduint fitxers.
sidebar:
  order: 6
---

import { Aside } from '@astrojs/starlight/components';

A Linux, "arxivar" (empaquetar molts fitxers en un) i "comprimir" (fer els fitxers més petits) són sovint dos passos separats, tot i que les eines modernes els combinen.

## Arxivat amb `tar`

`tar` (Tape ARchive) és l'eina estàndard per empaquetar fitxers.

- **Crear** un arxiu (`-c`):
    ```bash
    tar -cvf arxiu.tar fitxer1 fitxer2 dir/
    ```
    *(Opcions: **c**reate (crear), **v**erbose (detallat), **f**ile (fitxer))*

- **Extreure** un arxiu (`-x`):
    ```bash
    tar -xvf arxiu.tar
    ```
    *(Opcions: e**x**tract (extreure))*

- **Llistar** contingut (`-t`):
    ```bash
    tar -tvf arxiu.tar
    ```

## Eines de Compressió

Linux suporta múltiples formats de compressió. `gzip` és el més comú, mentre que `xz` ofereix millor compressió a costa de velocitat.

| Eina | Extensió | Comprimir | Descomprimir |
| :--- | :--- | :--- | :--- |
| `gzip` | `.gz` | `gzip fitxer` | `gunzip fitxer.gz` |
| `bzip2` | `.bz2` | `bzip2 fitxer` | `bunzip2 fitxer.bz2` |
| `xz` | `.xz` | `xz fitxer` | `unxz fitxer.xz` |
| `zip` | `.zip` | `zip -r arch.zip dir` | `unzip arch.zip` |

## Combinant amb `tar`

Normalment no comprimeixes fitxers diferents per separat; comprimeixes un "tarball" (arxiu tar).

- **gzip** (`-z`): `arxiu.tar.gz` o `.tgz`
    ```bash
    tar -czvf arxiu.tar.gz carpeta/
    tar -xzvf arxiu.tar.gz
    ```

- **bzip2** (`-j`): `arxiu.tar.bz2`
    ```bash
    tar -cjvf arxiu.tar.bz2 carpeta/
    ```

- **xz** (`-J`): `arxiu.tar.xz`
    ```bash
    tar -cJvf arxiu.tar.xz carpeta/
    ```

## Còpies de seguretat amb `rsync`

`rsync` és una eina poderosa per a sincronització i còpies de seguretat. Només copia els canvis.

```bash
# Sincronitzar continguts d'origen a destinació
# -a: mode arxiu (preserva permisos, temps, etc.)
# -v: verbose (detallat)
rsync -av origen/ destinacio/

# Sincronització remota (sobre SSH)
rsync -avz origen/ usuari@remot:/backup/DIR/
```
