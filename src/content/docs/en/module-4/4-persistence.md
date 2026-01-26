---
title: 4.4 Persistent Mounts and NFS
description: Making mounts survive a reboot.
sidebar:
  order: 5
---

## /etc/fstab

Command line mounts (`sudo mount`) disappear when you reboot. To make them permanent, edit `/etc/fstab`.

> [!WARNING]
> An error in `/etc/fstab` can cause your system to fail booting. Always verify before rebooting!

### Best Practice: Use UUIDs
Device names (`/dev/sdb1`) can change if you unplug/plug disks. **UUIDs** (Universally Unique Identifiers) never change.

1.  Find UUID: `sudo blkid`
2.  Edit file: `sudo nano /etc/fstab`

**Format**:
`<Device UUID> <Mount Point> <Filesystem> <Options> <Dump> <Pass>`

**Example**:
```text
UUID=1234-abcd-5678  /mnt/data  ext4  defaults  0  2
```

3.  **Verify**: run `sudo mount -a`. If it outputs no errors, you are safe.

## Network File System (NFS)

Accessing storage over the network.

**Client Setup**:
1.  Install commons: `sudo apt install nfs-common` (Ubuntu) or `sudo dnf install nfs-utils` (Rocky).
2.  Test mount:
    ```bash
    sudo mount server_ip:/exported/share /mnt/local_mountpoint
    ```
3.  Add to `fstab` for persistence:
    ```text
    server_ip:/share  /mnt/local  nfs  defaults  0  0
    ```
