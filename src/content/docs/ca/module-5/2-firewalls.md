---
title: 5.2 Tallafocs
description: Filtratge de trànsit.
sidebar:
  order: 3
---

Un tallafocs et permet bloquejar totes les connexions entrants excepte les que necessites explícitament (p. ex., SSH, HTTP).

## Ubuntu: UFW (Uncomplicated Firewall)

Dissenyat per ser fàcil.

```bash
# 1. Establir polítiques predeterminades (Denegar entrants, Permetre sortints)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 2. Permetre serveis essencials
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow 8080/tcp

# 3. Habilitar el tallafocs
sudo ufw enable

# 4. Comprovar l'estat
sudo ufw status verbose
```

## Rocky Linux: Firewalld

Basat en "Zones". La zona predeterminada és normalment "public".

```bash
# Comprovar l'estat
sudo firewall-cmd --state

# Permetre un servei permanentment
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https

# Permetre un port específic
sudo firewall-cmd --permanent --add-port=8080/tcp

# Recarregar per aplicar canvis
sudo firewall-cmd --reload
```
