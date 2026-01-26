---
title: 4.2 Sistemas de Archivos
description: Formateo y Montaje.
sidebar:
  order: 3
---

Una partición necesita una estructura de sistema de archivos para almacenar datos.

## Creación de Sistemas de Archivos (Formateo)

La familia de comandos `mkfs` (Make FileSystem).

### ext4
El predeterminado para Ubuntu/Debian. Robusto y estable.
```bash
sudo mkfs.ext4 /dev/sdb1
```

### XFS
El predeterminado para RHEL/Rocky. Excelente rendimiento para archivos grandes y operaciones paralelas.
```bash
sudo mkfs.xfs /dev/sdb1
```

## Montaje

Para utilizar un sistema de archivos, debe estar adjunto al árbol de directorios en un "punto de montaje".

```bash
# 1. Crear un punto de montaje (solo una carpeta vacía)
sudo mkdir /mnt/data

# 2. Montar la partición
sudo mount /dev/sdb1 /mnt/data

# 3. Verificar
df -h
```

## Desmontaje

**Importante**: No puedes desmontar un sistema de archivos si algún usuario (incluido tú) está actualmente "dentro" de él o utilizando un archivo en él.

```bash
# ¡Sal del directorio primero!
cd ~
sudo umount /mnt/data
```
