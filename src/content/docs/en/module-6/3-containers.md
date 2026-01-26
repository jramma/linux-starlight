---
title: 6.3 Introduction to Containers
description: Docker / Podman basics.
sidebar:
  order: 3
---

Containers allow you to package an application with all its libraries. They are lighter than Virtual Machines (VMs) because they share the host Kernel.

## Docker vs Podman
-   **Docker**: The industry standard. Uses a daemon (background service).
-   **Podman**: Native to RHEL/Rocky. daemonless (runs as user). Commands are mostly compatible (`alias docker=podman`).

## Basic Commands

```bash
# 1. Pull an image (download from registry)
docker pull nginx

# 2. Run a container
# -d: Detached (background)
# -p: Port mapping (Host:Container)
docker run -d -p 8080:80 nginx

# 3. List running containers
docker ps

# 4. Stop
docker stop <container_id>
```

Verify by visiting `http://localhost:8080` in your browser.
