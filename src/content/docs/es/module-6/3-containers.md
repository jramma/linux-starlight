---
title: 6.3 Introducción a los Contenedores
description: Conceptos básicos de Docker / Podman.
sidebar:
  order: 3
---

Los contenedores te permiten empaquetar una aplicación con todas sus bibliotecas. Son más ligeros que las Máquinas Virtuales (VMs) porque comparten el Kernel del anfitrión.

## Docker vs Podman
-   **Docker**: El estándar de la industria. Utiliza un demonio (servicio en segundo plano).
-   **Podman**: Nativo de RHEL/Rocky. sin demonio (se ejecuta como usuario). Los comandos son mayoritariamente compatibles (`alias docker=podman`).

## Comandos Básicos

```bash
# 1. Obtener una imagen (descargar del registro)
docker pull nginx

# 2. Ejecutar un contenedor
# -d: Detached (segundo plano)
# -p: Mapeo de puertos (Anfitrión:Contenedor)
docker run -d -p 8080:80 nginx

# 3. Listar contenedores en ejecución
docker ps

# 4. Detener
docker stop <container_id>
```

Verifica visitando `http://localhost:8080` en tu navegador.
