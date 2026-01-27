---
title: 3.1 User and Group Management
description: Managing access to the system.
sidebar:
  order: 2
link: /en/module-3/1-users-groups/
---

## The Big Three Files
Authentication in Linux revolves around three plain text files in `/etc`.

| File | Contains | Permissions |
| :--- | :--- | :--- |
| `/etc/passwd` | User info (Shell, Home dir, UID). | Readable by anyone (644). |
| `/etc/shadow` | **Encrypted** passwords. | Readable only by root (600/640). |
| `/etc/group` | Group memberships. | Readable by anyone (644). |

(See [[/en/module-2/4-permissions|Permission Management]] for details on 644/600 modes)

## User Management

Create, modify, and delete users.

```bash
# Create a user named 'anna' with a home directory (-m)
sudo useradd -m -s /bin/bash anna

# Set or change password
sudo passwd anna

# Modify: Add 'anna' to 'developers' group (append mode -aG)
sudo usermod -aG developers anna

# Lock account (disable login)
sudo usermod -L anna

# Delete user (and their home directory)
sudo userdel -r anna
```

## Group Management

```bash
# Create a new group
sudo groupadd developers

# Delete a group
sudo groupdel developers
```

## Practice Exercises

1.  **New Recruit**:
    -   Create a new user `intern`.
    -   Assign them a password.
    -   Verify their entry in `/etc/passwd`.
2.  **Group Work**:
    -   Create a group called `ops`.
    -   Add your current user and the `intern` user to this group.
    -   Verify with the `groups` command (e.g., `groups intern`).
3.  **Cleanup**:
    -   Delete the `intern` user and their home directory.
    -   Delete the `ops` group.
