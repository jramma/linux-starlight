---
title: 1.2 Instalación de Linux
description: Guía paso a paso para Ubuntu Server y Rocky Linux.
sidebar:
  order: 3
---

Instalar un servidor Linux es el primer paso para construir una infraestructura. A diferencia de las instalaciones de escritorio, las instalaciones de servidor se centran en la estabilidad, la seguridad y el uso mínimo de recursos (sin GUI).

## Preparación

Antes de empezar, necesitas el medio de instalación (ISO):
-   [Descargar Ubuntu Server](https://ubuntu.com/download/server)
-   [Descargar Rocky Linux](https://rockylinux.org/download)

Típicamente grabarás esta ISO en una unidad USB utilizando herramientas como **Rufus**, **BalenaEtcher**, o `dd` en Linux/Mac.

## Instalando Ubuntu Server

1.  **Arrancar desde el Medio**: Selecciona "Install Ubuntu Server" en el GRUB.
2.  **Idioma y Teclado**: Selecciona tus preferencias (el inglés es estándar para servidores).
3.  **Conexiones de Red**: El instalador intentará DHCP. Para servidores, a menudo quieres una IP Estática (lo cubriremos en el Módulo 5, pero puedes configurarlo aquí).
4.  **Configuración de Almacenamiento**:
    -   *Usar un disco entero*: Lo más fácil.
    -   *Configurar LVM*: Recomendado para flexibilidad (redimensionar volúmenes más tarde).
5.  **Configuración del Perfil**: Crea el usuario por defecto.
    -   **Importante**: Ubuntu *no* habilita la contraseña de la cuenta `root` por defecto. El usuario creado se añade a `sudoers`.
6.  **Configuración SSH**: Marca "Install OpenSSH server". **No te saltes esto.**
7.  **Instalación de Snaps**: Probablemente puedes saltarte la preinstalación de snaps a menos que los necesites específicamente (ej., Docker, Nextcloud).
8.  **Reiniciar**: Quita el medio cuando se te pida.

## Instalando Rocky Linux (Clon RHEL)

1.  **Arrancar**: Selecciona "Install Rocky Linux 9".
2.  **Instalador Anaconda**: El instalador RHEL actúa como un "hub". Tienes que limpiar las advertencias en cada sección.
3.  **Destino de la Instalación**:
    -   Selecciona el disco.
    -   Elige "Automatic" o "Custom" para la configuración de almacenamiento.
    -   *Nota*: RHEL utiliza por defecto el sistema de archivos XFS.
4.  **Red y Nombre de host**:
    -   **ENCIENDE** la interfaz de red (¡a menudo está APAGADA por defecto!).
    -   Establece el nombre de host (ej., `server01.example.com`).
5.  **Configuración de Usuario**:
    -   **Contraseña de Root**: Establece una contraseña de root fuerte. Puedes "Allow root SSH login with password" (no recomendado para producción) o "Lock root account".
    -   **Creación de Usuario**: Crea un usuario administrador regular y marca "Make this user administrator" (añade al grupo `wheel`).
6.  **Selección de Software**: elige "Minimal Install" para servidores. Evita "Server with GUI" a menos que sea estrictamente necesario.
