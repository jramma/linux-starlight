---
title: Module 4. Storage and File Systems
description: Managing disks, partitions, and file systems.
sidebar:
  order: 4
---

**Duration**: 4 hours

This module covers how Linux interacts with storage devices, from physical disks to mounted file systems.

## Topics Covered

### 1. Block Devices and Partitions
- Identifying devices (`/dev/sda`, `/dev/nvme0n1`).
- Partitioning tools: `fdisk` (MBR) and `gdisk` (GPT).

### 2. File Systems
- Creating file systems (formatting): `mkfs.ext4`, `mkfs.xfs`.
- Mounting file systems manually: `mount`.

### 3. Logical Volume Management (LVM)
Flexible storage management.
- Physical Volumes (PV) -> Volume Groups (VG) -> Logical Volumes (LV).

```mermaid
graph TD
    Disk1[Physical Disk 1 /dev/sda] --> PV1[Physical Volume 1]
    Disk2[Physical Disk 2 /dev/sdb] --> PV2[Physical Volume 2]
    PV1 --> VG[Volume Group 'data_vg']
    PV2 --> VG
    VG --> LV1[Logical Volume 'root']
    VG --> LV2[Logical Volume 'home']
    LV1 --> FS1[Ext4 Filesystem]
    LV2 --> FS2[XFS Filesystem]
```

### 4. Persistent Mounts and Network Storage
- Configuring `/etc/fstab` for automatic mounting on boot.
- Accessing network storage via NFS.
