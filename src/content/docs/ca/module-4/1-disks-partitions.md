---
title: 4.1 Discos i Particions
description: Preparació de dispositius d'emmagatzematge en brut.
sidebar:
  order: 2
---

## Identificació de Dispositius

A Linux, tot és un fitxer. Els dispositius viuen a `/dev`.
-   **SATA/SCSI**: `/dev/sda`, `/dev/sdb`...
-   **NVMe**: `/dev/nvme0n1`, `/dev/nvme0n2`...
-   **Virtual (VirtIO)**: `/dev/vda`...

Per veure què tens connectat:
```bash
lsblk
```

## Eines de Particionament

Prenem un disc en brut (p. ex., `/dev/sdb`) i el dividim en particions (p. ex., `/dev/sdb1`).

### fdisk
Eina tradicional que treballa amb MBR (i GPT bàsic).
```bash
sudo fdisk /dev/sdb
# Ordres al menú: 'n' (nou), 'p' (imprimir), 'w' (escriure), 'd' (eliminar)
```

### gdisk
Eina moderna dissenyada específicament per a GPT (Taula de Particions GUID).
```bash
sudo gdisk /dev/sdb
# Ordres de menú similars a fdisk
```

### parted
Eina de línia d'ordres programable.
```bash
sudo parted /dev/sdb mklabel gpt
sudo parted /dev/sdb mkpart primary 0% 100%
```
