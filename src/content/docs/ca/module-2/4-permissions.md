---
title: 2.4 Gestió de Permisos
description: Comprendre la propietat i els modes a Linux.
sidebar:
  order: 4
---

A Linux, cada fitxer i directori és propietat d'un **Usuari** i un **Grup**, i té permisos per a **Usuari (u)**, **Grup (g)**, i **Altres (o)**.

## Veure Permisos

Executa `ls -l`:

```bash
-rwxr-xr--  1 alice developers  2048 Jan 01 12:00 script.sh
```

-   `-`: Tipus de fitxer (`-` = fitxer, `d` = directori).
-   `rwx`: Permisos d'Usuari (Lectura, Escriptura, Execució).
-   `r-x`: Permisos de Grup (Lectura, sense Escriptura, Execució).
-   `r--`: Permisos d'Altres (Només Lectura).
-   `alice`: Propietari.
-   `developers`: Grup Propietari.

## Canviar Permisos (`chmod`)

### Mode Simbòlic
Fàcil de llegir.
-   `chmod u+x script.sh`: Afegeix e**x**ecució per a **u**suari.
-   `chmod g-w file.txt`: Treu escriptura (**w**) per a **g**rup.
-   `chmod o=r file.txt`: Estableix **o**thers a només lectura (**r**).

### Mode Octal
Drecera professional.
-   Lectura (r) = 4
-   Escriptura (w) = 2
-   Execució (x) = 1

Patrons comuns:
-   **755** (`rwxr-xr-x`): Estàndard per a scripts/programes. Usuari complet, altres lectura/exec.
-   **644** (`rw-r--r--`): Estàndard per a fitxers de dades.
-   **600** (`rw-------`): Segur (claus SSH). Només el propietari pot llegir/escriure.
-   **777**: Tothom pot fer tot. **Evita això!**

## Canviar Propietat (`chown`)

Només `root` pot canviar la propietat dels fitxers.

```bash
# Canviar propietari a bob
sudo chown bob file.txt

# Canviar propietari a bob i grup a staff
sudo chown bob:staff file.txt

# Recursiu (carpeta)
sudo chown -R bob:staff /var/www/html
```
