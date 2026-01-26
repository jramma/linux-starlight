---
title: 5.1 Configuració de Xarxa
description: Adreçament IP i configuració d'interfícies.
sidebar:
  order: 2
---

## Conceptes de Xarxa

```mermaid
graph LR
    Server[Servidor Linux] -- eth0: 192.168.1.10 --> Switch
    Switch --> Router[Porta d'enllaç: 192.168.1.1]
    Router --> Internet
```

-   **Adreça IP**: Identitat (p. ex., `192.168.1.10`).
-   **Màscara de xarxa**: Mida de la xarxa (p. ex., `/24` o `255.255.255.0`).
-   **Porta d'enllaç**: La sortida a Internet (Router).
-   **DNS**: Guia telefònica (Domini a IP).

## Veure Configuració

L'ordre antiga `ifconfig` està obsoleta. Utilitza `ip`.

```bash
# Veure adreces IP
ip addr show

# Veure taula d'enrutament (Porta d'enllaç)
ip route show

# Veure ports/sòcols actius
ss -tuln
```

## Configuració Persistent

Establir una IP Estàtica canvia depenent del sistema operatiu.

### Ubuntu (Netplan)
Edita el fitxer a `/etc/netplan/00-installer-config.yaml` (el nom varia).

```yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.10/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
          addresses: [8.8.8.8, 1.1.1.1]
```
Aplica amb `sudo netplan apply`.

### Rocky Linux (NetworkManager)
Utilitza `nmcli` (Interfície de Línia d'Ordres de Network Manager).

```bash
# Establir IP Estàtica
nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual

# Establir DNS
nmcli con mod "eth0" ipv4.dns "8.8.8.8"

# Reiniciar Interfície
nmcli con up "eth0"
```
