---
title: Module 3. System Administration - Users, Packages, and Services
description: Managing users, installing software, and controlling system services.
sidebar:
  order: 1
---

**Duration**: 6 hours

This module dives into the core daily tasks of a system administrator.

## Topics Covered

This module is divided into the following detailed sections:

### [3.1 User and Group Management](/en/module-3/1-users-groups/)
-   The "Big Three" files: `/etc/passwd`, `/etc/shadow`, `/etc/group`.
-   Creating and modifying users (`useradd`, `usermod`).

### [3.2 Package Management](/en/module-3/2-packages/)
-   **Ubuntu/Debian**: Using `apt`.
-   **Rocky/RHEL**: Using `dnf`.

### [3.3 Service Management with Systemd](/en/module-3/3-services/)
-   Understanding Units.
-   Using `systemctl` to start, stop, enable, and check status.

### [3.4 Logs and Monitoring](/en/module-3/4-monitoring/)
-   Viewing logs with `journalctl` and traditional files in `/var/log`.
-   Scheduling tasks with **cron**.
