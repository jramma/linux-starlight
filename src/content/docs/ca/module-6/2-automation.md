---
title: 6.2 Exemples d'Automatització
description: Tasques del món real automatitzades.
sidebar:
  order: 2
---

Els scripts brillen quan es fan tasques repetitives.

## Exemple: Script de Còpia de Seguretat

Un script per arxivar un directori i anomenar-lo amb la data d'avui.

```bash
#!/bin/bash

SOURCE="/home/user/projects"
DEST="/mnt/backup"
DATE=$(date +%Y-%m-%d)
FILENAME="projects_backup_$DATE.tar.gz"

echo "Iniciant còpia de seguretat de $SOURCE..."

# Crear arxiu tar
tar -czf "$DEST/$FILENAME" "$SOURCE"

# Comprovar si tar ha tingut èxit
if [ $? -eq 0 ]; then
    echo "Còpia de seguretat exitosa: $FILENAME"
else
    echo "Còpia de seguretat FALLIDA."
fi
```

## Automatització amb Cron

Combina el teu script amb cron (Mòdul 3) per estrictament "configurar i oblidar" (però comprova els teus registres!).
