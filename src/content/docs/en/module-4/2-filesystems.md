---
title: 4.2 Filesystems
description: Formatting and Mounting.
sidebar:
  order: 3
---

A partition needs a filesystem structure to store data.

## Creating Filesystems (Formatting)

The `mkfs` (Make FileSystem) command family.

### ext4
The default for Ubuntu/Debian. Robust and stable.
```bash
sudo mkfs.ext4 /dev/sdb1
```

### XFS
The default for RHEL/Rocky. Excellent performance for large files and parallel operations.
```bash
sudo mkfs.xfs /dev/sdb1
```

## Mounting

To use a filesystem, it must be attached to the directory tree at a "mount point".

```bash
# 1. Create a mount point (just an empty folder)
sudo mkdir /mnt/data

# 2. Mount the partition
sudo mount /dev/sdb1 /mnt/data

# 3. Verify
df -h
```

## Unmounting

**Important**: You cannot unmount a filesystem if any user (including you) is currently "inside" it or using a file on it.

```bash
# Leave the directory first!
cd ~
sudo umount /mnt/data
```
