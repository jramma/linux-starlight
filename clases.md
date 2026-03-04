# Estructura del Curso LFCS (32 Horas)

Este curso está diseñado para preparar a los estudiantes para la certificación Linux Foundation Certified Sysadmin (LFCS). El contenido está dividido en 8 clases de 4 horas cada una, sumando un total de 32 horas lectivas.

## Clase 1: Introducción a Linux y Comandos Esenciales I (4 horas)
- **Historia y Filosofía de Linux**: Qué es Linux, distribuciones principales (Debian vs RHEL), Open Source.
- **Instalación y Entorno**: Acceso a la terminal, shells básicos (bash).
- **Navegación del Sistema de Archivos**: `pwd`, `cd`, `ls`, rutas absolutas vs relativas.
- **Gestión Básica de Archivos y Directorios**: `mkdir`, `cp`, `mv`, `rm`, `touch`.
- **Obtención de Ayuda**: `man`, `info`, `--help`.
- **Práctica Interactiva**: Ejercicios de navegación y creación de estructura de directorios.

## Clase 2: Comandos Esenciales II y Manipulación de Texto (4 horas)
- **Visualización de Archivos**: `cat`, `less`, `head`, `tail`.
- **Redirecciones y Tuberías (Pipes)**: `>`, `>>`, `<`, `|`.
- **Búsqueda de Archivos**: `find`, `locate`.
- **Procesamiento de Texto**: `grep`, `cut`, `sort`, `uniq`, `wc`.
- **Introducción a `awk` y `sed`**: Edición básica e impresión de columnas.
- **Práctica Interactiva**: Filtrado de logs y búsqueda de información específica.

## Clase 3: Gestión de Usuarios, Grupos y Permisos (4 horas)
- **Conceptos de Usuarios y Grupos**: `/etc/passwd`, `/etc/shadow`, `/etc/group`.
- **Administración de Usuarios**: `useradd`, `usermod`, `userdel`.
- **Administración de Grupos**: `groupadd`, `groupmod`, `groupdel`.
- **Permisos Estándar de Linux (UGO)**: `chmod`, `chown`, `chgrp`. Modos simbólico y octal.
- **Permisos Especiales**: SUID, SGID, Sticky Bit.
- **Listas de Control de Acceso (ACLs)**: `setfacl`, `getfacl`.
- **Elevación de Privilegios**: `su`, configuración de `sudo` (`visudo`).

## Clase 4: Operación de Sistemas en Ejecución (4 horas)
- **Gestión de Procesos**: `ps`, `top`, `htop`, `pgrep`, estados de los procesos.
- **Control de Trabajos (Job Control)**: `bg`, `fg`, `jobs`, `Ctrl+Z`, `Ctrl+C`.
- **Señales de Procesos**: `kill`, `killall`, `pkill`.
- **Gestión de Servicios con `systemd`**: `systemctl` (start, stop, restart, enable, disable, status).
- **Análisis de Logs**: `journalctl`, revisión de `/var/log`.

## Clase 5: Gestión de Paquetes y Tareas Programadas (4 horas)
- **Gestión de Paquetes (Debian/Ubuntu)**: `apt`, `dpkg`.
- **Gestión de Paquetes (RHEL/Rocky/Fedora)**: `dnf`, `rpm`.
- **Empaquetado y Compresión**: `tar`, `gzip`, `bzip2`, `xz`.
- **Transferencia de Archivos**: `scp`, `rsync`.
- **Programación de Tareas**: `cron` (`crontab`), `at`.

## Clase 6: Fundamentos de Redes en Linux (4 horas)
- **Conceptos Básicos de Redes**: IPv4, máscaras de subred, puertos, protocolos (TCP/UDP).
- **Configuración de Red**: `ip`, `nmcli` (NetworkManager).
- **Resolución de Nombres**: `/etc/hosts`, `/etc/resolv.conf`, `dig`, `nslookup`.
- **Diagnóstico de Red**: `ping`, `traceroute`, `ss`, `netstat`.
- **Configuración Básica de Firewall**: `ufw` (Debian/Ubuntu) o `firewalld` (RHEL).

## Clase 7: Gestión de Almacenamiento (Gestión de Discos y LVM) (4 horas)
- **Conceptos de Almacenamiento**: Discos, particiones MBR vs GPT.
- **Particionamiento**: `fdisk`, `parted`.
- **Sistemas de Archivos**: Creación con `mkfs` (ext4, xfs).
- **Montaje de Sistemas de Archivos**: `mount`, `umount`, configuración de `/etc/fstab`.
- **Logical Volume Management (LVM)**: Volúmenes Físicos (PV), Grupos de Volúmenes (VG), Volúmenes Lógicos (LV). Creación y redimensionamiento.

## Clase 8: Configuración de Servicios y Repaso General (4 horas)
- **Acceso Remoto Seguro**: Configuración de SSH (`sshd_config`), autenticación por claves SSH.
- **Servicios Básicos Compartidos**: Instalación y configuración muy básica de un servidor web (Apache o Nginx).
- **Consideraciones de Seguridad Básicas**: SELinux (Modos enforce/permissive) o AppArmor básico.
- **Práctica General**: Simulacro de examen práctico integrando todos los temas (crear usuarios, asignar particiones, configurar red, montar servicios).
