---
title: Recursos
description: Recursos para aprender y practicar Linux.
sidebar:
  order: 2
---

# Recursos

## Para practicar

- [https://www.practicelinux.com/](https://www.practicelinux.com/)

### Máquinas Virtuales locales (recomendada para el curso)

La opción más sólida pedagógicamente: el alumno instala, rompe y repara sin miedo.

| Herramienta                   | Coste                 | Por qué                                      |
| ----------------------------- | --------------------- | -------------------------------------------- |
| **VirtualBox**                | Gratis                | El más extendido, multiplataforma, snapshots |
| **VMware Workstation Player** | Gratis (uso personal) | Mejor rendimiento, más fácil de configurar   |
| **UTM** (macOS/iOS)           | Gratis                | Para alumnos con Mac con chip Apple Silicon  |

**Config mínima recomendada para la VM:**

- OS: **Ubuntu Server 24.04 LTS** (sin GUI, simula un servidor real)
- RAM: 2 GB
- Disco: 20 GB (dinámico)
- Red: NAT + Host-Only adapter (para SSH desde el host)

> **Ventaja clave del snapshot:** antes de cada práctica, el alumno hace un snapshot del estado limpio. Si la fastidia, vuelve en 10 segundos. Esto elimina el miedo a experimentar.

---

### Servidor gratuito en la nube

Para alumnos sin ordenador potente o que quieren experiencia real con infraestructura cloud:

| Proveedor                                                        | Plan Gratuito          | Limitaciones                                        |
| ---------------------------------------------------------------- | ---------------------- | --------------------------------------------------- |
| **[Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/)** | ✅ Siempre gratis      | 2 VMs ARM (4 CPUs, 24 GB RAM) — **el más generoso** |
| **[Google Cloud](https://cloud.google.com/free)**                | ✅ e2-micro permanente | 1 vCPU, 0.6 GB RAM, región limitada                 |
| **[AWS Free Tier](https://aws.amazon.com/free/)**                | ⚠️ 12 meses            | t2.micro (1 vCPU, 1 GB RAM)                         |
| **[Hetzner Cloud](https://www.hetzner.com/cloud)**               | ❌ No gratis           | ~4€/mes, excelente calidad/precio para grupos       |

> **Recomendación para el curso:** Oracle Cloud Free Tier es la mejor opción cloud gratuita. Un VM ARM con Ubuntu Server 24.04 es más que suficiente para todas las prácticas.

---

### Plataformas de laboratorio online

Para prácticas rápidas o alumnos sin tiempo de configurar VM:

| Plataforma                                                 | Descripción                                                     | Limitación                          |
| ---------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------- |
| **[KodeKloud](https://kodekloud.com/free-labs/linux)**     | Labs guiados gratuitos por tema (apt, LVM, cron, systemd...)    | Sesiones temporales, entorno guiado |
| **[LabEx](https://labex.io)**                              | Ubuntu 22.04/24.04 completo en el navegador, con terminal + IDE | Plan gratuito limitado              |
| **[Webminal](https://www.webminal.org)**                   | Terminal Linux online con registro gratuito                     | 100 MB, recursos limitados          |
| **[Play with Docker](https://labs.play-with-docker.com/)** | Contenedores Linux con acceso root                              | 4 horas por sesión                  |