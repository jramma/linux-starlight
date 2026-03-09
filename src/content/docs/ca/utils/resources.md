---
title: Recursos
description: Recursos per aprendre i practicar Linux.
sidebar:
  order: 2
---

# Recursos

## Per practicar

- [https://www.practicelinux.com/](https://www.practicelinux.com/)

### Màquines Virtuals locals (recomanada per al curs)

L'opció més sòlida pedagògicament: l'alumne instal·la, trenca i repara sense por.

| Eina                        | Cost                  | Per què                                    |
| --------------------------- | --------------------- | ------------------------------------------ |
| **VirtualBox**              | Gratuït               | El més estès, multiplataforma, snapshots   |
| **VMware Workstation Player** | Gratuït (ús personal) | Millor rendiment, més fàcil de configurar  |
| **UTM** (macOS/iOS)         | Gratuït               | Per a alumnes amb Mac amb chip Apple Silicon |

**Config mínima recomanada per a la VM**:

- SO: **Ubuntu Server 24.04 LTS** (sense GUI, simula un servidor real)
- RAM: 2 GB
- Disco: 20 GB (dinámico)
- Red: NAT + Host-Only adapter (para SSH desde el host)

> **Avantatge clau del snapshot**: abans de cada pràctica, l'alumne fa un snapshot de l'estat net. Si la fastigueja, torna en 10 segons. Això elimina la por a experimentar.

---

### Servidor gratuït al núvol

Per a alumnes sense ordinador potent o que volen experiència real amb infraestructura cloud:

| Proveïdor                                                    | Pla Gratuït            | Limitacions                                     |
| ------------------------------------------------------------- | ---------------------- | ----------------------------------------------- |
| **[Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/)** | ✅ Sempre gratuït    | 2 VMs ARM (4 CPUs, 24 GB RAM) — **el més generós** |
| **[Google Cloud](https://cloud.google.com/free)**             | ✅ e2-micro permanent  | 1 vCPU, 0.6 GB RAM, regió limitada              |
| **[AWS Free Tier](https://aws.amazon.com/free/)**             | ⚠️ 12 mesos           | t2.micro (1 vCPU, 1 GB RAM)                     |
| **[Hetzner Cloud](https://www.hetzner.com/cloud)**            | ❌ No gratuït          | ~4€/mes, excel·lent qualitat/preu per a grups   |

> **Recomanació per al curs**: Oracle Cloud Free Tier és la millor opció cloud gratuïta. Un VM ARM amb Ubuntu Server 24.04 és més que suficient per a totes les pràctiques.

---

### Plataformes de laboratori online

Per a pràctiques ràpides o alumnes sense temps de configurar VM:

| Plataforma                                                 | Descripció                                                    | Limitació                         |
| ---------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------- |
| **[KodeKloud](https://kodekloud.com/free-labs/linux)**     | Labs guiats gratuïts per tema (apt, LVM, cron, systemd...)    | Sessions temporals, entorn guiat  |
| **[LabEx](https://labex.io)**                              | Ubuntu 22.04/24.04 complet al navegador, amb terminal + IDE  | Pla gratuït limitat               |
| **[Webminal](https://www.webminal.org)**                   | Terminal Linux online amb registre gratuït                    | 100 MB, recursos limitats         |
| **[Play with Docker](https://labs.play-with-docker.com/)** | Contenidors Linux amb accés root                              | 4 hores per sessió                |