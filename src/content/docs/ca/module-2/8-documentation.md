---
title: 2.8 Documentació del Sistema
description: Com trobar ajuda sense sortir del terminal.
sidebar:
  order: 8
---

import { Aside } from '@astrojs/starlight/components';

Linux s'autodocumenta. Aprendre a llegir el manual és més important que memoritzar cada opció.

## Trobant Ajuda

### `man` (Pàgines de Manual)
La referència definitiva.

-   **Sintaxi**: `man [comanda]`
-   **Exemple**: `man ls`
-   **Navegació**:
    -   `Espai`: Següent pàgina.
    -   `b`: Pàgina anterior.
    -   `/patró`: Cercar.
    -   `q`: Sortir (Quit).

### `--help`
La majoria de comandes suporten una opció `--help` per a un resum ràpid.

-   **Exemple**: `ls --help`

### `info`
El sistema de documentació detallada del projecte GNU (sovint més complet que les pàgines man per a eines GNU).

-   **Exemple**: `info coreutils`

### `/usr/share/doc/`
Directori que conté documentació addicional, fitxers LLEGIU-ME (README) i exemples de configuració per a paquets instal·lats.

## Cercant als Manuals

Si no saps el nom de la comanda, cerca a les descripcions de les pàgines de manual.

-   **Comanda**: `man -k [paraula_clau]` (El mateix que `apropos`)
-   **Exemple**: `man -k "partition"` (Llista comandes relacionades amb particionat)
