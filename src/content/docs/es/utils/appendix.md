---
title: Apéndice
description: Apéndice
sidebar:
  order: 1
---

## Glosario rápido (conceptos Linux)

### A

- **Archivo regular**: fichero normal (en `ls -l` empieza por `-`).

### C

- **Cron**: planificador para ejecutar tareas en horarios (verás más en módulos posteriores).

### D

- **Directorio**: carpeta; en `ls -l` empieza por `d`. El permiso `x` en directorios significa **poder entrar/atravesar**.
- **Daemon/Demonio**: proceso en segundo plano (ej. `sshd`, `nginx`).

### E

- **stderr / stdout / stdin**: flujos estándar (errores, salida normal, entrada). Base para redirecciones `>`, `>>`, `2>`, `&>` y pipes `|`.

### F

- **Filesystem**: sistema de archivos (ext4, xfs, etc.). Estructura que organiza datos en disco.

### G

- **Grupo (GID)**: conjunto de usuarios para compartir permisos. Archivos tienen dueño (UID) y grupo (GID).

### I

- **Inodo (inode)**: identificador interno de un archivo en disco. Los nombres son “etiquetas”; el inode es lo real.

### J

- **Job**: tarea lanzada desde una terminal (foreground/background). Se gestiona con `jobs`, `fg`, `bg`, `Ctrl+Z`.

### P

- **PID**: identificador de proceso.
- **Pipe (`|`)**: conecta la salida de un comando con la entrada del siguiente.
- **Paquete**: unidad de software gestionada por el sistema (Debian: `apt`/`dpkg`).
- **Particionar**: dividir un disco en particiones (GPT/MBR) para organizar el almacenamiento.

### R

- **Ruta absoluta**: empieza por `/` (siempre funciona).
- **Ruta relativa**: depende del directorio actual.

### S

- **SUID/SGID**: bits especiales. En prácticas suele usarse sobre todo **SGID en directorios** para heredar el grupo.
- **Sticky bit**: típico de `/tmp` (permisos `1777`), evita que usuarios borren archivos ajenos en carpetas compartidas.
- **Symlink (enlace simbólico)**: “acceso directo” que apunta a una ruta (se puede romper si mueves/borras el objetivo).

### U

- **UID**: identificador numérico de usuario.
- **umask**: máscara de permisos por defecto para archivos/directorios creados.

### V

- **VM (Virtual Machine)**: máquina virtual para practicar sin miedo (snapshots).
