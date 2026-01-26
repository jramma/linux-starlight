---
title: 2.4 Gestión de Permisos
description: Comprender la propiedad y los modos en Linux.
sidebar:
  order: 4
---

En Linux, cada archivo y directorio es propiedad de un **Usuario** y un **Grupo**, y tiene permisos para **Usuario (u)**, **Grupo (g)**, y **Otros (o)**.

## Ver Permisos

Ejecuta `ls -l`:

```bash
-rwxr-xr--  1 alice developers  2048 Jan 01 12:00 script.sh
```

-   `-`: Tipo de archivo (`-` = archivo, `d` = directorio).
-   `rwx`: Permisos de Usuario (Lectura, Escritura, Ejecución).
-   `r-x`: Permisos de Grupo (Lectura, sin Escritura, Ejecución).
-   `r--`: Permisos de Otros (Solo Lectura).
-   `alice`: Propietario.
-   `developers`: Grupo Propietario.

## Cambiar Permisos (`chmod`)

### Modo Simbólico
Fácil de leer.
-   `chmod u+x script.sh`: Añade e**x**ecución para **u**suario.
-   `chmod g-w file.txt`: Quita escritura (**w**) para **g**rupo.
-   `chmod o=r file.txt`: Establece **o**tros a solo lectura (**r**).

### Modo Octal
Atajo profesional.
-   Lectura (r) = 4
-   Escritura (w) = 2
-   Ejecución (x) = 1

Patrones comunes:
-   **755** (`rwxr-xr-x`): Estándar para scripts/programas. Usuario completo, otros lectura/exec.
-   **644** (`rw-r--r--`): Estándar para archivos de datos.
-   **600** (`rw-------`): Seguro (claves SSH). Solo el propietario puede leer/escribir.
-   **777**: Todo el mundo puede hacer todo. **¡Evita esto!**

## Cambiar Propiedad (`chown`)

Solo `root` puede cambiar la propiedad de los archivos.

```bash
# Cambiar propietario a bob
sudo chown bob file.txt

# Cambiar propietario a bob y grupo a staff
sudo chown bob:staff file.txt

# Recursivo (carpeta)
sudo chown -R bob:staff /var/www/html
```
