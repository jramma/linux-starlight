---
title: 2.4 Permission Management
description: Understanding ownership and modes in Linux.
sidebar:
  order: 4
---

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

## Changing Ownership (`chown`)

Only `root` can change ownership of files.

```bash
# Change owner to bob
sudo chown bob file.txt

# Change owner to bob and group to staff
sudo chown bob:staff file.txt

# Recursive (folder)
sudo chown -R bob:staff /var/www/html
```
