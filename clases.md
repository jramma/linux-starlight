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
- `src/content/docs/es/module-5/1-disks-partitions.mdx`: MBR vs GPT, `lsblk`, particionado con `fdisk` y `parted`.
- `src/content/docs/es/module-5/2-filesystems-mount.mdx`: Formateo (`mkfs`), montajes temporales (`mount`) y permanentes (`/etc/fstab` y UUIDs).
- `src/content/docs/es/module-5/3-lvm-management.mdx`: Virtualización física (`pvcreate`), grupos de volúmenes (`vgcreate`), lógicos (`lvcreate`) y extensiones en caliente (`lvextend` + `resize2fs`).

## Clase 6: Gestión de Software y Tareas Automáticas (4h)
Mantenimiento de paquetería, compilación de fuentes y programación temporal.
- `src/content/docs/es/module-6/1-package-management.mdx`: Uso profundo de `apt`, `dpkg`, e inspección de repositorios `/etc/apt/sources.list`.
- `src/content/docs/es/module-6/2-software-compilation.mdx`: Compilar software huérfano (Tarballs, `./configure`, `make`), y rastreo de librerías (`ldd`).
- `src/content/docs/es/module-6/3-time-synchronization.mdx`: Gestión de zonas horarias con `timedatectl` y el protocolo NTP (`chrony`).
- `src/content/docs/es/module-6/4-task-scheduling.mdx`: Automatización humana mediante `cron`, `crontab`, `at` y disparadores modernos `systemd-timers`.

## Clase 7: Seguridad Básica y Cortafuegos de Red (4h)
Blindaje del servidor mediante filtros de paquetes Netfilter, UFW y seguridad local.
- `src/content/docs/es/module-7/1-security-principles.mdx`: Mínimo privilegio, auditoría de contraseñas de Root y protección del cargador de arranque (GRUB password).
- `src/content/docs/es/module-7/2-mac-apparmor.mdx`: Introducción al Control de Acceso Obligatorio. Perfiles de confinamiento estricto de demonios usando AppArmor en Debian.
- `src/content/docs/es/module-7/3-network-ports.mdx`: Análisis forense de red. Descubrir qué demonio está escuchando en qué puerto TCP/UDP usando `ss -tulpn` y `lsof -i`.
- `src/content/docs/es/module-7/4-firewall-ufw.mdx`: Cerrando las compuertas corporativas. Uso y reglas del Uncomplicated Firewall (`ufw`), permitiendo (`allow`), denegando (`deny`) y limitando (`limit`) ataques por fuerza bruta a SSH.

## Clase 8: Proyectos LFCS, Repaso Integrador y Servidor Web (4h)
Integración práctica implementando un Servidor Web full-stack y simulacros de desastres.
- `src/content/docs/es/module-8/1-webserver-nginx.mdx`: El anfitrión web. Instalando, habilitando en Systemd y abriendo el puerto 80 en UFW para desplegar el motor Nginx con un "Virtual Host" (`server_name`).
- `src/content/docs/es/module-8/2-lemp-stack.mdx`: Infraestructura completa. Incorporando bases de datos relacionales (MariaDB) y el motor backend `PHP-FPM`, atando permisos a `www-data`.
- `src/content/docs/es/module-8/3-lfcs-troubleshooting.mdx`: **El Simulacro del Infierno**. Escenarios reales de examen: El disco raíz en LVM se llenó al 100% matando la BD (resize2fs), el sistema no enciende (rescate GRUB inyectando bash), y los logs de `journalctl` dictan sentencias.
- `src/content/docs/es/module-8/4-course-conclusion.mdx`: Diferencias certificatorias entre LFCS y el escalón superior LFCE. Fin del trayecto y mentalidad para el mercado laboral sysadmin operativo.
