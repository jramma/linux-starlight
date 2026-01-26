---
title: 3.3 Gestión de Servicios con Systemd
description: Control de demonios en segundo plano.
sidebar:
  order: 4
---

**Systemd** es el sistema de inicialización utilizado por casi todas las distribuciones principales modernas. Gestiona "Unidades", más comúnmente "Unidades de Servicio" (`.service`). Reemplaza sistemas de inicialización antiguos y gestiona procesos (ver [[/es/module-2/5-processes|Control de Procesos]]) de manera más robusta.

## Comandos Systemctl

La herramienta principal para interactuar con systemd.

| Acción | Comando | Explicación |
| :--- | :--- | :--- |
| **Iniciar** | `sudo systemctl start nginx` | Iniciar el servicio *ahora*. |
| **Detener** | `sudo systemctl stop nginx` | Detener el servicio *ahora*. |
| **Reiniciar** | `sudo systemctl restart nginx` | Detener, y luego iniciar. |
| **Recargar** | `sudo systemctl reload nginx` | Recargar configuración sin detener (cero tiempo de inactividad). |
| **Habilitar** | `sudo systemctl enable nginx` | Iniciar automáticamente **en el arranque**. |
| **Deshabilitar** | `sudo systemctl disable nginx` | No iniciar en el arranque. |
| **Estado** | `systemctl status nginx` | Comprobar si está en ejecución, habilitado, y ver los últimos registros. |

### Hoja de Trucos: La Combinación "Habilitar e Iniciar"
A menudo querrás hacer ambas cosas.

```bash
sudo systemctl enable --now nginx
```

## Archivos de Unidad
Las definiciones de servicio viven en `/lib/systemd/system/` (predeterminados) y `/etc/systemd/system/` (personalizados).

## Ejercicios Prácticos

1.  **Investigar SSH**:
    -   Comprueba el estado del servicio SSH: `systemctl status ssh` (o `sshd`).
    -   ¿Está activo? ¿Está habilitado?
2.  **Gestionar un Servicio de Prueba**:
    -   Instala `apache2` o `nginx` si puedes, o elige un servicio existente como `cron`.
    -   Detén el servicio. Verifica que está detenido.
    -   Inícialo de nuevo.
    -   Deshabilítalo (para que no se inicie en el arranque).
    -   Habilítalo de nuevo.
3.  **Registros**:
    -   Utiliza `journalctl -u ssh` (o `sshd`) para ver los registros específicamente para este servicio.
