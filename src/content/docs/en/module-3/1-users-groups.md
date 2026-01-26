---
title: 3.1 User and Group Management
description: Managing access to the system.
sidebar:
  order: 2
---

## The Big Three Files
Authentication in Linux revolves around three plain text files in `/etc`.

| File | Contains | Permissions |
| :--- | :--- | :--- |
| `/etc/passwd` | User info (Shell, Home dir, UID). | Readable by anyone (644). |
| `/etc/shadow` | **Encrypted** passwords. | Readable only by root (600/640). |
| `/etc/group` | Group memberships. | Readable by anyone (644). |

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
