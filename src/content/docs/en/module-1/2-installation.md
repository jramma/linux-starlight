---
title: 1.2 Linux Installation
description: Step-by-step guide for Ubuntu Server and Rocky Linux.
sidebar:
  order: 3
---

import { Aside } from '@astrojs/starlight/components';
import { LinkCard } from 'starlight-theme-nova/components';

Installing a Linux server is the first step in building infrastructure. Unlike desktop installations, server installs focus on stability, security, and minimal resource usage (no GUI).

## Preparation

Before starting, you need the installation media (ISO):
Before starting, you need the installation media (ISO):

<LinkCard title="Download Ubuntu Server" href="https://ubuntu.com/download/server" icon="download" />
<LinkCard title="Download Rocky Linux" href="https://rockylinux.org/download" icon="download" />

You will typically flash this ISO to a USB drive using tools like **Rufus**, **BalenaEtcher**, or `dd` on Linux/Mac.

## Installing Ubuntu Server

1.  **Boot from Media**: Select "Install Ubuntu Server" in GRUB.
2.  **Language & Keyboard**: Select your preferences (English is standard for servers).
3.  **Network Connections**: The installer will attempt DHCP. For servers, you often want a Static IP (we will cover this in Module 5, but you can set it here).
4.  **Storage Configuration**:
    -   *Use an entire disk*: Easiest.
    -   *Set up LVM*: Recommended for flexibility (resizing volumes later).
5.  **Profile Setup**: Create the default user.
    -   **Important**: Ubuntu does *not* enable the `root` account password by default. The created user is added to `sudoers`.
        <Aside type="caution">Ubuntu disables the root password by default for security.</Aside>
6.  **SSH Setup**: Check "Install OpenSSH server". **Do not skip this.**
7.  **Snap Install**: You can likely skip pre-installing snaps unless you specifically need them (e.g., Docker, Nextcloud).
8.  **Reboot**: Remove the media when prompted.

## Installing Rocky Linux (RHEL Clone)

1.  **Boot**: Select "Install Rocky Linux 9".
2.  **Anaconda Installer**: The RHEL installer acts as a "hub". You must clear warnings on each section.
3.  **Installation Destination**:
    -   Select the disk.
    -   Choose "Automatic" or "Custom" storage configuration.
    -   <Aside type="note">RHEL defaults to XFS filesystem.</Aside>
4.  **Network & Hostname**:
    -   <Aside type="tip">**Turn ON** the network interface (it is often OFF by default!).</Aside>
    -   Set the hostname (e.g., `server01.example.com`).
5.  **User Settings**:
    -   **Root Password**: Set a strong root password. You can "Allow root SSH login with password" (not recommended for production) or "Lock root account".
    -   **User Creation**: Create a regular admin user and tick "Make this user administrator" (adds to `wheel` group).
6.  **Software Selection**: choose "Minimal Install" for servers. Avoid "Server with GUI" unless strictly necessary.
