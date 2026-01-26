---
title: 6.4 Review and Exam Prep
description: Wrapping up the course.
sidebar:
  order: 4
---

## Summary of Key Commands

| Category | Commands to Master |
| :--- | :--- |
| **Files** | `ls`, `cd`, `cp`, `mv`, `rm`, `mkdir`, `find`, `tar` |
| **Text** | `grep`, `cat`, `less`, `head`, `tail`, `vi` |
| **Users** | `useradd`, `passwd`, `chmod`, `chown`, `sudo` |
| **System** | `systemctl`, `journalctl`, `ps`, `top`, `kill` |
| **Storage** | `fdisk`, `lsblk`, `mkfs`, `mount`, `df` |
| **Network** | `ip`, `ping`, `ss`, `nmcli` |

## Exam Day Tips (LFCS / RHCSA)

1.  **Read carefully**: Do exactly what is asked. If it asks to create a user with UID 2000, verify it (`id user`).
2.  **Verify persistence**: Reboot if allowed (or unsure). Ensure mounts (`/etc/fstab`) and firewalls/services (`systemctl enable`) survive a reboot.
3.  **Use Man Pages**: You don't have Google, but you have `man`.
    -   Forgot cron format? `man 5 crontab`.
    -   Forgot useradd flags? `man useradd`.

## Conclusion

Congratulations on completing the **Linux Starlight** syllabus. You now have the foundation to manage real-world Linux Enterprise systems. Keep practicing!
