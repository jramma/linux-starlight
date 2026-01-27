---
title: 1.1 Overview and Certifications
description: Introduction to the Linux ecosystem and key certifications.
sidebar:
  order: 2
---

import { Aside } from '@astrojs/starlight/components';

## The Linux Ecosystem

Linux is a free, open-source operating system kernel created by **Linus Torvalds** in 1991. Today, "Linux" typically refers to the kernel plus a collection of GNU utilties and software, forming a variety of **"distributions" (distros)**.

### Key Distribution Families

For a system administrator, understanding the two main corporate lineages is crucial:

1.  **Debian Family**:
    -   **Debian**: The upstream, stable, community-driven project.
    -   **Ubuntu**: Based on Debian, highly popular in cloud and enterprise. Uses `.deb` packages and the `apt` manager.
    -   **Linux Mint/Kali/Pop!_OS**: Other derivatives.

2.  **Red Hat Family (RHEL)**:
    -   **Red Hat Enterprise Linux (RHEL)**: The commercial standard.
    -   **Fedora**: The upstream testing ground for RHEL.
    -   **Rocky Linux / AlmaLinux**: Community-driven, binary-compatible alternatives to RHEL (filling the void left by CentOS). Uses `.rpm` packages and the `dnf`/`yum` manager.

## Official Certifications

Validating your skills is essential for career progression. This course targets the following:

### Linux Foundation Certified Sysadmin (LFCS)
-   **Focus**: Practical, hands-on ability to design, install, configure, and manage a system.
-   **Vendor**: The Linux Foundation (neutral).
-   **Exam Format**: 100% Performance-based (Live terminal). You are given tasks to solve.
-   **Distributions**: You effectively choose between Ubuntu and Rocky/CentOS stream.

### Red Hat Certified System Administrator (RHCSA)
-   **Focus**: Core system administration skills in Red Hat environments.
-   **Vendor**: Red Hat.
-   **Exam Format**: 100% Performance-based (EX200).
-   **Distributions**: RHEL.


<Aside type="tip" title="Why performance-based?">
Multiple-choice exams are rare in Linux admin. You must know *how* to do the task, not just remember the theory. Muscle memory is key.
</Aside>
