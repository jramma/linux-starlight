---
title: 5.4 Introducción a los Marcos de Seguridad
description: SELinux y AppArmor.
sidebar:
  order: 5
---

Estos son sistemas de **Control de Acceso Obligatorio (MAC)**. Los permisos estándar de Linux (chmod) son "Discrecionales". MAC añade una capa de "Necesidad de saber". Incluso si un archivo tiene permisos 777, MAC puede bloquear un servidor web de leer tus claves SSH.

## SELinux (RHEL / Rocky)

Security Enhanced Linux. Etiqueta cada archivo y proceso.

-   **Modos**:
    -   `Enforcing`: Bloquea y registra violaciones. (Objetivo).
    -   `Permissive`: Registra violaciones pero las permite. (Para depuración).
    -   `Disabled`: Apagado.

```bash
# Comprovar el estado
sestatus

# Cambiar temporalmente a permissive (hasta el reinicio)
sudo setenforce 0
```

**Solución de problemas**: Si Nginx da "403 Forbidden" a pesar de los permisos de archivo correctos, a menudo es un problema de contexto SELinux.

## AppArmor (Ubuntu / Debian)

Application Armor. Utiliza perfiles por aplicación.

```bash
# Comprobar el estado
sudo aa-status
```
Normalmente "Simplemente Funciona" en segundo plano para paquetes estándar.
