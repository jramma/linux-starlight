---
title: 2.1 Navegació i Gestió de Fitxers
description: Com moure's i manipular fitxers al terminal.
sidebar:
  order: 1
---

## Jerarquia

Recorda que tot comença a `/`.

### Conceptes de PATH
-   **Camí Absolut**: Comença amb `/`. Sempre funciona, no importa on siguis. (ex., `/home/user/docs/file.txt`).
-   **Camí Relatiu**: *No* comença amb `/`. Depèn de la teva ubicació actual. (ex., `docs/file.txt` o `../file.txt`).

## Comandes de Navegació

| Comanda | Nom | Funció |
| :--- | :--- | :--- |
| `pwd` | Print Working Directory | Et diu on ets ara mateix. |
| `cd` | Change Directory | Et mou a una nova carpeta. |
| `cd ..` | | Mou un nivell amunt. |
| `cd ~` | | Mou al teu directori personal (home). |
| `ls` | List | Mostra els fitxers al directori actual. |

### Banderes de `ls`
Rarament executes només `ls`. Banderes comunes:
-   `ls -l`: Llistat **Llarg** (permisos, propietari, mida, data).
-   `ls -a`: **Tots** els fitxers (mostra fitxers ocults que comencen amb `.`).
-   `ls -lh`: Llistat llarg amb mides **llegibles per humans** (MB, GB).

## Gestió de Fitxers

| Comanda | Funció | Exemple |
| :--- | :--- | :--- |
| `mkdir` | Make Directory | `mkdir projects` |
| `touch` | Crear fitxer buit | `touch notes.txt` |
| `cp` | Copy | `cp notes.txt backup.txt` |
| `cp -r` | Copy Recursive (Carpeta) | `cp -r projects/ projects-backup/` |
| `mv` | Move (o Rename) | `mv notes.txt doc.txt` |
| `rm` | Remove (Delete) | `rm file.txt` |

> [!CAUTION]
> **`rm -rf /`**: El `rm -r` (recursiu) combinat amb `-f` (forçar) és perillós. Esborra carpetes i el seu contingut sense preguntar. Sempre revisa el teu camí abans de prémer Enter.
