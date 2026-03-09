---
title: Instalar Linux en un Servidor
description: Guía para instalar Linux en un servidor físico o VPS con configuración de red, SSH y bootloader GRUB desde Windows.
sidebar:
  order: 5
---

Instalar Linux en un servidor es diferente a hacerlo en un ordenador de escritorio. Los servidores suelen ejecutarse **sin interfaz gráfica** (modo headless), estar optimizados para estabilidad y seguridad, y gestionarse remotamente a través de **SSH**.

## ¿Qué tipo de servidor tienes?

### Servidor físico (bare metal)

Un ordenador dedicado o una máquina en tu red local. Se instala Linux directamente desde un USB booteable, igual que en un PC, pero con variantes específicas para servidor.

### VPS (Virtual Private Server)

Un servidor virtual alquilado en un proveedor de nube (Hetzner, DigitalOcean, OVH, etc.). Normalmente el proveedor te ofrece un panel web donde puedes seleccionar el sistema operativo e instalarlo con un clic. No necesitas USB.

### Servidor dedicado remoto

Igual que un servidor físico pero accesible remotamente. Muchos proveedores ofrecen **IPMI/iDRAC/iLO** para acceso a la consola como si estuvieras físicamente delante.

---

## Distros recomendadas para servidor

Para un entorno de servidor lo habitual es elegir distribuciones **LTS** orientadas a estabilidad:

| Distribución | Empresa | Ciclo LTS | Uso típico |
|-------------|---------|-----------|------------|
| Ubuntu Server | Canonical | 5 años | Web, desarrollo, cloud |
| Debian | Comunidad | ~5 años | Estable, minimalista |
| Rocky Linux | RESF | 10 años | Empresarial (sustituto de RHEL) |
| AlmaLinux | AlmaLinux OS | 10 años | Empresarial (sustituto de RHEL) |
| Fedora Server | Red Hat | ~1 año | Vanguardia tecnológica |

> Para la mayoría de casos, **Ubuntu Server LTS** o **Debian** son las opciones más documentadas y con mayor comunidad.

---

## Instalación en servidor físico

### Paso 1 — Descarga la ISO de servidor

Descarga la versión **Server** de tu distribución, no la de escritorio. Por ejemplo:

- [Ubuntu Server 24.04 LTS](https://ubuntu.com/download/server)
- [Debian Netinstall](https://www.debian.org/distrib/netinst)

La versión server es más ligera (no incluye entorno gráfico) y tiene opciones específicas para servidores.

### Paso 2 — Crea el USB booteable

Sigue los pasos de [Crear un USB Booteable](./bootable-usb) usando Rufus, Etcher o `dd`.

### Paso 3 — Instalación en modo texto

Los instaladores de servidor suelen funcionar en modo texto (sin entorno gráfico). No te preocupes, es muy guiado:

**Ubuntu Server:**
1. Selecciona el idioma
2. Configura la red (IP estática o DHCP)
3. Configura el disco:
   - **Usar disco completo** (recomendado)
   - O **personalizado** para LVM, RAID, etc.
4. Configura el usuario y contraseña
5. Activa la opción **Install OpenSSH server** ✅ (¡importante para acceso remoto!)
6. Selecciona snaps adicionales si se desea (Docker, etc.)
7. Completa la instalación

### Paso 4 — Configuración post-instalación

Una vez instalado, conéctate por SSH desde Windows:

```powershell
# Desde PowerShell o CMD en Windows 10/11
ssh usuario@IP_DEL_SERVIDOR
```

O usa [PuTTY](https://putty.org) si prefieres una interfaz gráfica.

---

## Instalación en VPS (nube)

### Método 1 — Panel de control del proveedor

La mayoría de proveedores ofrecen instalación con un clic desde su panel:

1. Accede al panel de control del VPS
2. Ve a **Sistema operativo** o **Reinstalar**
3. Selecciona la distribución y versión (p. ej., Ubuntu 24.04 LTS)
4. Confirma la instalación. El proveedor instalará Linux automáticamente
5. Recibirás las credenciales de acceso por email o las configurarás con tu clave SSH

### Método 2 — Autenticación con clave SSH (recomendado)

En lugar de contraseñas, los servidores modernos usan **claves SSH** para mayor seguridad.

**Generar un par de claves en Windows (PowerShell):**
```powershell
ssh-keygen -t ed25519 -C "mi@correo.com"
```

Esto crea:
- `~/.ssh/id_ed25519` → clave privada (¡nunca la compartas!)
- `~/.ssh/id_ed25519.pub` → clave pública (la subes al servidor)

**Añadir la clave pública al VPS:**
```bash
# Desde el servidor (primera vez con contraseña)
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
# Pega el contenido de id_ed25519.pub
```

Una vez configurado, conectarás sin contraseña:
```powershell
ssh -i ~/.ssh/id_ed25519 usuario@IP_SERVIDOR
```

---

## GRUB en servidores

El gestor de arranque en servidores funciona igual que en escritorio, pero con algunas particularidades:

### Configuración típica de GRUB en servidor

```bash
# Ver configuración actual
cat /etc/default/grub

# Líneas relevantes para servidor:
GRUB_TIMEOUT=5                    # Tiempo de espera antes de arrancar
GRUB_CMDLINE_LINUX_DEFAULT="quiet"  # Sin splash en servidor
GRUB_TERMINAL=console             # Solo consola, sin gráficos
```

### Actualizar GRUB tras cambios

```bash
# Debian/Ubuntu
sudo update-grub

# Rocky Linux / AlmaLinux / Fedora
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

### GRUB en sistemas UEFI con servidor

En servidores modernos con UEFI, GRUB se instala en la partición EFI:

```bash
# Verificar que GRUB está en la partición EFI
efibootmgr -v

# Reinstalar GRUB si es necesario (Ubuntu/Debian)
sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB
sudo update-grub
```

---

## Configuración básica post-instalación

### Actualizar el sistema

```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# Rocky Linux / AlmaLinux
sudo dnf update -y
```

### Configurar el firewall

```bash
# UFW (Ubuntu/Debian)
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
sudo ufw status

# Firewalld (Rocky/AlmaLinux/Fedora)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### Desactivar acceso SSH con contraseña (una vez configuradas las claves)

```bash
sudo nano /etc/ssh/sshd_config
```

Cambia o añade estas líneas:
```
PasswordAuthentication no
PermitRootLogin no
PubkeyAuthentication yes
```

Reinicia SSH:
```bash
sudo systemctl restart sshd
```

### Configurar zona horaria

```bash
sudo timedatectl set-timezone Europe/Madrid
timedatectl status
```

---

## Gestión del servidor desde Windows

| Herramienta | Uso | Enlace |
|-------------|-----|--------|
| PuTTY | Cliente SSH con GUI | [putty.org](https://putty.org) |
| Windows Terminal | SSH integrado en Win10/11 | Preinstalado |
| WinSCP | Transferir archivos SFTP | [winscp.net](https://winscp.net) |
| MobaXterm | SSH + SFTP + X11 todo en uno | [mobaxterm.mobatek.net](https://mobaxterm.mobatek.net) |
| VSCode Remote SSH | Editar archivos remotos | Extensión de VSCode |

---

## Verificar el servidor

```bash
# Información del sistema
hostnamectl

# Uso de recursos
top
htop  # Si está instalado: sudo apt install htop

# Espacio en disco
df -h

# Puertos abiertos
ss -tulnp

# Logs del sistema
sudo journalctl -xe
```
