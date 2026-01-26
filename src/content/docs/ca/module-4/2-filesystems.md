---
title: 4.2 Sistemes de Fitxers
description: Formatació i Muntatge.
sidebar:
  order: 3
---

Una partició necessita una estructura de sistema de fitxers per emmagatzemar dades.

## Creació de Sistemes de Fitxers (Formatació)

La família d'ordres `mkfs` (Make FileSystem).

### ext4
El predeterminat per a Ubuntu/Debian. Robust i estable.
```bash
sudo mkfs.ext4 /dev/sdb1
```

### XFS
El predeterminat per a RHEL/Rocky. Excel·lent rendiment per a fitxers grans i operacions paral·leles.
```bash
sudo mkfs.xfs /dev/sdb1
```

## Muntatge

Per utilitzar un sistema de fitxers, ha d'estar adjunt a l'arbre de directoris en un "punt de muntatge".

```bash
# 1. Crear un punt de muntatge (només una carpeta buida)
sudo mkdir /mnt/data

# 2. Muntar la partició
sudo mount /dev/sdb1 /mnt/data

# 3. Verificar
df -h
```

## Desmuntatge

**Important**: No pots desmuntar un sistema de fitxers si algun usuari (inclòs tu) està actualment "dins" d'ell o utilitzant un fitxer en ell.

```bash
# Surt del directori primer!
cd ~
sudo umount /mnt/data
```
