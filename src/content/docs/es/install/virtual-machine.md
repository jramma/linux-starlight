---
title: Instalación en Máquina Virtual
description: Instala Linux dentro de Windows usando VirtualBox o VMware sin riesgo y sin modificar tu disco duro.
sidebar:
  order: 4
---

Una **máquina virtual** (VM) es un software que emula un ordenador completo dentro de tu sistema operativo actual. Puedes instalar Linux en una VM y ejecutarlo como una aplicación más dentro de Windows, sin tocar tu disco ni arriesgar tus datos.

## ¿Por qué usar una máquina virtual?

- **Sin riesgo:** No modificas tu sistema real en absoluto
- **Ideal para aprender:** Puedes romper cosas y restaurar con facilidad
- **Prueba distros:** Experimenta con diferentes distribuciones antes de comprometerte
- **Snapshots:** Guarda el estado de la VM y vuelve atrás cuando quieras
- **Múltiples sistemas:** Puedes tener varias VMs a la vez

> La desventaja es el rendimiento: una VM usa los recursos del host (CPU, RAM, disco), por lo que el sistema virtualizado será más lento que uno nativo.

---

## Opción 1 — VirtualBox (gratuito y de código abierto)

[VirtualBox](https://www.virtualbox.org) de Oracle es el virtualizador más popular y totalmente gratuito. Funciona en Windows, macOS y Linux.

### Instalación de VirtualBox

1. Descarga VirtualBox desde [virtualbox.org](https://www.virtualbox.org/wiki/Downloads)
2. Descarga también el **Extension Pack** de la misma página (añade soporte USB 3.0, RDP, etc.)
3. Instala VirtualBox ejecutando el instalador `.exe`
4. Instala el Extension Pack: abre VirtualBox → **Archivo → Preferencias → Extensiones → Añadir**

### Crear una nueva máquina virtual

1. Abre VirtualBox y haz clic en **Nueva**
2. Configura la VM:

```
Nombre:            Ubuntu 24.04
Tipo:              Linux
Versión:           Ubuntu (64-bit)
```

3. **Memoria RAM:** Asigna al menos 2 GB (2048 MB). Recomendado: 4 GB.

   > No asignes más del 50% de tu RAM total para no ralentizar Windows.

4. **Disco duro virtual:**
   - Selecciona **Crear un disco duro virtual ahora**
   - Tipo: **VDI (VirtualBox Disk Image)**
   - Almacenamiento: **Reservado dinámicamente** (el archivo crece según el uso)
   - Tamaño: mínimo **25 GB**, recomendado **50 GB**

### Configurar la VM antes de instalar

Antes de arrancar, ajusta algunos parámetros para mejor rendimiento:

1. Selecciona tu VM → **Configuración → Sistema**
   - **Procesadores:** Asigna 2 o más CPU (máximo la mitad de tus núcleos)
   - **Chipset:** ICH9 (mejor compatibilidad)
   - **Habilitar EFI:** Solo si tu sistema real usa UEFI

2. **Pantalla:**
   - Memoria de vídeo: **128 MB**
   - Activa **Aceleración 3D** si tu GPU lo soporta

3. **Almacenamiento:**
   - En el controlador IDE, haz clic en el icono de CD vacío
   - Haz clic en el icono de disco → **Seleccionar un archivo de disco**
   - Elige la ISO de Linux que descargaste

### Instalar Linux en VirtualBox

1. Haz doble clic en la VM para arrancarla
2. Se iniciará el **Live Desktop** de Linux desde la ISO
3. Haz doble clic en **"Instalar Ubuntu"** (o similar)
4. Sigue el asistente de instalación:
   - Tipo de instalación: **"Borrar disco e instalar"** (solo borra el disco virtual)
   - Configura usuario, contraseña y zona horaria
5. Al terminar, la VM se reiniciará y expulsará la ISO automáticamente
6. Linux quedará instalado en el disco virtual

### Guest Additions (muy recomendado)

Las **Guest Additions** mejoran enormemente la experiencia:
- Pantalla a tamaño completo y resolución automática
- Copiar y pegar entre Windows y Linux
- Carpetas compartidas
- Mejor rendimiento gráfico

Para instalarlas, dentro de Linux con VirtualBox:
```bash
# En Ubuntu/Debian
sudo apt install virtualbox-guest-additions-iso
```
O desde el menú de VirtualBox: **Dispositivos → Insertar imagen de CD de Guest Additions**

---

## Opción 2 — VMware Workstation Player (gratuito para uso personal)

[VMware Workstation Player](https://www.vmware.com/products/workstation-player.html) es otra excelente opción, con una interfaz más pulida y mejor rendimiento que VirtualBox en muchos casos.

### Instalación

1. Descarga VMware Workstation Player desde la web de VMware
2. Instala el `.exe` y reinicia si se solicita

### Crear una nueva VM

1. Abre VMware → **Crear nueva máquina virtual**
2. Selecciona **Instalador de disco (ISO)** y elige tu ISO de Linux
3. VMware detectará automáticamente el sistema y configurará **Easy Install**:
   - Rellena el nombre de usuario y contraseña
   - VMware instalará Linux automáticamente sin asistente manual

4. Configura los recursos:
   - **RAM:** 2-4 GB mínimo
   - **CPU:** 2 núcleos
   - **Disco:** 60 GB (crecimiento dinámico)

5. Haz clic en **Finalizar** y arranca la VM

VMware instala automáticamente **VMware Tools** (equivalente a Guest Additions), por lo que la integración con el sistema host es casi inmediata.

---

## Comparativa VirtualBox vs VMware Player

| Característica | VirtualBox | VMware Player |
|---------------|------------|---------------|
| Precio | Gratuito | Gratuito (personal) |
| Código abierto | ✅ Sí | ❌ No |
| Rendimiento | ⭐⭐ Bueno | ⭐⭐⭐ Excelente |
| Facilidad de uso | ⭐⭐ Media | ⭐⭐⭐ Alta |
| Snapshots | ✅ Sí | ❌ Solo en versión Pro |
| USB 3.0 | Solo con Extension Pack | ✅ Sí |
| Plataformas | Win/Mac/Linux | Win/Linux |

---

## Configuración recomendada de la VM

Para una experiencia fluida en una máquina con 8 GB de RAM:

```
RAM asignada:    2-4 GB
CPUs asignados:  2 núcleos
VRAM:            128 MB
Disco:           50 GB (dinámico)
Red:             NAT (acceso a internet compartido)
```

---

## Trucos útiles

### Carpetas compartidas entre Windows y Linux

En VirtualBox, tras instalar Guest Additions:
1. **Configuración → Carpetas compartidas → Añadir**
2. Selecciona una carpeta de Windows y asígnale un nombre
3. Desde Linux estará disponible en `/media/sf_NombreCarpeta`

### Modo sin costura (Seamless Mode)

VirtualBox te permite integrar las ventanas de Linux en el escritorio de Windows:
- Atajo: `Host + L` (donde Host es la tecla `Ctrl derecho` por defecto)

### Snapshots para experimentar sin miedo

Antes de hacer cambios arriesgados, crea un snapshot:
- VirtualBox: **Máquina → Tomar instantánea**
- Si algo sale mal, restaura el snapshot en segundos

---

## Limitaciones de las máquinas virtuales

- **Sin acceso a GPU dedicada** (excepto con tecnologías avanzadas como GPU Passthrough)
- **Rendimiento limitado** al compartir recursos con el host
- **No apto para gaming** ni workloads intensivos de GPU
- **El soporte de USB** puede ser problemático en algunos casos

Para un uso serio o de producción, considera la [instalación en Dual Boot](./certification) o la [instalación limpia](./resources).
