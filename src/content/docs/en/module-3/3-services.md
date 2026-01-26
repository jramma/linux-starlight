---
title: 3.3 Service Management with Systemd
description: Controlling background daemons.
sidebar:
  order: 4
---

**Systemd** is the init system used by almost all modern major distributions. It manages "Units", most commonly "Service Units" (`.service`).

## Systemctl Commands

The main tool for interacting with systemd.

| Action | Command | Explanation |
| :--- | :--- | :--- |
| **Start** | `sudo systemctl start nginx` | Start service *now*. |
| **Stop** | `sudo systemctl stop nginx` | Stop service *now*. |
| **Restart** | `sudo systemctl restart nginx` | Stop, then start. |
| **Reload** | `sudo systemctl reload nginx` | Reload config without stopping (zero downtime). |
| **Enable** | `sudo systemctl enable nginx` | Start automatically **on boot**. |
| **Disable** | `sudo systemctl disable nginx` | Do not start on boot. |
| **Status** | `systemctl status nginx` | Check if running, enabled, and view latest logs. |

### Cheatsheet: The "Enable and Start" Combo
You often want to do both.

```bash
sudo systemctl enable --now nginx
```

## Unit Files
Service definitions live in `/lib/systemd/system/` (defaults) and `/etc/systemd/system/` (custom overrides).
