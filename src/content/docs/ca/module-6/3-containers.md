---
title: 6.3 Introducció als Contenidors
description: Conceptes bàsics de Docker / Podman.
sidebar:
  order: 3
---

Els contenidors et permeten empaquetar una aplicació amb totes les seves biblioteques. Són més lleugers que les Màquines Virtuals (VMs) perquè comparteixen el Kernel de l'amfitrió.

## Docker vs Podman
-   **Docker**: L'estàndard de la indústria. Utilitza un dimoni (servei en segon pla).
-   **Podman**: Natiu de RHEL/Rocky. sense dimoni (s'executa com a usuari). Les ordres són majoritàriament compatibles (`alias docker=podman`).

## Ordres Bàsiques

```bash
# 1. Obtenir una imatge (descarregar del registre)
docker pull nginx

# 2. Executar un contenidor
# -d: Detached (segon pla)
# -p: Mapeig de ports (Amfitrió:Contenidor)
docker run -d -p 8080:80 nginx

# 3. Llistar contenidors en execució
docker ps

# 4. Aturar
docker stop <container_id>
```

Verifica visitant `http://localhost:8080` al teu navegador.
