---
title: 5.2 Firewalls
description: Filtering traffic.
sidebar:
  order: 3
---

A firewall allows you to block all incoming connections except the ones you explicitly need (e.g., SSH, HTTP).

## Ubuntu: UFW (Uncomplicated Firewall)

Designed to be easy.

```bash
# 1. Set default policies (Deny incoming, Allow outgoing)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 2. Allow essential services
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow 8080/tcp

# 3. Enable the firewall
sudo ufw enable

# 4. Check status
sudo ufw status verbose
```

## Rocky Linux: Firewalld

Based on "Zones". Default zone is usually "public".

```bash
# Check status
sudo firewall-cmd --state

# Allow a service permanently
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https

# Allow a specific port
sudo firewall-cmd --permanent --add-port=8080/tcp

# Reload to apply changes
sudo firewall-cmd --reload
```
