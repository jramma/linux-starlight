---
title: Crear un USB Booteable
description: Aprèn a crear un USB d'arrencada amb una distribució Linux des de Windows o Linux, utilitzant Rufus, Balena Etcher o dd.
sidebar:
  order: 1
---

Un **USB booteable** (o d'arrencada) és el primer pas per instal·lar Linux en qualsevol equip. Conté la imatge ISO del sistema operatiu i permet arrencar l'ordinador des d'ell per iniciar la instal·lació.

## Què necessites?

- Un pendrive d'almenys **4 GB** (8 GB recomanat)
- La **imatge ISO** de la teva distribució Linux favorita (Ubuntu, Debian, Fedora, etc.)
- Una eina de gravació

> **⚠ Advertència:** El procés esborrarà totes les dades del pendrive. Fes una còpia de seguretat abans de continuar.

---

## Opció 1 — Rufus (Windows)

[Rufus](https://rufus.ie) és l'eina més popular a Windows per crear USB booteables. És gratuïta, portable i molt senzilla d'utilitzar.

### Pasos

1. Descarrega Rufus des de [rufus.ie](https://rufus.ie) i inicia'l (no requereix instal·lació).
2. Connecta el teu pendrive. Rufus el detectarà automàticament a **Dispositiu**.
3. Fes clic a **Seleccionar** i tria la ISO de Linux que vas descarregar.
4. Configuració recomanada:
   - **Esquema de partició:** GPT (per a equips moderns amb UEFI) o MBR (per a equips antics amb BIOS)
   - **Sistema de destinació:** UEFI (no CSM) si el teu equip és modern
   - **Sistema de fitxers:** FAT32
5. Fes clic a **Començar**. Si Rufus pregunta pel mode d'escriptura, tria **Escriure en mode imatge ISO (recomanat)**.
6. Confirma l'esborrat del pendrive i espera que finalitzi.

```
Dispositiu:        [El teu pendrive]      ← Selecciona el pendrive correcte
Tipus d'arrencada:   [Imatge de disc o ISO]
Selecció d'arrencada: ubuntu-24.04-desktop-amd64.iso
Esquema de partició: GPT
Sistema de destinació: UEFI (no CSM)
Sistema de fitxers: FAT32
```

✅ Quan la barra arribi al 100% i aparegui **LLEST**, el USB està preparat.

---

## Opció 2 — Balena Etcher (Windows, macOS i Linux)

[Balena Etcher](https://etcher.balena.io) és una eina multiplataforma amb interfície gràfica molt intuïtiva. Ideal si busques simplicitat.

### Pasos

1. Descarrega Etcher des de [etcher.balena.io](https://etcher.balena.io) i instal·la'l.
2. Obre Etcher. Veuràs tres botons:
   - **Flash from file** → Selecciona la ISO de Linux.
   - **Select target** → Tria el pendrive.
   - **Flash!** → Inicia el procés.
3. Etcher verificarà automàticament la imatge en acabar.

> Etcher valida l'escriptura per defecte, per la qual cosa és molt fiable encara que una mica més lent que Rufus.

---

## Opció 3 — Comandament `dd` (Linux / macOS)

Si ja utilitzes Linux o macOS, pots crear el USB des de la terminal amb el comandament `dd`. És el mètode més ràpid i directe, encara que sense interfície gràfica.

### Pasos

1. Identifica el dispositiu del pendrive (sense muntar):
   ```bash
   lsblk
   ```
   Busca el teu pendrive a la llista (p. ex., `/dev/sdb`). **No utilitzis la partició** (`/dev/sdb1`), sinó el disc complet (`/dev/sdb`).

2. Escriu la ISO al pendrive:
   ```bash
   sudo dd if=/ruta/a/ubuntu.iso of=/dev/sdb bs=4M status=progress oflag=sync
   ```
   - `if=` → Ruta al fitxer ISO
   - `of=` → Dispositiu del pendrive (`/dev/sdb`)
   - `bs=4M` → Mida del bloc (millora la velocitat)
   - `status=progress` → Mostra el progrés en temps real

3. Espera que el comandament finalitzi. El prompt tornarà quan estigui llest.

> **⚠ Precaució:** Assegura't d'apuntar al pendrive correcte. `dd` sobreescriurà sense demanar confirmació.

---

## Arrencar des del USB

Un cop creat el USB:

1. Reinicia l'ordinador amb el pendrive connectat.
2. Entra a la **BIOS/UEFI** (normalment prement `F2`, `F10`, `F12` o `Supr` durant l'arrencada, segons el fabricant).
3. Canvia l'**ordre d'arrencada** perquè el USB estigui primer, o utilitza el **menú d'arrencada ràpida**.
4. Guarda i reinicia. El sistema arrencarà des del USB amb l'instal·lador de Linux.

---

## Comparativa d'eines

| Eina | Sistema | Interfície | Velocitat | Verificació |
|-------------|---------|----------|-----------|--------------|
| Rufus | Windows | Gràfica | ⚡ Ràpida | Opcional |
| Balena Etcher | Win/Mac/Linux | Gràfica | 🐢 Mitjana | Automàtica |
| `dd` | Linux/macOS | Terminal | ⚡ Rápida | Manual |

---

## Pròxim pas

Amb el USB llest, pots continuar amb qualsevol d'aquestes opcions d'instal·lació:

- [Instal·lació en Dual Boot amb Windows](./certification) — Mantén Windows i Linux al mateix disc
- [Instal·lació Neta](./resources) — Reemplaça completament el sistema operatiu
- [Instal·lació en Màquina Virtual](./virtual-machine) — Sense risc, dins de Windows
