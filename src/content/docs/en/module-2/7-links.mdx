---
title: 2.7 Links
description: Hard links and Symbolic links.
sidebar:
  order: 7
---

import { Aside } from '@astrojs/starlight/components';

Links allow you to have multiple references to a single file.

## Inodes

Every file in a filesystem is identified by an **inode** (index node), which stores metadata (permissions, owner, size, disk location) but **not the filename**. Directories map filenames to inodes.

## Types of Links

### 1. Hard Links
A hard link is just another name for the existing file. Both names point to the **same inode**.

-   **Properties**:
    -   Must be on the **same filesystem**.
    -   Cannot link to directories.
    -   Deleting the original name does **not** delete the data (as long as one link remains).

-   **Command**:
    ```bash
    ln target_file link_name
    ```

### 2. Symbolic Links (Soft Links)
A symbolic link is a special file that points to the **path** of another file. It's like a shortcut in Windows.

-   **Properties**:
    -   Can span distinct filesystems.
    -   Can link to directories.
    -   If the original is deleted, the link becomes **broken**.

-   **Command**:
    ```bash
    ln -s target_file link_name
    ```

<Aside type="tip">
Always use absolute paths when creating symbolic links to avoid issues if you move the link later.
</Aside>

## Examples

```bash
# Create a dummy file
touch original.txt

# Create a hard link
ln original.txt hard.txt

# Create a soft link
ln -s original.txt soft.txt

# View inodes (first column)
ls -li
```
