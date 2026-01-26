---
title: 3.2 Package Management
description: Installing, updating, and removing software.
sidebar:
  order: 3
---

Linux uses repositories ("repos") to manage software securely. You generally do not download `.exe` files from the web.

## Debian / Ubuntu (`apt`)
Uses `.deb` packages (see [[/en/module-1/1-overview|Distribution Families]]).

```bash
# 1. Update list of available packages (repo metadata)
sudo apt update

# 2. Install a package
sudo apt install nginx

# 3. Upgrade all installed packages to latest version
sudo apt upgrade

# 4. Remove a package
sudo apt remove nginx

# 5. Search for a package
apt search nginx
```

## RHEL / Rocky (`dnf`)
Uses `.rpm` packages. `dnf` is the successor to `yum`.

```bash
# 1. Verify updates
sudo dnf check-update

# 2. Install (also updates metadata automatically)
sudo dnf install nginx

# 3. Update entire system
sudo dnf update

# 4. Remove a package
sudo dnf remove nginx

# 5. View info
dnf info nginx
```

> [!NOTE]
> On older RHEL/CentOS 7 systems, you will see `yum`. On RHEL 8/9, `yum` is just a symlink to `dnf`.

## Practice Exercises

1.  **Update First**:
    -   Run the update command appropriate for your system (`apt update` or `dnf check-update`).
2.  **Install Tools**:
    -   Install `git` and `curl`.
    -   Verify they are installed by checking their versions (`git --version`).
3.  **Search**:
    -   Search for a package named `htop`.
    -   Install it and run it.
4.  **Clean**:
    -   Remove `htop` if you don't want it.
