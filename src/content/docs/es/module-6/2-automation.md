---
title: 6.2 Ejemplos de Automatización
description: Tareas del mundo real automatizadas.
sidebar:
  order: 2
---

Los scripts brillan cuando se hacen tareas repetitivas.

## Ejemplo: Script de Copia de Seguridad

Un script para archivar un directorio y nombrarlo con la fecha de hoy.

```bash
#!/bin/bash

SOURCE="/home/user/projects"
DEST="/mnt/backup"
DATE=$(date +%Y-%m-%d)
FILENAME="projects_backup_$DATE.tar.gz"

echo "Iniciando copia de seguridad de $SOURCE..."

# Crear archivo tar
tar -czf "$DEST/$FILENAME" "$SOURCE"

# Comprobar si tar ha tenido éxito
if [ $? -eq 0 ]; then
    echo "Copia de seguridad exitosa: $FILENAME"
else
    echo "Copia de seguridad FALLIDA."
fi
```

## Automatización con Cron

Combina tu script con cron (Módulo 3) para estrictamente "configurar y olvidar" (¡pero comprueba tus registros!).
