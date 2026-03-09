---
title: Instal·lació Neta de Linux
description: Guia completa per realitzar una instal·lacióneta de Linux, reemplaçant qualsevol sistema operatiu existent al disc.
sidebar:
  order: 3
---

Una **instal·lació neta** significa que Linux serà l'únic sistema operatiu al teu disc. S'esborraran totes les dades i particions existents. És l'opció recomanada si vols el millor rendiment, tens un equip dedicat a Linux o simplement vols començar des de zero.

## Quan triar aquesta opció?

- Vols **màxim rendiment** sense compartir recursos amb Windows
- L'ordinador serà **exclusivament per a Linux"
- Tens una còpia de seguretat de totes les teves dades
- Vols una configuració **neta i sense residus** del sistema anterior

> **⚠ Advertència:** Aquest procés **esborrarà tot el contingut del disc**. Guarda una còpia de seguretat de tots els teus fitxers importants abans de continuar.

---

## Preparació

### 1. Còpia de seguretat

Abans de començar, assegura't de tenir còpies de:

- Documents, fotos i fitxers personals
- Exportacions de marcadors del navegador
- Contrasenyes (gestors de contrasenyes, etc.)
- Llicències de programari importants
- Configuracions d'aplicacions (si les necessites)

### 2. Obtén la ISO de Linux

Descarrega la imatge ISO de la teva distribució des de la pàgina oficial:

| Distribució | URL Oficial                                                | Tipus                           |
| ------------ | ----------------------------------------------------------- | ------------------------------ |
| Ubuntu       | [ubuntu.com](https://ubuntu.com/download)                   | Escriptori / Servidor         |
| Debian      | [debian.org](https://www.debian.org/distrib/)               | Universal                     |
| Fedora      | [fedoraproject.org](https://fedoraproject.org/workstation/) | Escriptori                     |
| Linux Mint  | [linuxmint.com](https://linuxmint.com/download.php)         | Escriptori (fàcil per a nous)  |
| Rocky Linux  | [rockylinux.org](https://rockylinux.org/download)           | Servidor empresarial          |

### 3. Crea el USB booteable

Segueix la guia de [Crear un USB Booteable](./bootable-usb) per preparar el teu pendrive.

---

## Instal·lació pas a pas

### Pas 1 — Configura la BIOS/UEFI

1. Reinicia l'ordinador amb el USB connectat
2. Entra a la BIOS/UEFI (prement `F2`, `F10`, `F12` o `Del` segons el fabricant)
3. Estableix el USB com a **primer dispositiu d'arrencada**
4. **Guarda i reinicia** (`F10` normalment)

### Pas 2 — Inicia l'instal·lador

En arrencar des del USB veuràs el **Live Desktop** o directament l'instal·lador, segons la distribució. La majoria ofereixen una sessió de prova abans d'instal·lar.

Per iniciar la instal·lació, fes doble clic a la icona **"Instal·lar Ubuntu"** (o similar) a l'escriptori.

### Pas 3 — Idioma i teclat

1. Selecciona **Català** o **Español** com a idioma d'instal·lació
2. Configura la distribució del teclat (Español és l'habitual a Espanya)
3. Clic a **Continuar**

### Pas 4 — Tipus d'instal·lació

Aquesta és la pantalla més important. Per a una instal·lació neta:

**Ubuntu / Linux Mint:**

- Selecciona **"Esborrar disc i instal·lar Ubuntu"**
- Això eliminarà tot el contingut del disc i crearà automàticament les particions necessàries

**Participació manual (avançat):**

Si prefereixes control total sobre les particions, selecciona **"Alguna cosa més"** i crea:

```
Disc: /dev/sda (o nvme0n1 per a NVMe)

Partició 1:
  Tipus:   EFI System Partition
  Mida:   512 MB
  Ús:      Sistema EFI

Partició 2:
  Tipus:   ext4
  Mida:    Tot la resta (p.ex. 200 GB)
  Punt:    /
  Ús:      Sistema arrel

Partició 3 (opcional):
  Tipus:   Linux swap
 Mida:    Igual a la teva RAM (màxim 8 GB)
  Ús:      Memòria d'intercanvi
```

> En sistemes moderns amb 16 GB de RAM o més, la swap és opcional si no uses hibernació.

### Pas 5 — Zona horària

Selecciona la teva zona horària al mapa. Per a Espanya: **Madrid**.

### Pas 6 — Configuració de l'usuari

Omple les dades del teu compte:

- **El teu nom:** El nom que apareixerà al sistema
- **Nom de l'equip:** El hostname (p. ex., `mi-pc-linux`)
- **Nom d'usuari:** El teu login (minúscules, sense espais)
- **Contrasenya:**Tria una contrasenya segura i confirma-la
- **Inici de sessió:** Pots triar que sol·liciti contrasenya o que iniciï automàticament

### Pas 7 — Instal·lació

Fes clic a **"Instal·lar ara"** i confirma quan pregunti si desitges esborrar el disc.

El procés d'instal·lació triga entre **10 i 30 minuts** segons la velocitat del disc i l'ordinador.

---

## Post-instal·lació

Un cop finalitzada la instal·lació i reiniciat el sistema, realitza aquests passos bàsics:

### Actualitzar el sistema

```bash
# En distribucions basades en Debian (Ubuntu, Mint, etc.)
sudo apt update && sudo apt upgrade -y

# En distribucions basades en Red Hat (Fedora, Rocky, etc.)
sudo dnf update -y
```

### Instal·lar controladors addicionals

En Ubuntu i derivats pots utilitzar `ubuntu-drivers` per detectar i instal·lar controladors propietaris (targetes gràfiques NVIDIA, etc.):

```bash
sudo ubuntu-drivers autoinstall
```

O des de la interfície gràfica: **Configuració → Programari i actualitzacions → Controladors addicionals**

### Instal·lar programari essencial

```bash
# Eines bàsiques de desenvolupament
sudo apt install build-essential git curl wget -y

# Navegador (si no ve inclòs)
sudo apt install firefox -y

# Reproductor multimèdia
sudo apt install vlc -y
```

---

## Verificar la instal·lació

Comprova que tot funciona correctament:

```bash
# Información del sistema
uname -a

# Espacio en disco
df -h

# Memoria RAM
free -h

# Dispositivos de hardware
lspci
```

---

## Comparativa: Instal·lació Neta vs Dual Boot

| Aspecte          | Instal·lació Neta        | Dual Boot              |
| ---------------- | ------------------------ | ---------------------- |
| Rendiment     | ⭐⭐⭐ Òptim            | ⭐⭐ Bo               |
| Conserva Windows | ❌ No                    | ✅ Sí                  |
| Espai al disc | ⭐⭐⭐ Màxim disponible | ⭐⭐ Compartit        |
| Complexitat      | ⭐⭐ Mitjana             | ⭐⭐⭐ Alta            |
| Recomanat per a | Usuaris compromesos   | Usuaris de transició |
