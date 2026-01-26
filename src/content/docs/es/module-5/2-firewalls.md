---
title: 5.2 Cortafuegos
description: Filtrado de tráfico.
sidebar:
  order: 3
---

Un cortafuegos te permite bloquear todas las conexiones entrantes excepto las que necesitas explícitamente (p. ej., SSH, HTTP).

## Ubuntu: UFW (Uncomplicated Firewall)

Diseñado para ser fácil.

```bash
# 1. Establecer políticas predeterminadas (Denegar entrantes, Permitir salientes)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 2. Permitir servicios esenciales
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow 8080/tcp

# 3. Habilitar el cortafuegos
sudo ufw enable

# 4. Comprobar el estado
sudo ufw status verbose
```

## Rocky Linux: Firewalld

Basado en "Zonas". La zona predeterminada es usualmente "public".

```bash
# Comprobar el estado
sudo firewall-cmd --state

# Permitir un servicio permanentemente
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https

# Permitir un puerto específico
sudo firewall-cmd --permanent --add-port=8080/tcp

# Recargar para aplicar cambios
sudo firewall-cmd --reload
```
