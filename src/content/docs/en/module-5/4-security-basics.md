---
title: 5.4 Introduction to Security Frameworks
description: SELinux and AppArmor.
sidebar:
  order: 5
---

These are **Mandatory Access Control (MAC)** systems. Standard Linux permissions (chmod) are "Discretionary". MAC adds a layer of "Need to know". Even if a file has 777 permissions, MAC can block a web server from reading your SSH keys.

## SELinux (RHEL / Rocky)

Security Enhanced Linux. It labels every file and process.

-   **Modes**:
    -   `Enforcing`: Blocks and logs violations. (Goal).
    -   `Permissive`: Logs violations but allows them. (For debugging).
    -   `Disabled`: Off.

```bash
# Check status
sestatus

# Temporarily switch to permissive (until reboot)
sudo setenforce 0
```

**Troubleshooting**: If Nginx gives "403 Forbidden" despite correct file permissions, it is often an SELinux context issue.

## AppArmor (Ubuntu / Debian)

Application Armor. Uses per-application profiles.

```bash
# Check status
sudo aa-status
```
It usually "Just Works" in background for standard packages.
