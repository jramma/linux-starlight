---
title: 2.7 Enlaces
description: Enlaces duros y Enlaces simbólicos.
sidebar:
  order: 7
---

import { Aside } from '@astrojs/starlight/components';

Los enlaces te permiten tener múltiples referencias a un solo archivo.

## Inodos

Cada archivo en un sistema de archivos es identificado por un **inodo** (nodo índice), que almacena metadatos (permisos, propietario, tamaño, ubicación en disco) pero **no el nombre del archivo**. Los directorios mapean nombres de archivo a inodos.

## Tipos de Enlaces

### 1. Enlaces Duros (Hard Links)
Un enlace duro es solo otro nombre para el archivo existente. Ambos nombres apuntan al **mismo inodo**.

-   **Propiedades**:
    -   Deben estar en el **mismo sistema de archivos**.
    -   No pueden enlazar a directorios.
    -   Borrar el nombre original **no** borra los datos (mientras quede al menos un enlace).

-   **Comando**:
    ```bash
    ln archivo_destino nombre_enlace
    ```

### 2. Enlaces Simbólicos (Soft Links)
Un enlace simbólico es un archivo especial que apunta a la **ruta** de otro archivo. Es como un acceso directo en Windows.

-   **Propiedades**:
    -   Pueden cruzar distintos sistemas de archivos.
    -   Pueden enlazar a directorios.
    -   Si el original se borra, el enlace se rompe (**broken link**).

-   **Comando**:
    ```bash
    ln -s archivo_destino nombre_enlace
    ```

<Aside type="tip">
Siempre usa rutas absolutas cuando crees enlaces simbólicos para evitar problemas si mueves el enlace más tarde.
</Aside>

## Ejemplos

```bash
# Crear un archivo ficticio
touch original.txt

# Crear un enlace duro
ln original.txt duro.txt

# Crear un enlace suave (simbólico)
ln -s original.txt suave.txt

# Ver inodos (primera columna)
ls -li
```
