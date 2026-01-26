---
title: Module 4. Storage and File Systems
description: Managing disks, partitions, and file systems.
sidebar:
  order: 1
---

**Duration**: 4 hours

This module covers how Linux interacts with storage devices, from physical disks to mounted file systems.

## Topics Covered

This module is divided into the following detailed sections:

### [4.1 Disks and Partitions](/en/module-4/1-disks-partitions/)
-   Block devices (`/dev/sda`).
-   Partitioning tools: `fdisk` (MBR) and `gdisk` (GPT).

### [4.2 Filesystems](/en/module-4/2-filesystems/)
-   Formatting with `mkfs.ext4` and `mkfs.xfs`.
-   Mounting and unmounting manually.

### [4.3 Logical Volume Management (LVM)](/en/module-4/3-lvm/)
-   Flexible storage with PVs, VGs, and LVs.
-   Resizing volumes dynamically.

### [4.4 Persistent Mounts and NFS](/en/module-4/4-persistence/)
-   Configuring `/etc/fstab` for automatic mounting.
-   Safe editing practices (UUID).
-   Connecting to Network File Storage (NFS).
