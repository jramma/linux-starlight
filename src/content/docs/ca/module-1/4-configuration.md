---
title: 1.4 Configuració Inicial
description: Primers passos després d'una instal·lació eficient.
sidebar:
  order: 5
---

Un cop el sistema es reinicia, et trobes davant d'una pantalla negra i un prompt d'inici de sessió. I ara què?

## 1. Inici de Sessió

Inicia sessió amb l'usuari creat durant la instal·lació.
```bash
login: user
Password:
```

## 2. Privilegis de Root (Sudo)

Per defecte, ets un usuari regular. No pots trencar el sistema. Per realitzar tasques d'administració (instal·lar, editar configuracions), necessites `sudo`.

```bash
# Executar una sola comanda com a root
sudo apt update

# Canviar a un shell de root (vés amb compte!)
sudo -i
# o
sudo su -
```

## 3. Nom d'amfitrió

Assegura't que el teu servidor sap el seu nom.

```bash
# Comprovar el nom d'amfitrió actual
hostnamectl

# Establir un nou nom d'amfitrió
sudo hostnamectl set-hostname myserver.example.com
```

## 4. Configuració de Xarxa

Verifica que tens connectivitat.

```bash
# Comprovar adreça IP
ip addr show

# Comprovar connectivitat (Internet)
ping -c 4 google.com

# Comprovar DNS
nslookup google.com
```

### Fitxers de Configuració (Vista Prèvia)
-   **Ubuntu (Netplan)**: `/etc/netplan/*.yaml`
-   **Rocky (NetworkManager)**: `nmcli` o `/etc/NetworkManager/system-connections/`

## 5. Accés SSH

Rarament t'asseus físicament davant d'un servidor. El gestiones remotament via SSH.

Des del teu portàtil/estació de treball:
```bash
ssh user@<server-ip-address>
```

**Resolució de problemes SSH**:
1.  Està el servei en execució? `systemctl status ssh` (o `sshd` a Rocky).
2.  L'està bloquejant el tallafoc?
3.  És correcta la IP?
