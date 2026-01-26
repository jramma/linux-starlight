---
title: 1.4 Configuración Inicial
description: Primeros pasos después de una instalación eficiente.
sidebar:
  order: 5
---

Una vez que el sistema se reinicia, te enfrentas a una pantalla negra y un prompt de inicio de sesión. ¿Y ahora qué?

## 1. Inicio de Sesión

Inicia sesión con el usuario creado durante la instalación.
```bash
login: user
Password:
```

## 2. Privilegios de Root (Sudo)

Por defecto, eres un usuario regular. No puedes romper el sistema. Para realizar tareas de administración (instalar, editar configuraciones), necesitas `sudo`.

```bash
# Ejecutar un solo comando como root
sudo apt update

# Cambiar a una shell de root (¡ten cuidado!)
sudo -i
# o
sudo su -
```

## 3. Nombre de Host

Asegúrate de que tu servidor conoce su nombre.

```bash
# Comprobar el nombre de host actual
hostnamectl

# Establecer un nuevo nombre de host
sudo hostnamectl set-hostname myserver.example.com
```

## 4. Configuración de Red

Verifica que tienes conectividad.

```bash
# Comprobar dirección IP
ip addr show

# Comprobar conectividad (Internet)
ping -c 4 google.com

# Comprobar DNS
nslookup google.com
```

### Archivos de Configuración (Vista Previa)
-   **Ubuntu (Netplan)**: `/etc/netplan/*.yaml`
-   **Rocky (NetworkManager)**: `nmcli` o `/etc/NetworkManager/system-connections/`

## 5. Acceso SSH

Raramente te sientas físicamente delante de un servidor. Lo gestionas remotamente vía SSH.

Desde tu portátil/estación de trabajo:
```bash
ssh user@<server-ip-address>
```

**Resolución de problemas SSH**:
1.  ¿Está el servicio en ejecución? `systemctl status ssh` (o `sshd` en Rocky).
2.  ¿Lo está bloqueando el cortafuegos?
3.  ¿Es correcta la IP?
