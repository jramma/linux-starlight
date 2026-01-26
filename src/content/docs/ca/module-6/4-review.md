---
title: 6.4 Repàs i Preparació per a l'Examen
description: Conclusió del curs.
sidebar:
  order: 4
---

## Resum d'Ordres Clau

| Categoria | Ordres a Dominar |
| :--- | :--- |
| **Fitxers** | `ls`, `cd`, `cp`, `mv`, `rm`, `mkdir`, `find`, `tar` |
| **Text** | `grep`, `cat`, `less`, `head`, `tail`, `vi` |
| **Usuaris** | `useradd`, `passwd`, `chmod`, `chown`, `sudo` |
| **Sistema** | `systemctl`, `journalctl`, `ps`, `top`, `kill` |
| **Emmagatzematge** | `fdisk`, `lsblk`, `mkfs`, `mount`, `df` |
| **Xarxa** | `ip`, `ping`, `ss`, `nmcli` |

## Consells per al Dia de l'Examen (LFCS / RHCSA)

1.  **Llegeix amb atenció**: Fes exactament el que es demana. Si es demana crear un usuari amb UID 2000, verifica-ho (`id usuari`).
2.  **Verifica la persistència**: Reinicia si està permès (o no n'estàs segur). Assegura't que els muntatges (`/etc/fstab`) i els tallafocs/serveis (`systemctl enable`) sobreviuen a un reinici.
3.  **Utilitza les Pàgines Man**: No tens Google, però tens `man`.
    -   Has oblidat el format de cron? `man 5 crontab`.
    -   Has oblidat les banderes de useradd? `man useradd`.

## Conclusió

Felicitats per completar el temari de **Linux Starlight**. Ara tens la base per gestionar sistemes Linux Enterprise del món real. Segueix practicant!
