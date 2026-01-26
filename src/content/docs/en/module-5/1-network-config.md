---
title: 5.1 Network Configuration
description: IP addressing and interface configuration.
sidebar:
  order: 2
---

## Networking Concepts

```mermaid
graph LR
    Server[Linux Server] -- eth0: 192.168.1.10 --> Switch
    Switch --> Router[Gateway: 192.168.1.1]
    Router --> Internet
```

-   **IP Address**: Identity (e.g., `192.168.1.10`).
-   **Netmask**: Size of network (e.g., `/24` or `255.255.255.0`).
-   **Gateway**: The exit to the internet (Router).
-   **DNS**: Phonebook (Domain to IP).

## View Configuration

Legacy command `ifconfig` is deprecated. Use `ip`.

```bash
# View IP addresses
ip addr show

# View routing table (Gateway)
ip route show

# View active ports/sockets
ss -tuln
```

## Persistent Configuration

Setting a Static IP changes depending on the OS.

### Ubuntu (Netplan)
Edit file in `/etc/netplan/00-installer-config.yaml` (name varies).

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
Apply with `sudo netplan apply`.

### Rocky Linux (NetworkManager)
Use `nmcli` (Network Manager Command Line Interface).

```bash
# Set Static IP
nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual

# Set DNS
nmcli con mod "eth0" ipv4.dns "8.8.8.8"

# Restart Interface
nmcli con up "eth0"
```
