---
title: 2.5 Control de Procesos
description: Gestionar lo que se está ejecutando en tu sistema.
sidebar:
  order: 5
---

Cada programa en ejecución es un **proceso** con un **PID** (ID de Proceso) único.

## Ver Procesos

-   `top`: Vista en tiempo real de los recursos del sistema (CPU/RAM) y procesos. Presiona `q` para salir.
-   `htop`: Una versión más bonita e interactiva de top (a menudo necesita instalación).
-   `ps`: Instantánea de los procesos actuales.
    -   `ps aux` (estilo BSD) o `ps -ef` (Estándar): Muestra TODOS los procesos.

## Matar Procesos

Creando un "zombie" o deteniendo un programa atascado.

-   `kill <PID>`: Envía SIGTERM (15). Pide amablemente que se detenga.
-   `kill -9 <PID>`: Envía SIGKILL (9). Fuerza la detención inmediatamente (se pueden perder datos).
-   `killall <nombre>`: Mata procesos por nombre en lugar de ID.

## Trabajos en Segundo Plano

Cuando ejecutas un comando, ocupa la terminal.

1.  **Segundo Plano (`&`)**:
    ```bash
    sleep 100 &
    ```
    Se ejecuta en segundo plano. La terminal queda libre.

2.  **Primer Plano (`fg`) a Segundo Plano (`bg`)**:
    -   Ejecuta un comando (ej., `top`).
    -   Presiona `Ctrl + Z` para **suspenderlo**.
    -   Escribe `bg` para reanudarlo en segundo plano.
    -   Escribe `fg` para traerlo de vuelta al primer plano.

3.  **Trabajos (Jobs)**:
    -   Escribe `jobs` para listar trabajos en segundo plano en la sesión de terminal actual.
