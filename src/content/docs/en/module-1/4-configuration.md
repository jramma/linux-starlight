---
title: 1.4 Initial Configuration
description: First steps after efficient installation.
sidebar:
  order: 5
---

Once the system reboots, you are faced with a black screen and a login prompt. What now?

## 1. Login

Log in with the user created during installation.
```bash
login: user
Password:
```

## 2. Root Privileges (Sudo)

By default, you are a regular user. You cannot break the system. To perform admin tasks (installing, editing configs), you need `sudo`.

```bash
# Run a single command as root
sudo apt update

# Switch to a root shell (be careful!)
sudo -i
# or
sudo su -
```

## 3. Hostname

Ensure your server knows its name.

```bash
# Check current hostname
hostnamectl

# Set new hostname
sudo hostnamectl set-hostname myserver.example.com
```

## 4. Network Configuration

Verify you have connectivity.

```bash
# Check IP address
ip addr show

# Check connectivity (Internet)
ping -c 4 google.com

# Check DNS
nslookup google.com
```

### Configuration Files (Preview)
-   **Ubuntu (Netplan)**: `/etc/netplan/*.yaml`
-   **Rocky (NetworkManager)**: `nmcli` or `/etc/NetworkManager/system-connections/`

## 5. SSH Access

You rarely sit physically in front of a server. You manage it remotely via SSH.

From your laptop/workstation:
```bash
ssh user@<server-ip-address>
```

**Troubleshooting SSH**:
1.  Is the service running? `systemctl status ssh` (or `sshd` on Rocky).
2.  Is the firewall blocking it?
3.  Is the IP correct?
