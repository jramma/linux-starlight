---
title: 2.4 Permission Management
description: Understanding ownership and modes in Linux.
sidebar:
  order: 4
---

import { Aside } from '@astrojs/starlight/components';

In Linux, every file and directory is owned by a **User** and a **Group**, and has permissions for **User (u)**, **Group (g)**, and **Others (o)**.

## Viewing Permissions

Run `ls -l`:

```bash
-rwxr-xr--  1 alice developers  2048 Jan 01 12:00 script.sh
```

-   `-`: File type (`-` = file, `d` = directory).
-   `rwx`: User permissions (Read, Write, Execute).
-   `r-x`: Group permissions (Read, no Write, Execute).
-   `r--`: Others permissions (Read only).
-   `alice`: Owner.
-   `developers`: Owning Group.

## Changing Permissions (`chmod`)

### Symbolic Mode
Easy to read.
-   `chmod u+x script.sh`: Add e**x**ecute for **u**ser.
-   `chmod g-w file.txt`: Remove **w**rite for **g**roup.
-   `chmod o=r file.txt`: Set **o**thers to **r**ead only.

### Octal Mode
Professional shortcut.
-   Read (r) = 4
-   Write (w) = 2
-   Execute (x) = 1

Common patterns:
-   **755** (`rwxr-xr-x`): Standard for scripts/programs. User full, others read/exec.
-   **644** (`rw-r--r--`): Standard for data files.
-   **600** (`rw-------`): Secure (SSH keys). Only owner can read/write.
-   **777**: Everyone can do everything. **Avoid this!**
    <Aside type="danger">Avoid 777 permissions in production as it allows anyone to modify or execute the file.</Aside>

## Changing Ownership (`chown`)

Only `root` can change ownership of files.

<Aside type="caution">Changing file ownership can break applications if not done carefully.</Aside>

```bash
# Change owner to bob
sudo chown bob file.txt

# Change owner to bob and group to staff
sudo chown bob:staff file.txt

```bash
# Recursive (folder)
sudo chown -R bob:staff /var/www/html
```

## Special Permissions

Beyond standard read/write/execute, there are three special permissions:

| Permission | Code | Function on File | Function on Directory |
| :--- | :--- | :--- | :--- |
| **SUID** (Set User ID) | `s` (4) | Run as the file owner (e.g., `passwd`). | N/A |
| **SGID** (Set Group ID) | `s` (2) | Run as the group owner. | New files inherit the group. |
| **Sticky Bit** | `t` (1) | N/A | Only owner can delete their own files (e.g., `/tmp`). |

### Setting Special Permissions

- **Symbolic**:
    -   `chmod u+s file` (SUID)
    -   `chmod g+s dir` (SGID)
    -   `chmod +t dir` (Sticky)
- **Octal** (Fourth digit prefixed):
    -   `chmod 4755 file` (SUID)
    -   `chmod 2755 dir` (SGID)
    -   `chmod 1777 dir` (Sticky)

## Default Permissions (`umask`)

When you create a file or directory, it gets default permissions determined by the `umask`.

- **Standard umask**: `0022` (or `022`).
- **Calculation**:
    -   Files start at `666`. `666 - 022 = 644` (`rw-r--r--`).
    -   Directories start at `777`. `777 - 022 = 755` (`rwxr-xr-x`).
- **Changing**: `umask 027` (results in strict permissions).

