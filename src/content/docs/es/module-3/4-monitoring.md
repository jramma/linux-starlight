---
title: 3.4 Registros y Monitorización
description: Solución de problemas y programación de tareas.
sidebar:
  order: 5
---

## Registro (`journalctl`)
Systemd recopila registros en un diario central.

```bash
# Ver todos los registros (desplazable)
journalctl

# tails: Ver los últimos registros y seguir los nuevos (como tail -f)
journalctl -f

# Filtrar por unidad de servicio
journalctl -u nginx

# Filtrar por prioridad (p. ej., Error)
journalctl -p err

# Filtrar por tiempo
journalctl --since "1 hour ago"
```

## Registros Tradicionales
Muchas aplicaciones todavía modifican archivos de texto plano en `/var/log`.
-   `/var/log/syslog` o `/var/log/messages`: Registro general del sistema.
-   `/var/log/auth.log` o `/var/log/secure`: Registros de autenticación/SSH.
-   `/var/log/dmesg`: Búfer del kernel (mensajes de arranque).

## Programación de Tareas (`cron`)

El demonio **cron** ejecuta tareas en momentos específicos.

-   `crontab -e`: Edita la tabla cron del usuario actual.
-   `crontab -l`: Lista las tareas.

**Format**:
`m h dom mon dow comando`

```bash
# Ejecutar backup.sh cada día a las 3:30 AM
30 03 * * * /home/user/scripts/backup.sh
```
