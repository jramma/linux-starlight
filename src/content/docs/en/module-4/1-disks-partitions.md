---
title: 4.1 Disks and Partitions
description: Preparing raw storage devices.
sidebar:
  order: 2
---

## Identifying Devices

In Linux, everything is a file. Devices live in `/dev`.
-   **SATA/SCSI**: `/dev/sda`, `/dev/sdb`...
-   **NVMe**: `/dev/nvme0n1`, `/dev/nvme0n2`...
-   **Virtual (VirtIO)**: `/dev/vda`...

To see what you have attached:
```bash
lsblk
```

## Partitioning Tools

We take a raw disk (e.g., `/dev/sdb`) and slice it into partitions (e.g., `/dev/sdb1`).

### fdisk
Traditional tool working with MBR (and basic GPT).
```bash
sudo fdisk /dev/sdb
# Commands in menu: 'n' (new), 'p' (print), 'w' (write), 'd' (delete)
```

### gdisk
Modern tool designed specifically for GPT (GUID Partition Table).
```bash
sudo gdisk /dev/sdb
# Similar menu commands to fdisk
```

### parted
Scriptable command line tool.
```bash
sudo parted /dev/sdb mklabel gpt
sudo parted /dev/sdb mkpart primary 0% 100%
```
