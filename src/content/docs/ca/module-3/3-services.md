---
title: 3.3 Gestió de Serveis amb Systemd
description: Control de dimonis en segon pla.
sidebar:
  order: 4
---

**Systemd** és el sistema d'inicialització utilitzat per gairebé totes les distribucions principals modernes. Gestiona "Unitats", més comunament "Unitats de Servei" (`.service`). Substitueix sistemes d'inicialització antics i gestiona processos (veure [[/ca/module-2/5-processes|Control de Processos]]) de manera més robusta.

## Ordres Systemctl

L'eina principal per interactuar amb systemd.

| Acció | Ordre | Explicació |
| :--- | :--- | :--- |
| **Iniciar** | `sudo systemctl start nginx` | Iniciar el servei *ara*. |
| **Aturar** | `sudo systemctl stop nginx` | Aturar el servei *ara*. |
| **Reiniciar** | `sudo systemctl restart nginx` | Aturar, i després iniciar. |
| **Recarregar** | `sudo systemctl reload nginx` | Recarregar configuració sense aturar (zero temps d'inactivitat). |
| **Habilitar** | `sudo systemctl enable nginx` | Iniciar automàticament **a l'arrencada**. |
| **Deshabilitar** | `sudo systemctl disable nginx` | No iniciar a l'arrencada. |
| **Estat** | `systemctl status nginx` | Comprobar si està en execució, habilitat, i veure els últims registres. |

### Xuleta: La Combinació "Habilitar i Iniciar"
Sovint voldràs fer les dues coses.

```bash
sudo systemctl enable --now nginx
```

## Fitxers d'Unitat
Les definicions de servei viuen a `/lib/systemd/system/` (predeterminats) i `/etc/systemd/system/` (personalitzats).

## Exercicis Pràctics

1.  **Investigar SSH**:
    -   Comprova l'estat del servei SSH: `systemctl status ssh` (o `sshd`).
    -   Està actiu? Està habilitat?
2.  **Gestionar un Servei de Prova**:
    -   Instal·la `apache2` o `nginx` si pots, o tria un servei existent com `cron`.
    -   Atura el servei. Verifica que està aturat.
    -   Inicia'l de nou.
    -   Deshabilita'l (perquè no s'iniciï a l'arrencada).
    -   Habilita'l de nou.
3.  **Registres**:
    -   Utilitza `journalctl -u ssh` (o `sshd`) per veure els registres específicament per a aquest servei.
