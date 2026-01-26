---
title: 1.3 Particionament i Procés d'Arrencada
description: Comprendre els esquemes de disc, sistemes de fitxers i com arrenca Linux.
sidebar:
  order: 4
---

## Conceptes Bàsics d'Emmagatzematge

### L'Estàndard de Jerarquia de Sistemes de Fitxers (FHS)
Linux organitza els fitxers en una estructura d'arbre, no lletres d'unitat (C:, D:). Tot comença a `/` (arrel).

| Camí | Propòsit |
| :--- | :--- |
| `/` | **Arrel**. El cim de la jerarquia. |
| `/boot` | Kernel (`vmlinuz`), initramfs i configuració del gestor d'arrencada. |
| `/etc` | Fitxers de **Configuració**. |
| `/home` | Dades d'usuari (ex., `/home/alice`). |
| `/root` | Directori personal per a l'usuari `root`. |
| `/var` | Dades **Variables**: registres, bases de dades, llocs web (`/var/www`). |
| `/tmp` | Fitxers temporals (sovint esborrats en reiniciar). |
| `/bin`, `/usr/bin` | Binaris (programes) com `ls`, `cp`. |

### Esquemes de Particionament

#### MBR (Master Boot Record)
-   Llegat.
-   Màx 4 particions primàries.
-   Màx 2TB de mida de disc.

#### GPT (GUID Partition Table)
-   Estàndard modern (part de l'especificació UEFI).
-   Particions pràcticament il·limitades.
-   Suporta discs massius (Zettabytes).

**Disposició de Particions Recomanada**:
1.  **Partició del Sistema EFI** (100-500MB): FAT32. Necessària per a l'arrencada UEFI.
2.  `/boot` (1GB): Ext4/XFS.
3.  `swap`: Memòria virtual. (Regla general: 1x-2x RAM, tot i que menys crític amb RAM massiva moderna).
4.  `/` (Arrel): La resta del disc (sovint gestionant `/home` i `/var` a dins, o separant-los per seguretat).

## El Procés d'Arrencada

Com arribem des del botó d'encesa fins al prompt d'inici de sessió?

```mermaid
graph TD
    A[BIOS / UEFI] -->|POST & Hardware Init| B[Bootloader (GRUB2)]
    B -->|Selects OS| C[Kernel]
    C -->|Mounts Initramfs| D[Initramfs (Temporary Root)]
    D -->|Loads Drivers| E[Real Root Filesystem Mounted]
    E -->|Starts Init Process| F[systemd (PID 1)]
    F -->|Parallel Execution| G[Targets & Services]
    G --> H[Login Prompt]
```

1.  **BIOS/UEFI**: El microprogramari inicialitza el maquinari i busca el dispositiu d'arrencada.
2.  **GRUB2 (Grand Unified Bootloader)**: Menú detallat per seleccionar el Kernel. Carrega el Kernel a la memòria.
3.  **Kernel**: El sistema operatiu central. Inicialitza els controladors de maquinari.
4.  **Initramfs**: Un petit sistema de fitxers temporal carregat a la RAM. Ajuda al kernel a arreglar el muntatge del disc dur *real* (ex., carregant claus de desxifrat o controladors especialitzats).
5.  **Init (Systemd)**: El primer procés (`PID 1`). Llegeix fitxers de configuració i inicia tots els altres serveis (Xarxa, SSH, Servidor Web) en paral·lel.

> [!TIP] Conceptes Relacionats
> Aprèn més sobre la gestió de discs al **[Mòdul 4: Discs i Particions](../module-4/1-disks-partitions/)**.
