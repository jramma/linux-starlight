# Estructura del Curso LFCS (32 Horas)

Este curso está diseñado para preparar a los estudiantes para la certificación Linux Foundation Certified Sysadmin (LFCS). El contenido está dividido en 8 módulos/clases de 4 horas cada una (32 horas en total). Cada módulo cuenta con material teórico-práctico interactivo (`.mdx`) enfocado puramente en la curva de aprendizaje de Debian Linux.

## Clase 1: Introducción, Instalación y Configuración Base (4h)
Sentar las bases absolutas de la administración del sistema operativo.
- `src/content/docs/es/module-1/1-overview.mdx`: Filosofía UNIX/Linux, Kernel vs OS.
- `src/content/docs/es/module-1/2-installation.mdx`: Instalación Headless (sin GUI), configuración manual Wi-Fi (`nmcli`/`wpa_supplicant`).
- `src/content/docs/es/module-1/3-partitioning-boot.mdx`: Particionamiento puro de instalación y ciclo de arranque teórico.
- `src/content/docs/es/module-1/4-configuration.mdx`: Pasos post-instalación de supervivencia.

## Clase 2: Uso del Shell y Comandos Fundamentales (4h)
Dominio de la línea de comandos sin herramientas gráficas.
- `src/content/docs/es/module-2/1-navigation.mdx`: Rutas, directorios y comodines glob básicos (`*`, `?`).
- `src/content/docs/es/module-2/2-text-editing.mdx`: Supervivencia en editores (`nano` prioritario, `vim` secundario).
- `src/content/docs/es/module-2/3-pipes-filters.mdx`: Redirecciones (`>`, `>>`) y tuberías (`|`) con herramientas GNU (`grep`, `wc`).
- `src/content/docs/es/module-2/4-permissions.mdx`: Permisos `rwx` y modo Octal (`chmod`, `chown`).
- `src/content/docs/es/module-2/5-processes.mdx`: Señales `kill`, uso de `ps`, `top` y trabajos en segundo plano (`&`, `bg`).
- `src/content/docs/es/module-2/6-archiving.mdx`: `tar`, compresión (`gzip`, `xz`) e introducción a `rsync`.
- `src/content/docs/es/module-2/7-links.mdx`: Enlaces Duros frente a Simbólicos (Inodos).
- `src/content/docs/es/module-2/8-documentation.mdx`: Uso de `man`, `apropos` y `/usr/share/doc`.

## Clase 3: Administración de Usuarios y Redes (4h)
Gestión de identidad, elevación de privilegios y conexión exterior.
- `src/content/docs/es/module-3/1-user-management.mdx`: Alta/baja de usuarios UID y archivos `/etc/passwd`.
- `src/content/docs/es/module-3/2-groups-sudo.mdx`: Integración en grupos (`usermod -aG`), mandatos `su` y securización de `/etc/sudoers` mediante `visudo`.
- `src/content/docs/es/module-3/3-basic-networking.mdx`: iproute2 (`ip a`, `ip r`), diagnósticos de puertos con `ss`.
- `src/content/docs/es/module-3/4-ssh-keys.mdx`: Criptografía asimétrica (ED25519), `ssh-copy-id` y restricciones en `sshd_config`.

## Clase 4: Arranque del Sistema y Servicios (4h)
Control total de los procesos vitales y solución de problemas.
- `src/content/docs/es/module-4/1-boot-process.mdx`: Anatomía del arranque (BIOS/UEFI -> GRUB -> Initramfs -> Systemd).
- `src/content/docs/es/module-4/2-grub-kernel.mdx`: Configurar el cargador `/etc/default/grub` y módulos de kernel en caliente.
- `src/content/docs/es/module-4/3-systemd-services.mdx`: Reinar sobre `systemctl` (start/enable/targets).
- `src/content/docs/es/module-4/4-logging-journalctl.mdx`: Forense informático con syslog y `journalctl`.

## Clase 5: Gestión de Almacenamiento y LVM (4h)
Administración de discos duros y volúmenes lógicos dinámicos.
- *(Archivos MDX planificados para futura expansión)*

## Clase 6: Gestión de Software, Paquetes y Tareas Programadas (4h)
Instalación de utilidades (`apt`/`dpkg`) y automatización cronológica (`cron`/`systemd timers`).
- *(Archivos MDX planificados para futura expansión)*

## Clase 7: Seguridad Básica y Cortafuegos de Red (4h)
Blindaje del servidor mediante filtros de paquetes Netfilter, UFW y seguridad local.
- *(Archivos MDX planificados para futura expansión)*

## Clase 8: Proyectos LFCS, Repaso Integrador y Servidor Web (4h)
Integración práctica implementando un Servidor Web full-stack y simulacros de desastres.
- *(Archivos MDX planificados para final de curso)*
