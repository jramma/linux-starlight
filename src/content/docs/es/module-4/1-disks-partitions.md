---
title: 4.1 Discos y Particiones
description: Preparación de dispositivos de almacenamiento en bruto.
sidebar:
  order: 2
---

## Identificación de Dispositivos

En Linux, todo es un archivo. Los dispositivos viven en `/dev`.
-   **SATA/SCSI**: `/dev/sda`, `/dev/sdb`...
-   **NVMe**: `/dev/nvme0n1`, `/dev/nvme0n2`...
-   **Virtual (VirtIO)**: `/dev/vda`...

Para ver qué tienes conectado:
```bash
lsblk
```

## Herramientas de Particionado

Tomamos un disco en bruto (p. ej., `/dev/sdb`) y lo dividimos en particiones (p. ej., `/dev/sdb1`).

### fdisk
Herramienta tradicional que trabaja con MBR (y GPT básico).
```bash
sudo fdisk /dev/sdb
# Comandos en el menú: 'n' (nuevo), 'p' (imprimir), 'w' (escribir), 'd' (eliminar)
```

### gdisk
Herramienta moderna diseñada específicamente para GPT (Tabla de Particiones GUID).
```bash
sudo gdisk /dev/sdb
# Comandos de menú similares a fdisk
```

### parted
Herramienta de línea de comandos programable.
```bash
sudo parted /dev/sdb mklabel gpt
sudo parted /dev/sdb mkpart primary 0% 100%
```
