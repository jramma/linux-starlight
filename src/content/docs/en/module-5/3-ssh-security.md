---
title: 5.3 Secure SSH Configuration
description: Hardening remote access.
sidebar:
  order: 4
---

SSH is the gateway to your server. It is the #1 target for brute-force attacks.

## Key-Based Authentication

More secure than passwords.

1.  **Generate Keys** (on your laptop):
    ```bash
    ssh-keygen -t ed25519
    ```
2.  **Copy Public Key to Server**:
    ```bash
    ssh-copy-id user@server_ip
    ```
3.  **Test Login**:
    You should now log in without a password.

## Hardening `/etc/ssh/sshd_config`

Edit the server config file: `sudo nano /etc/ssh/sshd_config`.

```text
# 1. Disable Root Login (Use sudo instead)
PermitRootLogin no

# 2. Disable Password Authentication (Force keys)
PasswordAuthentication no
```

**Restart SSH** to apply:
`sudo systemctl restart ssh` (or `sshd`).

> [!CAUTION]
> Before adding `PasswordAuthentication no`, make sure your key login works! Otherwise, you execute "The Digital Lockout" and lose access to your server.
