---
title: 3.1 Gestión de Usuarios y Grupos
description: Gestión del acceso al sistema.
sidebar:
  order: 2
---

## Los Tres Grandes Archivos
La autenticación en Linux gira en torno a tres archivos de texto plano en `/etc`.

| Archivo | Contiene | Permisos |
| :--- | :--- | :--- |
| `/etc/passwd` | Información de usuario (Shell, Directorio personal, UID). | Legible por todos (644). |
| `/etc/shadow` | Contraseñas **cifradas**. | Legible solo por root (600/640). |
| `/etc/group` | Miembros de grupos. | Legible por todos (644). |

(Ver [[/es/module-2/4-permissions|Gestión de Permisos]] para detalles sobre los modos 644/600)

## Gestión de Usuarios

Crear, modificar y eliminar usuarios.

```bash
# Crear un usuario llamado 'anna' con un directorio personal (-m)
sudo useradd -m -s /bin/bash anna

# Establecer o cambiar contraseña
sudo passwd anna

# Modificar: Añadir 'anna' al grupo 'developers' (modo añadir -aG)
sudo usermod -aG developers anna

# Bloquear cuenta (deshabilitar inicio de sesión)
sudo usermod -L anna

# Eliminar usuario (y su directorio personal)
sudo userdel -r anna
```

## Gestión de Grupos

```bash
# Crear un nuevo grupo
sudo groupadd developers

# Eliminar un grupo
sudo groupdel developers
```

## Ejercicios Prácticos

1.  **Nuevo Recluta**:
    -   Crea un nuevo usuario `intern`.
    -   Asígnale una contraseña.
    -   Verifica su entrada en `/etc/passwd`.
2.  **Trabajo en Grupo**:
    -   Crea un grupo llamado `ops`.
    -   Añade tu usuario actual y el usuario `intern` a este grupo.
    -   Verifica con el comando `groups` (p. ej., `groups intern`).
3.  **Limpieza**:
    -   Elimina el usuario `intern` y su directorio personal.
    -   Elimina el grupo `ops`.
