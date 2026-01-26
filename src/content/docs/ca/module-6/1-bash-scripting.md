---
title: 6.1 Conceptes Bàsics de Scripting Bash
description: Escriure els teus primers scripts.
sidebar:
  order: 1
---

Un script és només un fitxer de text amb una llista d'ordres.

## El Shebang (`#!`)
La primera línia diu a Linux quin intèrpret utilitzar.
```bash
#!/bin/bash
```

## Primer Script (Variables)

Crea `hello.sh`:
```bash
#!/bin/bash

# Definir una variable (Sense espais en l'assignació!)
NOM="Món"

# Imprimir-ho utilitzant $
echo "Hola, $NOM"
```
Fes-lo executable: `chmod +x hello.sh`. Executa'l: `./hello.sh`.

## Flux de Control

### Sentència If
```bash
if [ -f "/etc/passwd" ]; then
    echo "El sistema de fitxers està sà."
else
    echo "Alguna cosa va molt malament."
fi
```

### Bucle For
```bash
for i in {1..5}; do
    echo "Compte: $i"
done
```

## Codis de Sortida
Cada ordre retorna un estat.
-   `0`: Èxit.
-   Diferent de zero: Error.
Ho comproves amb `$?`.
