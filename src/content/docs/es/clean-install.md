---
title: Instalación Limpia de Linux
description: Guía completa para realizar una instalación limpia de Linux, reemplazando cualquier sistema operativo existente en el disco.
sidebar:
  order: 3
---

Una **instalación limpia** significa que Linux será el único sistema operativo en tu disco. Se borrarán todos los datos y particiones existentes. Es la opción recomendada si quieres el mejor rendimiento, tienes un equipo dedicado a Linux o simplemente quieres empezar desde cero.

## ¿Cuándo elegir esta opción?

- Quieres **máximo rendimiento** sin compartir recursos con Windows
- El ordenador será **exclusivamente para Linux**
- Tienes una copia de seguridad de todos tus datos
- Quieres una configuración **limpia y sin residuos** del sistema anterior

> **⚠ Advertencia:** Este proceso **borrará todo el contenido del disco**. Guarda una copia de seguridad de todos tus archivos importantes antes de continuar.

---

## Preparación

### 1. Copia de seguridad

Antes de empezar, asegúrate de tener copias de:

- Documentos, fotos y archivos personales
- Exportaciones de marcadores del navegador
- Contraseñas (gestores de contraseñas, etc.)
- Licencias de software importantes
- Configuraciones de aplicaciones (si las necesitas)

### 2. Obtén la ISO de Linux

Descarga la imagen ISO de tu distribución desde la página oficial:

| Distribución | URL Oficial                                                 | Tipo                           |
| ------------ | ----------------------------------------------------------- | ------------------------------ |
| Ubuntu       | [ubuntu.com](https://ubuntu.com/download)                   | Escritorio / Servidor          |
| Debian       | [debian.org](https://www.debian.org/distrib/)               | Universal                      |
| Fedora       | [fedoraproject.org](https://fedoraproject.org/workstation/) | Escritorio                     |
| Linux Mint   | [linuxmint.com](https://linuxmint.com/download.php)         | Escritorio (fácil para nuevos) |
| Rocky Linux  | [rockylinux.org](https://rockylinux.org/download)           | Servidor empresarial           |

### 3. Crea el USB booteable

Sigue la guía de [Crear un USB Booteable](./bootable-usb) para preparar tu pendrive.

---

## Instalación paso a paso

### Paso 1 — Configura la BIOS/UEFI

1. Reinicia el ordenador con el USB conectado
2. Entra en la BIOS/UEFI (pulsando `F2`, `F10`, `F12` o `Del` según el fabricante)
3. Establece el USB como **primer dispositivo de arranque**
4. **Guarda y reinicia** (`F10` normalmente)

### Paso 2 — Inicia el instalador

Al arrancar desde el USB verás el **Live Desktop** o directamente el instalador, según la distribución. La mayoría ofrecen una sesión de prueba antes de instalar.

Para iniciar la instalación, haz doble clic en el icono **"Instalar Ubuntu"** (o similar) en el escritorio.

### Paso 3 — Idioma y teclado

1. Selecciona **Español** como idioma de instalación
2. Configura la distribución del teclado (Español es la habitual en España)
3. Clic en **Continuar**

### Paso 4 — Tipo de instalación

Esta es la pantalla más importante. Para una instalación limpia:

**Ubuntu / Linux Mint:**

- Selecciona **"Borrar disco e instalar Ubuntu"**
- Esto eliminará todo el contenido del disco y creará automáticamente las particiones necesarias

**Particionado manual (avanzado):**

Si prefieres control total sobre las particiones, selecciona **"Algo más"** y crea:

```
Disco: /dev/sda (o nvme0n1 para NVMe)

Partición 1:
  Tipo:   EFI System Partition
  Tamaño: 512 MB
  Uso:    Sistema EFI

Partición 2:
  Tipo:   ext4
  Tamaño: Todo el resto (p.ej. 200 GB)
  Punto:  /
  Uso:    Sistema raíz

Partición 3 (opcional):
  Tipo:   Linux swap
  Tamaño: Igual a tu RAM (máximo 8 GB)
  Uso:    Memoria de intercambio
```

> En sistemas modernos con 16 GB de RAM o más, la swap es opcional si no usas hibernación.

### Paso 5 — Zona horaria

Selecciona tu zona horaria en el mapa. Para España: **Madrid**.

### Paso 6 — Configuración del usuario

Rellena los datos de tu cuenta:

- **Tu nombre:** El nombre que aparecerá en el sistema
- **Nombre del equipo:** El hostname (p. ej., `mi-pc-linux`)
- **Nombre de usuario:** Tu login (minúsculas, sin espacios)
- **Contraseña:** Elige una contraseña segura y confírmala
- **Inicio de sesión:** Puedes elegir que solicite contraseña o que inicie automáticamente

### Paso 7 — Instalación

Haz clic en **"Instalar ahora"** y confirma cuando pregunte si deseas borrar el disco.

El proceso de instalación tarda entre **10 y 30 minutos** según la velocidad del disco y el ordenador.

---

## Post-instalación

Una vez finalizada la instalación y reiniciado el sistema, realiza estos pasos básicos:

### Actualizar el sistema

```bash
# En distribuciones basadas en Debian (Ubuntu, Mint, etc.)
sudo apt update && sudo apt upgrade -y

# En distribuciones basadas en Red Hat (Fedora, Rocky, etc.)
sudo dnf update -y
```

### Instalar drivers adicionales

En Ubuntu y derivados puedes usar `ubuntu-drivers` para detectar e instalar drivers propietarios (tarjetas gráficas NVIDIA, etc.):

```bash
sudo ubuntu-drivers autoinstall
```

O desde la interfaz gráfica: **Configuración → Software y actualizaciones → Controladores adicionales**

### Instalar software esencial

```bash
# Herramientas básicas de desarrollo
sudo apt install build-essential git curl wget -y

# Navegador (si no viene incluido)
sudo apt install firefox -y

# Reproductor multimedia
sudo apt install vlc -y
```

---

## Verificar la instalación

Comprueba que todo funciona correctamente:

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

## Comparativa: Instalación Limpia vs Dual Boot

| Aspecto          | Instalación Limpia       | Dual Boot              |
| ---------------- | ------------------------ | ---------------------- |
| Rendimiento      | ⭐⭐⭐ Óptimo            | ⭐⭐ Bueno             |
| Conserva Windows | ❌ No                    | ✅ Sí                  |
| Espacio en disco | ⭐⭐⭐ Máximo disponible | ⭐⭐ Compartido        |
| Complejidad      | ⭐⭐ Media               | ⭐⭐⭐ Alta            |
| Recomendado para | Usuarios comprometidos   | Usuarios de transición |
