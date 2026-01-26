---
title: Module 3. System Administration - Users, Packages, and Services
description: Managing users, installing software, and controlling system services.
sidebar:
  order: 3
---

**Duration**: 6 hours

This module dives into the core daily tasks of a system administrator.

## Topics Covered

### 1. User and Group Management
- Creating and modifying users: `useradd`, `usermod`.
- Managing groups: `groupadd`.
- Understanding `/etc/passwd` and `/etc/shadow`.

### 2. Package Management
Installing and updating software on different distributions.
- **Debian/Ubuntu**: `apt update`, `apt install`.
- **RHEL/Rocky**: `dnf install`, `dnf update`.

### 3. Service Management with `systemd`
Controlling background services.
- `systemctl start [service]`
- `systemctl stop [service]`
- `systemctl enable [service]` (start on boot)
- `systemctl status [service]`

### 4. Logs and Monitoring
Troubleshooting and keeping track of system health.
- `journalctl`: Query the systemd journal.
- `cron`: Scheduling recurring tasks.
- Checking system logs in `/var/log`.
