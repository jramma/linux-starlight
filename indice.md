# Índex de Temari: Linux per a Administradors de Sistemes Novells

Aquest document presenta l'estructura del curs proposat, les fonts utilitzades i l'estimació de cobertura respecte a les certificacions oficials de Linux.

## 1. Índex de Temari (Estructura Modular)

El curs s'estructura en 6 mòduls de 4-6 hores, sumant un total de 30 hores lectives.

### Mòdul 1: Introducció a Linux i Desplegament Inicial (4h)
- Visió general i certificacions (LFCS, RHCSA).
- Instal·lació de Linux (Ubuntu Server / Rocky Linux).
- Particionament bàsic i procés d'arrencada (GRUB, systemd).
- Configuració inicial (hostname, xarxa bàsica).

### Mòdul 2: Ús de la Shell i Comandes Fonamentals (6h)
- Navegació i gestió de fitxers (`ls`, `cp`, `mv`, `rm`).
- Edició de text amb `vim`.
- Pipes, redireccions i filtres (`grep`, `cat`, `less`).
- Gestió de permisos (`chmod`, `chown`, `sudo`).
- Control de processos (`ps`, `top`, `kill`, background/foreground).

### Mòdul 3: Administració del Sistema: Usuaris, Paquets i Serveis (6h)
- Gestió d'usuaris i grups (`useradd`, `/etc/passwd`).
- Gestió de paquets (`apt`, `dnf`).
- Gestió de serveis amb `systemd` (`systemctl`).
- Logs i monitorització (`journalctl`, `cron`).

### Mòdul 4: Emmagatzematge i Sistemes de Fitxers (4h)
- Dispositius de bloc i particions (`fdisk`, `gdisk`).
- Sistemes de fitxers (`mkfs.ext4`, `mkfs.xfs`, `mount`).
- Gestió de volums lògics (LVM).
- Muntatge persistent (`/etc/fstab`) i xarxa (NFS).

### Mòdul 5: Xarxa i Seguretat Bàsica (6h)
- Configuració IP estàtica i eines de xarxa (`ip`, `ping`, `ss`).
- Tallafocs (`ufw` / `firewalld`).
- Configuració segura de SSH (claus públiques).
- Introducció a la seguretat (SELinux/AppArmor bàsic).

### Mòdul 6: Scripting i Automatització + Repàs (4h)
- Introducció a Bash Scripting (variables, bucles, condicionals).
- Automatització de tasques administratives.
- Introducció a contenidors (Docker/Podman).
- Repàs general i orientació a l'examen.

---

## 2. Percentatge de Cobertura de la Titulació Oficial

El curs està dissenyat per alinear-se amb els objectius de les certificacions estàndard de la indústria per a administradors junior.

### **Linux Foundation Certified Sysadmin (LFCS)**
- **Cobertura Estimada del Temari: ~95-100%**
- **Detall**: El curs toca tots els dominis principals de l'examen LFCS:
    - *Essential Commands*: Tot cobert al Mòdul 2.
    - *Operation of Running Systems*: Cobert als Mòduls 3 i 6.
    - *User and Group Management*: Cobert al Mòdul 3.
    - *Networking*: Cobert al Mòdul 5.
    - *Service Configuration*: Cobert al Mòdul 3.
    - *Storage Management*: Cobert al Mòdul 4.

### **Linux Professional Institute LPIC-1 (Exàmens 101 i 102)**
- **Cobertura Estimada del Temari: ~100%**
- **Detall**: El temari proposat abasta els objectius d'ambdós exàmens (Arquitectura, Instal·lació, GNU & Unix commands, Shells, Scripting, Interfaces, Admin Tasks, Services, Networking, Security).

**Nota Important sobre la Profunditat**:
Tot i que el curs cobreix la *totalitat dels temes* que entren a l'examen, una durada de 30 hores és intensiva. Per garantir l'aprovat en exàmens pràctics (com LFCS o RHCSA), es recomana que l'alumne dediqui hores addicionals de pràctica personal fora de l'aula per guanyar agilitat. El curs proporciona la base i la guia completa, però la destresa ("muscle memory") requereix pràctica continuada.

---

## 3. Fonts i Recursos a Consultar

Per a l'elaboració del material docent i la preparació de les classes, es recomana consultar les següents fonts oficials i recursos de referència:

### Documentació Oficial de Certificacions
- **Linux Foundation Training**: [training.linuxfoundation.org](https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/) - Objectius oficials de l'LFCS.
- **LPI (Linux Professional Institute)**: [lpi.org](https://www.lpi.org/our-certifications/lpic-1-overview/) - Objectius detallats per als exàmens 101-500 i 102-500.
- **Red Hat**: [redhat.com](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam) - Objectius de l'examen EX200 (RHCSA).

### Manuals i Llibres Recomanats
- *The Linux Command Line* de William Shotts (excel·lent per al Mòdul 2).
- *UNIX and Linux System Administration Handbook* de Evi Nemeth et al. (referència clàssica per a administradors).
- Documentació oficial de les distribucions utilitzades:
    - [Ubuntu Server Guide](https://ubuntu.com/server/docs)
    - [Rocky Linux Documentation](https://docs.rockylinux.org/)

### Recursos Online per a Laboratoris
- **Instruqt** o **Katacoda** (entorns interactius).
- **DistroWatch** (per comparar distribucions).
