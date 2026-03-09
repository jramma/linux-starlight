---
title: Instal·lació en Màquina Virtual
description: Instal·la Linux dins de Windows utilitzant VirtualBox o VMware sense risc i sense modificar el teu disc dur.
sidebar:
  order: 4
---

Una **màquina virtual** (VM) és un programari que emula un ordinador complet dins del teu sistema operatiu actual. Pots instal·lar Linux en una VM i executar-lo com una aplicació més dins de Windows, sense tocar el teu disc ni arriscar les teves dades.

## Per què utilitzar una màquina virtual?

- **Sense risc:** No modifiques el teu sistema real en absolut
- **Ideal per aprendre:** Pots trencar coses i restaurar amb facilitat
- **Prova distros:**Experimenta amb diferents distribucions abans de comprometre't
- **Snapshots:** Guarda l'estat de la VM i torna enrere quan vulguis
- **Múltiples sistemes:** Pots tenir diverses VMs alhora

> L'inconvenient és el rendiment: una VM usa els recursos del host (CPU, RAM, disc), per la qual cosa el sistema virtualitzat serà més lent que un de natiu.

---

## Opció 1 — VirtualBox (gratuït i de codi obert)

[VirtualBox](https://www.virtualbox.org) d'Oracle és el virtualitzador més popular i totalment gratuït. Funciona a Windows, macOS i Linux.

### Instal·lació de VirtualBox

1. Descarrega VirtualBox des de [virtualbox.org](https://www.virtualbox.org/wiki/Downloads)
2. Descarrega també l'**Extension Pack** de la mateixa pàgina (afegeix suport USB 3.0, RDP, etc.)
3. Instal·la VirtualBox executant l'instal·lador `.exe`
4. Instal·la l'Extension Pack: obre VirtualBox → **Arxiu → Preferències → Extensions → Afegeix**

### Crear una nova màquina virtual

1. Obre VirtualBox i fes clic a **Nova**
2. Configura la VM:

```
Nom:            Ubuntu 24.04
Tipus:           Linux
Versió:          Ubuntu (64-bit)
```

3. **Memòria RAM:** Assigna almenys 2 GB (2048 MB). Recomanat: 4 GB.

   > No assignis més del 50% de la teva RAM total per no ralentitzar Windows.

4. **Disco duro virtual:**
   - Selecciona **Crear un disc dur virtual ara**
   - Tipus: **VDI (VirtualBox Disk Image)**
   - Emmagatzematge: **Reservat dinàmicament** (el fitxer creix segons l'ús)
   - Mida: mínim **25 GB**, recomanat **50 GB**

### Configurar la VM abans d'instal·lar

Abans d'arrencar, ajusta alguns paràmetres per millorar el rendiment:

1. Selecciona tu VM → **Configuración → Sistema**
   - **Processadors:** Assigna 2 o més CPU (màxim la meitat dels teus nuclis)
   - **Chipset:** ICH9 (millor compatibilitat)
   - **Habilitar EFI:** Només si el teu sistema real usa UEFI

2. **Pantalla:**
   - Memòria de vídeo: **128 MB**
   - Activa **Acceleració 3D** si la teva GPU ho suporta

3. **Almacenamiento:**
   - Al controlador IDE, fes clic a la icona de CD buit
   - Fes clic a la icona de disc → **Selecciona un fitxer de disc**
   - Tria la ISO de Linux que vas descarregar

### Instalar Linux en VirtualBox

1. Fes doble clic a la VM per arrencar-la
2. S'iniciarà el **Live Desktop** de Linux des de la ISO
3. Fes doble clic a **"Instal·lar Ubuntu"** (o similar)
4. Segueix l'assistent d'instal·lació:
   - Tipus d'instal·lació: **"Esborrar disc i instal·lar"** (només esborra el disc virtual)
   - Configura usuari, contrasenya i zona horària
5. En acabar, la VM es reiniciarà i expulsarà la ISO automàticament
6. Linux quedarà instal·lat al disc virtual

### Guest Additions (molt recomanat)

Les **Guest Additions** milloren enormement l'experiència:
- Pantalla a mida completa i resolució automàtica
- Copiar i enganxar entre Windows i Linux
- Carpetes compartides
- Millor rendiment gràfic

Per instal·lar-les, dins de Linux amb VirtualBox:
```bash
# En Ubuntu/Debian
sudo apt install virtualbox-guest-additions-iso
```
O des del menú de VirtualBox: **Dispositius → Inserir imatge de CD de Guest Additions**

---

## Opció 2 — VMware Workstation Player (gratuït per a ús personal)

[VMware Workstation Player](https://www.vmware.com/products/workstation-player.html) és una altra excel·lent opció, amb una interfície més polida i millor rendiment que VirtualBox en molts casos.

### Instal·lació

1. Descarrega VMware Workstation Player des de la web de VMware
2. Instal·la el `.exe` i reinicia si se sol·licita

### Crear una nueva VM

1. Obre VMware → **Crear nova màquina virtual**
2. Selecciona **Instal·lador de disc (ISO)** i tria la teva ISO de Linux
3. VMware detectarà automàticament el sistema i configurarà **Easy Install**:
   - Omple el nom d'usuari i contrasenya
   - VMware instal·larà Linux automàticament sense assistent manual

4. Configura els recursos:
   - **RAM:** 2-4 GB mínim
   - **CPU:** 2 nuclis
   - **Disc:** 60 GB (creixement dinàmic)

5. Fes clic a **Finalitzar** i arrenca la VM

VMware instal·la automàticament **VMware Tools** (equivalent a Guest Additions), per la qual cosa la integració amb el sistema host és gairebé immediata.

---

## Comparativa VirtualBox vs VMware Player

| Característica | VirtualBox | VMware Player |
|---------------|------------|---------------|
| Preu | Gratuït | Gratuït (personal) |
| Codi obert | ✅ Sí | ❌ No |
| Rendiment | ⭐⭐ Bo | ⭐⭐⭐ Excel·lent |
| Facilitat d'ús | ⭐⭐ Mitjana | ⭐⭐⭐ Alta |
| Snapshots | ✅ Sí | ❌ Només en versió Pro |
| USB 3.0 | Només amb Extension Pack | ✅ Sí |
| Plataformes | Win/Mac/Linux | Win/Linux |

---

## Configuració recomanada de la VM

Per a una experiència fluida en una màquina amb 8 GB de RAM:

```
RAM assignada:    2-4 GB
CPUs assignats:   2 nuclis
VRAM:            128 MB
Disc:            50 GB (dinàmic)
Xarxa:            NAT (accés a internet compartit)
```

---

## Trucs útils

### Carpetes compartides entre Windows i Linux

A VirtualBox, després d'instal·lar Guest Additions:
1. **Configuració → Carpetes compartides → Afegeix**
2. Selecciona una carpeta de Windows i assigna-li un nom
3. Des de Linux estarà disponible a `/media/sf_NomCarpeta`

### Mode sense costura (Seamless Mode)

VirtualBox et permet integrar les finestres de Linux a l'escriptori de Windows:
- Drecera: `Host + L` (on Host és la tecla `Ctrl dret` per defecte)

### Snapshots per experimentar sense por

Abans de fer canvis arriscats, crea un snapshot:
- VirtualBox: **Màquina → Prendre instantània**
- Si alguna cosa surt malament, restaura el snapshot en segons

---

## Limitacions de les màquines virtuals

- **Sense accés a GPU dedicada** (excepte amb tecnologies avançades com GPU Passthrough)
- **Rendiment limitat** en compartir recursos amb el host
- **No apte per a gaming** ni workloads intensius de GPU
- **El suport de USB** pot ser problemàtic en alguns casos

Per a un ús seriós o de producció, considera la [instal·lació en Dual Boot](./certification) o la [instal·lació neta](./resources).
