# Syllabus Index: Linux for Junior System Administrators

This document presents the structure of the proposed course, the sources used, and the estimated coverage in relation to official Linux certifications.

## 1. Syllabus Index (Modular Structure)

The course is structured into 6 modules of 4–6 hours, for a total of 30 instructional hours.

### Module 1: Introduction to Linux and Initial Deployment (4h)

* Overview and certifications (LFCS, RHCSA).
* Linux installation (Ubuntu Server / Rocky Linux).
* Basic partitioning and boot process (GRUB, systemd).
* Initial configuration (hostname, basic networking).

### Module 2: Shell Usage and Fundamental Commands (6h)

* File navigation and management (`ls`, `cp`, `mv`, `rm`).
* Text editing with `vim`.
* Pipes, redirections, and filters (`grep`, `cat`, `less`).
* Permission management (`chmod`, `chown`, `sudo`).
* Process control (`ps`, `top`, `kill`, background/foreground).

### Module 3: System Administration: Users, Packages, and Services (6h)

* User and group management (`useradd`, `/etc/passwd`).
* Package management (`apt`, `dnf`).
* Service management with `systemd` (`systemctl`).
* Logs and monitoring (`journalctl`, `cron`).

### Module 4: Storage and File Systems (4h)

* Block devices and partitions (`fdisk`, `gdisk`).
* File systems (`mkfs.ext4`, `mkfs.xfs`, `mount`).
* Logical Volume Management (LVM).
* Persistent mounts (`/etc/fstab`) and network storage (NFS).

### Module 5: Networking and Basic Security (6h)

* Static IP configuration and networking tools (`ip`, `ping`, `ss`).
* Firewalls (`ufw` / `firewalld`).
* Secure SSH configuration (public keys).
* Introduction to security (basic SELinux/AppArmor).

### Module 6: Scripting and Automation + Review (4h)

* Introduction to Bash scripting (variables, loops, conditionals).
* Automation of administrative tasks.
* Introduction to containers (Docker/Podman).
* General review and exam orientation.

---

## 2. Percentage of Official Certification Coverage

The course is designed to align with the objectives of standard industry certifications for junior system administrators.

### **Linux Foundation Certified Sysadmin (LFCS)**

* **Estimated Syllabus Coverage: ~95–100%**
* **Details**: The course covers all major LFCS exam domains:

  * *Essential Commands*: Fully covered in Module 2.
  * *Operation of Running Systems*: Covered in Modules 3 and 6.
  * *User and Group Management*: Covered in Module 3.
  * *Networking*: Covered in Module 5.
  * *Service Configuration*: Covered in Module 3.
  * *Storage Management*: Covered in Module 4.

### **Linux Professional Institute LPIC-1 (Exams 101 and 102)**

* **Estimated Syllabus Coverage: ~100%**
* **Details**: The proposed syllabus covers the objectives of both exams (Architecture, Installation, GNU & Unix Commands, Shells, Scripting, Interfaces, Administrative Tasks, Services, Networking, Security).

**Important Note on Depth**:
Although the course covers *all exam topics*, a 30-hour duration is intensive. To ensure success in hands-on exams (such as LFCS or RHCSA), students are strongly encouraged to dedicate additional personal practice time outside the classroom to build fluency. The course provides a complete foundation and roadmap, but true proficiency (“muscle memory”) requires continuous practice.

---

## 3. Sources and Reference Materials

For the development of teaching materials and class preparation, the following official sources and reference resources are recommended:

### Official Certification Documentation

* **Linux Foundation Training**: [training.linuxfoundation.org](https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/) – Official LFCS objectives.
* **LPI (Linux Professional Institute)**: [lpi.org](https://www.lpi.org/our-certifications/lpic-1-overview/) – Detailed objectives for exams 101-500 and 102-500.
* **Red Hat**: [redhat.com](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam) – EX200 (RHCSA) exam objectives.

### Recommended Manuals and Books

* *The Linux Command Line* by William Shotts (excellent for Module 2).
* *UNIX and Linux System Administration Handbook* by Evi Nemeth et al. (classic reference for administrators).
* Official documentation for the distributions used:

  * [Ubuntu Server Guide](https://ubuntu.com/server/docs)
  * [Rocky Linux Documentation](https://docs.rockylinux.org/)

### Online Lab Resources

* **Instruqt** or **Katacoda** (interactive environments).
* **DistroWatch** (distribution comparison).
