---
title: 5.4 Introducció als Marcs de Seguretat
description: SELinux i AppArmor.
sidebar:
  order: 5
---

Aquests són sistemes de **Control d'Accés Obligatori (MAC)**. Els permisos estàndard de Linux (chmod) són "Discrecionals". MAC afegeix una capa de "Necessitat de saber". Fins i tot si un fitxer té permisos 777, MAC pot bloquejar un servidor web de llegir les teves claus SSH.

## SELinux (RHEL / Rocky)

Security Enhanced Linux. Etiqueta cada fitxer i procés.

-   **Modes**:
    -   `Enforcing`: Bloqueja i registra violacions. (Objectiu).
    -   `Permissive`: Registra violacions però les permet. (Per a depuració).
    -   `Disabled`: Apagat.

```bash
# Comprovar l'estat
sestatus

# Canviar temporalment a permissive (fins al reinici)
sudo setenforce 0
```

**Resolució de problemes**: Si Nginx dóna "403 Forbidden" malgrat els permisos de fitxer correctes, sovint és un problema de context SELinux.

## AppArmor (Ubuntu / Debian)

Application Armor. Utilitza perfils per aplicació.

```bash
# Comprovar l'estat
sudo aa-status
```
Normalment "Simplement Funciona" en segon pla per a paquets estàndard.
