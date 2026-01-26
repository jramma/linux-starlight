---
title: 5.1 Configuración de Red
description: Direccionamiento IP y configuración de interfaces.
sidebar:
  order: 2
---

## Conceptos de Red

```mermaid
graph LR
    Server[Servidor Linux] -- eth0: 192.168.1.10 --> Switch
    Switch --> Router[Puerta de enlace: 192.168.1.1]
    Router --> Internet
```

-   **Dirección IP**: Identidad (p. ej., `192.168.1.10`).
-   **Máscara de red**: Tamaño de la red (p. ej., `/24` o `255.255.255.0`).
-   **Puerta de enlace**: La salida a Internet (Router).
-   **DNS**: Guía telefónica (Dominio a IP).

## Ver Configuración

El comando antiguo `ifconfig` está obsoleto. Utiliza `ip`.

```bash
# Ver direcciones IP
ip addr show

# Ver tabla de enrutamiento (Puerta de enlace)
ip route show

# Ver puertos/sockets activos
ss -tuln
```

## Configuración Persistente

Establecer una IP Estática cambia dependiendo del sistema operativo.

### Ubuntu (Netplan)
Edita el archivo en `/etc/netplan/00-installer-config.yaml` (el nombre varía).

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
Aplica con `sudo netplan apply`.

### Rocky Linux (NetworkManager)
Utiliza `nmcli` (Interfaz de Línea de Comandos de Network Manager).

```bash
# Establecer IP Estática
nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual

# Establecer DNS
nmcli con mod "eth0" ipv4.dns "8.8.8.8"

# Reiniciar Interfaz
nmcli con up "eth0"
```
