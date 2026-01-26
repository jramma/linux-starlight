---
title: 6.1 Conceptos Básicos de Scripting Bash
description: Escribir tus primeros scripts.
sidebar:
  order: 1
---

Un script es solo un archivo de texto con una lista de comandos.

## El Shebang (`#!`)
La primera línea dice a Linux qué intérprete utilizar.
```bash
#!/bin/bash
```

## Primer Script (Variables)

Crea `hello.sh`:
```bash
#!/bin/bash

# Definir una variable (¡Sin espacios en la asignación!)
NOMBRE="Mundo"

# Imprimirlo usando $
echo "Hola, $NOMBRE"
```
Hazlo ejecutable: `chmod +x hello.sh`. Ejecútalo: `./hello.sh`.

## Flujo de Control

### Sentencia If
```bash
if [ -f "/etc/passwd" ]; then
    echo "El sistema de archivos está sano."
else
    echo "Algo va muy mal."
fi
```

### Bucle For
```bash
for i in {1..5}; do
    echo "Cuenta: $i"
done
```

## Códigos de Salida
Cada comando devuelve un estado.
-   `0`: Éxito.
-   Diferente de cero: Error.
Lo compruebas con `$?`.
