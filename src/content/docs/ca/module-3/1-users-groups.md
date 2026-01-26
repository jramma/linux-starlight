---
title: 3.1 Gestió d'Usuaris i Grups
description: Gestió de l'accés al sistema.
sidebar:
  order: 2
---

## Els Tres Grans Fitxers
L'autenticació a Linux gira al voltant de tres fitxers de text pla a `/etc`.

| Fitxer | Conté | Permisos |
| :--- | :--- | :--- |
| `/etc/passwd` | Informació d'usuari (Shell, Directori personal, UID). | Llegible per tothom (644). |
| `/etc/shadow` | Contrasenyes **xifrades**. | Llegible només per root (600/640). |
| `/etc/group` | Membres de grups. | Llegible per tothom (644). |

(Veure [[/ca/module-2/4-permissions|Gestió de Permisos]] per detalls sobre els modes 644/600)

## Gestió d'Usuaris

Crear, modificar i eliminar usuaris.

```bash
# Crear un usuari anomenat 'anna' amb un directori personal (-m)
sudo useradd -m -s /bin/bash anna

# Establir o canviar la contrasenya
sudo passwd anna

# Modificar: Afegir 'anna' al grup 'developers' (mode afegir -aG)
sudo usermod -aG developers anna

# Bloquejar compte (deshabilitar inici de sessió)
sudo usermod -L anna

# Eliminar usuari (i el seu directori personal)
sudo userdel -r anna
```

## Gestió de Grups

```bash
# Crear un nou grup
sudo groupadd developers

# Eliminar un grup
sudo groupdel developers
```

## Exercicis Pràctics

1.  **Nou Recluta**:
    -   Crea un nou usuari `intern`.
    -   Assigna-li una contrasenya.
    -   Verifica la seva entrada a `/etc/passwd`.
2.  **Treball en Grup**:
    -   Crea un grup anomenat `ops`.
    -   Afegeix el teu usuari actual i l'usuari `intern` a aquest grup.
    -   Verifica amb l'ordre `groups` (p. ex., `groups intern`).
3.  **Neteja**:
    -   Elimina l'usuari `intern` i el seu directori personal.
    -   Elimina el grup `ops`.
