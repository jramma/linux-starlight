---
title: Dual Boot con Windows
description: Instala Linux junto a Windows en el mismo disco usando el gestor de arranque GRUB. Guía paso a paso con particionado manual.
sidebar:
  order: 2
---

El **Dual Boot** te permite tener Windows y Linux instalados en el mismo ordenador y elegir cuál arrancar cada vez que enciendes el equipo. Es la opción ideal si necesitas mantener Windows para aplicaciones específicas pero quieres usar Linux como sistema principal.

## ¿Cómo funciona?

Cuando instalas Linux junto a Windows, el instalador de Linux configura **GRUB** (Grand Unified Bootloader) como gestor de arranque. Al encender el ordenador, aparece un menú donde puedes elegir entre Windows y Linux antes de que arranque ninguno de los dos.

```
┌─────────────────────────────────────┐
│         GNU GRUB  2.12              │
│                                     │
│  * Ubuntu GNU/Linux                 │
│    Windows Boot Manager             │
│    Ubuntu (recovery mode)           │
│                                     │
│  Usa ↑↓ para navegar, Enter para    │
│  seleccionar                        │
└─────────────────────────────────────┘
```

---

## Antes de empezar

### Requisitos previos

- Un [USB booteable](./bootable-usb) con tu distribución Linux
- Al menos **50 GB** de espacio libre en el disco (100 GB recomendado)
- Acceso a Windows como administrador
- Conexión a internet (recomendado)

### Paso 1 — Desactiva Fast Startup en Windows

Windows tiene una característica llamada **Inicio Rápido** que puede causar problemas con el Dual Boot al no liberar correctamente el disco.

1. Abre el **Panel de Control** → **Opciones de energía**
2. Haz clic en **Elegir el comportamiento de los botones de inicio/apagado**
3. Haz clic en **Cambiar la configuración actualmente no disponible**
4. **Desmarca** la casilla "Activar inicio rápido (recomendado)"
5. Guarda los cambios

### Paso 2 — Desactiva Secure Boot (si es necesario)

Algunas distribuciones como Ubuntu funcionan con Secure Boot activado, pero otras requieren desactivarlo:

1. Reinicia y entra en la **BIOS/UEFI** (pulsando `F2`, `F10`, `Del` o `Supr`)
2. Navega a **Security** o **Boot**
3. Busca **Secure Boot** y ponlo en **Disabled**
4. Guarda y reinicia

### Paso 3 — Libera espacio en Windows

Necesitas crear espacio no asignado en el disco para Linux:

1. Haz clic derecho en el botón Inicio → **Administración de discos**
2. Haz clic derecho en la partición de Windows (normalmente `C:`)
3. Selecciona **Reducir volumen**
4. Introduce el tamaño a liberar (en MB). Ejemplos:
   - 50.000 MB → ~50 GB (mínimo)
   - 100.000 MB → ~100 GB (recomendado)
5. Haz clic en **Reducir**

Verás el espacio liberado en gris como **No asignado**.

---

## Instalación de Linux

### Paso 4 — Arranca desde el USB

1. Reinicia el ordenador con el USB conectado
2. Entra en el **menú de arranque** (normalmente `F12` o `F8`)
3. Selecciona tu pendrive y arranca el instalador de Linux

### Paso 5 — Configura el tipo de instalación

Cuando el instalador te pregunte por el tipo de instalación, **no elijas "Borrar disco"**. Elige la opción correcta según tu distribución:

**Ubuntu / Linux Mint:**
- Selecciona **"Instalar junto a Windows Boot Manager"**
- El instalador detectará Windows automáticamente y gestionará el espacio

**Opción manual (recomendada para mayor control):**
- Selecciona **"Algo más"** o **"Particionado manual"**
- Crea las particiones en el espacio **No asignado**:

| Partición | Tipo | Tamaño | Punto de montaje |
|-----------|------|--------|------------------|
| EFI (si UEFI) | EFI System | 512 MB | `/boot/efi` |
| Swap | Linux swap | = RAM (máx. 8 GB) | swap |
| Root | ext4 | Resto del espacio | `/` |

> **No toques las particiones de Windows** (NTFS). Solo trabaja sobre el espacio "No asignado".

### Paso 6 — Instala el gestor de arranque

El instalador preguntará **dónde instalar GRUB**:

- **En sistemas UEFI:** GRUB se instala automáticamente en la partición EFI. No necesitas hacer nada especial.
- **En sistemas BIOS/MBR:** Selecciona el disco principal (p. ej., `/dev/sda`), **no una partición** (`/dev/sda1`).

### Paso 7 — Completa la instalación

1. Configura tu nombre de usuario, contraseña y zona horaria
2. Haz clic en **Instalar ahora**
3. Espera a que finalice la instalación (10-30 minutos según el equipo)
4. Reinicia cuando se te indique y **retira el USB**

---

## Primer arranque con GRUB

Al reiniciar, aparecerá el menú de GRUB con las opciones disponibles. Si no aparece y arranca directamente Windows:

1. Reinicia y entra en la BIOS/UEFI
2. Cambia el **orden de arranque** para que GRUB (o tu distribución Linux) esté primero
3. Guarda y reinicia

### Ajustar el tiempo de espera de GRUB

Por defecto GRUB espera 10 segundos. Para cambiarlo, en Linux edita:

```bash
sudo nano /etc/default/grub
```

Modifica la línea:
```
GRUB_TIMEOUT=5
```

Aplica los cambios:
```bash
sudo update-grub
```

---

## Problemas comunes

| Problema | Solución |
|----------|----------|
| Windows no aparece en GRUB | Ejecuta `sudo update-grub` desde Linux |
| El equipo arranca directamente en Windows | Cambia el orden de arranque en BIOS |
| Error al reducir la partición de Windows | Desfragmenta el disco y deshabilita Hibernate |
| GRUB no aparece en equipos UEFI | Activa GRUB en la configuración de arranque EFI |

---

## Desinstalar Linux del Dual Boot

Si en algún momento quieres eliminar Linux y quedarte solo con Windows:

1. Arranca Windows
2. Abre **Disk Management** y elimina las particiones de Linux (formato ext4 y swap)
3. Restaura el gestor de arranque de Windows con:
   ```
   bootrec /fixmbr
   bootrec /fixboot
   bootrec /rebuildbcd
   ```
   (ejecutado desde la recuperación de Windows)
