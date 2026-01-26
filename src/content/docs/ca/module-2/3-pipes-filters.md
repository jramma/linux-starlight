---
title: 2.3 Canonades, Redireccions i Filtres
description: Desencadenant el poder de la Filosofia Unix.
sidebar:
  order: 3
---

La Filosofia Unix: **"Escriu programes que facin una cosa i la facin bé. Escriu programes per treballar junts."**

## Redirecció

Controla on va la sortida.

### Fluxos Estàndard
-   `stdin` (0): Entrada.
-   `stdout` (1): Sortida.
-   `stderr` (2): Errors.

### Operadors
-   `>`: Sobreescriure fitxer amb la sortida.
    ```bash
    echo "Hola" > file.txt
    ```
-   `>>`: Afegir sortida al final del fitxer.
    ```bash
    echo "Món" >> file.txt
    ```
-   `2>`: Redirigir només errors.
    ```bash
    ls /noexisteix 2> errors.log
    ```

## Canonades (`|`)

Agafa el `stdout` de la comanda de l'esquerra i passa-ho com a `stdin` a la comanda de la dreta.

```bash
comanda1 | comanda2 | comanda3
```

## Filtres

Comandes dissenyades per processar fluxos de text.

| Comanda | Funció | Exemple |
| :--- | :--- | :--- |
| `grep` | Buscar patrons | `cat log.txt | grep "Error"` |
| `ls | grep` | Llistar fitxers específics | `ls /etc | grep ".conf"` |
| `less` | Paginador (vista desplaçable) | `cat hugefile.txt | less` |
| `head` | Primeres 10 línies | `head -n 5 file.txt` |
| `tail` | Últimes 10 línies | `tail -f /var/log/syslog` (Seguir en viu!) |
| `sort` | Ordenar línies | `sort names.txt` |
| `uniq` | Eliminar duplicats adjacents | `sort names.txt | uniq` |
| `wc` | Recompte de Paraules | `wc -l` (Comptar línies) |

### Exemple del Món Real
Comptar quants processos en execució són propietat de "root":

```bash
ps aux | grep "^root" | wc -l
```
