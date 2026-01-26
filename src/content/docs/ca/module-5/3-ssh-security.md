---
title: 5.3 Configuració Segura de SSH
description: Enduriment de l'accés remot.
sidebar:
  order: 4
---

SSH és la porta d'entrada al teu servidor. És l'objectiu #1 per als atacs de força bruta.

## Autenticació Basada en Claus

Més segur que les contrasenyes.

1.  **Generar Claus** (al teu portàtil):
    ```bash
    ssh-keygen -t ed25519
    ```
2.  **Copiar Clau Pública al Servidor**:
    ```bash
    ssh-copy-id user@ip_servidor
    ```
3.  **Provar Inici de Sessió**:
    Ara hauries d'iniciar sessió sense contrasenya.

## Enduriment de `/etc/ssh/sshd_config`

Edita el fitxer de configuració del servidor: `sudo nano /etc/ssh/sshd_config`.

```text
# 1. Deshabilitar Inici de Sessió Root (Utilitza sudo en el seu lloc)
PermitRootLogin no

# 2. Deshabilitar Autenticació amb Contrasenya (Forçar claus)
PasswordAuthentication no
```

**Reiniciar SSH** per aplicar:
`sudo systemctl restart ssh` (o `sshd`).

> [!CAUTION]
> Abans d'afegir `PasswordAuthentication no`, assegura't que el teu inici de sessió amb clau funciona! En cas contrari, executes "El Bloqueig Digital" i perds l'accés al teu servidor.
