---
title: 2.5 Control de Processos
description: Gestionar el que s'està executant al teu sistema.
sidebar:
  order: 5
---

Cada programa en execució és un **procés** amb un **PID** (ID de Procés) únic.

## Veure Processos

-   `top`: Vista en temps real dels recursos del sistema (CPU/RAM) i processos. Prem `q` per sortir.
-   `htop`: Una versió més bonica i interactiva de top (sovint necessita instal·lació).
-   `ps`: Instantània dels processos actuals.
    -   `ps aux` (estil BSD) o `ps -ef` (Estàndard): Mostra TOTS els processos.

## Matar Processos

Creant un "zombi" o aturant un programa encallat.

-   `kill <PID>`: Envia SIGTERM (15). Demana amablement que s'aturi.
-   `kill -9 <PID>`: Envia SIGKILL (9). Força l'aturada immediatament (es poden perdre dades).
-   `killall <nom>`: Mata processos per nom en lloc d'ID.

## Treballs en Segon Pla

Quan executes una comanda, ocupa el terminal.

1.  **Segon Pla (`&`)**:
    ```bash
    sleep 100 &
    ```
    S'executa en segon pla. El terminal queda lliure.

2.  **Primer Pla (`fg`) a Segon Pla (`bg`)**:
    -   Executa una comanda (ex., `top`).
    -   Prem `Ctrl + Z` per **suspendre-la**.
    -   Escriu `bg` per reprendre-la en segon pla.
    -   Escriu `fg` per tornar-la al primer pla.

3.  **Treballs (Jobs)**:
    -   Escriu `jobs` per llistar treballs en segon pla a la sessió de terminal actual.
