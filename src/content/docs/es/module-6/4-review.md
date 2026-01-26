---
title: 6.4 Repaso y Preparación para el Examen
description: Conclusión del curso.
sidebar:
  order: 4
---

## Resumen de Comandos Clave

| Categoría | Comandos a Dominar |
| :--- | :--- |
| **Archivos** | `ls`, `cd`, `cp`, `mv`, `rm`, `mkdir`, `find`, `tar` |
| **Texto** | `grep`, `cat`, `less`, `head`, `tail`, `vi` |
| **Usuarios** | `useradd`, `passwd`, `chmod`, `chown`, `sudo` |
| **Sistema** | `systemctl`, `journalctl`, `ps`, `top`, `kill` |
| **Almacenamiento** | `fdisk`, `lsblk`, `mkfs`, `mount`, `df` |
| **Red** | `ip`, `ping`, `ss`, `nmcli` |

## Consejos para el Día del Examen (LFCS / RHCSA)

1.  **Lee con atención**: Haz exactamente lo que se pide. Si se pide crear un usuario con UID 2000, verifícalo (`id usuario`).
2.  **Verifica la persistencia**: Reinicia si está permitido (o no estás seguro). Asegúrate de que los montajes (`/etc/fstab`) y los cortafuegos/servicios (`systemctl enable`) sobreviven a un reinicio.
3.  **Usa las Páginas Man**: No tienes Google, pero tienes `man`.
    -   ¿Olvidaste el formato de cron? `man 5 crontab`.
    -   ¿Olvidaste las banderas de useradd? `man useradd`.

## Conclusión

Felicidades por completar el temario de **Linux Starlight**. Ahora tienes la base para gestionar sistemas Linux Enterprise del mundo real. ¡Sigue practicando!
