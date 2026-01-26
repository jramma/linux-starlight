---
title: 2.2 Edición de Texto con Vim
description: El editor de texto de terminal esencial (e infame).
sidebar:
  order: 2
---

¿Por qué **Vim**? Está instalado en casi todos los sistemas tipo Unix por defecto. En una shell de rescate, puede que no tengas `nano` o `code`, pero tendrás `vi` o `vim`.

## Los Modos

Vim es "modal". Las teclas hacen cosas diferentes dependiendo del modo.

1.  **Modo Normal**: El por defecto. Las teclas son comandos (navegación, copiar/pegar). Presiona `Esc` para volver aquí.
2.  **Modo Inserción**: Para escribir texto. Presiona `i` para entrar.
3.  **Modo Comando (Ex)**: Para guardar/salir. Presiona `:` para entrar.

## Hoja de Trucos

### 1. Abrir y Salir
-   `vim file.txt`: Abrir archivo.
-   `:w`: **Write** (Guardar).
-   `:q`: **Quit** (Salir).
-   `:wq`: Guardar y Salir.
-   `:q!`: Salir **sin** guardar (descartar cambios).

### 2. Edición Básica
-   `i`: Cambiar a Modo Inserción (empezar a escribir).
-   `Esc`: Volver a Modo Normal.

### 3. Navegación (Modo Normal)
-   `h` `j` `k` `l`: Izquierda, Abajo, Arriba, Derecha (las flechas también funcionan).
-   `gg`: Ir al inicio del archivo.
-   `G`: Ir al final del archivo.
-   `/patrón`: Buscar "patrón". (`n` para el siguiente).

### 4. Acciones Directas (Modo Normal)
-   `dd`: Borrar (cortar) la línea actual.
-   `yy`: Yank (copiar) la línea actual.
-   `p`: Pegar abajo.
-   `u`: Deshacer.
-   `Ctrl + r`: Rehacer.

> [!NOTE]
> Si encuentras Vim demasiado difícil inicialmente, `nano` es una alternativa más simple y sin modos. Pero dominar los básicos de Vim es un superpoder.
