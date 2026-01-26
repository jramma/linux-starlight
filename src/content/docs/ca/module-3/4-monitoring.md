---
title: 3.4 Registres i Monitoratge
description: Resolució de problemes i programació de tasques.
sidebar:
  order: 5
---

## Registre (`journalctl`)
Systemd recopila registres en un diari central.

```bash
# Veure tots els registres (desplaçable)
journalctl

# tails: Veure els últims registres i seguir-ne de nous (com tail -f)
journalctl -f

# Filtrar per unitat de servei
journalctl -u nginx

# Filtrar per prioritat (p. ex., Error)
journalctl -p err

# Filtrar per temps
journalctl --since "1 hour ago"
```

## Registres Tradicionals
Moltes aplicacions encara modifiquen fitxers de text pla a `/var/log`.
-   `/var/log/syslog` o `/var/log/messages`: Registre general del sistema.
-   `/var/log/auth.log` o `/var/log/secure`: Registres d'autenticació/SSH.
-   `/var/log/dmesg`: Memòria intermèdia del nucli (missatges d'arrencada).

## Programació de Tasques (`cron`)

El dimoni **cron** executa tasques en moments específics.

-   `crontab -e`: Edita la taula cron de l'usuari actual.
-   `crontab -l`: Llista les tasques.

**Format**:
`m h dom mon dow ordre`

```bash
# Executar backup.sh cada dia a les 3:30 AM
30 03 * * * /home/user/scripts/backup.sh
```
