---
title: 2.3 Tuberías, Redirecciones y Filtros
description: Desencadenando el poder de la Filosofía Unix.
sidebar:
  order: 3
---

La Filosofía Unix: **"Escribe programas que hagan una cosa y la hagan bien. Escribe programas para trabajar juntos."**

## Redirección

Controla a dónde va la salida.

### Flujos Estándar
-   `stdin` (0): Entrada.
-   `stdout` (1): Salida.
-   `stderr` (2): Errores.

### Operadores
-   `>`: Sobrescribir archivo con la salida.
    ```bash
    echo "Hola" > file.txt
    ```
-   `>>`: Añadir salida al final del archivo.
    ```bash
    echo "Mundo" >> file.txt
    ```
-   `2>`: Redirigir solo errores.
    ```bash
    ls /noexiste 2> errors.log
    ```

## Tuberías (`|`)

Toma el `stdout` del comando de la izquierda y pásalo como `stdin` al comando de la derecha.

```bash
comando1 | comando2 | comando3
```

## Filtros

Comandos diseñados para procesar flujos de texto.

| Comando | Función | Ejemplo |
| :--- | :--- | :--- |
| `grep` | Buscar patrones | `cat log.txt | grep "Error"` |
| `ls | grep` | Listar archivos específicos | `ls /etc | grep ".conf"` |
| `less` | Paginador (vista desplazable) | `cat hugefile.txt | less` |
| `head` | Primeras 10 líneas | `head -n 5 file.txt` |
| `tail` | Últimas 10 líneas | `tail -f /var/log/syslog` (¡Seguir en vivo!) |
| `sort` | Ordenar líneas | `sort names.txt` |
| `uniq` | Eliminar duplicados adyacentes | `sort names.txt | uniq` |
| `wc` | Recuento de Palabras | `wc -l` (Contar líneas) |

### Ejemplo del Mundo Real
Contar cuántos procesos en ejecución son propiedad de "root":

```bash
ps aux | grep "^root" | wc -l
```
