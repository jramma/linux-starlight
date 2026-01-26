---
title: 1.2 Instal·lació de Linux
description: Guia pas a pas per a Ubuntu Server i Rocky Linux.
sidebar:
  order: 3
---

Instal·lar un servidor Linux és el primer pas per construir una infraestructura. A diferència de les instal·lacions d'escriptori, les instal·lacions de servidor se centren en l'estabilitat, la seguretat i l'ús mínim de recursos (sense GUI).

## Preparació

Abans de començar, necessites el mitjà d'instal·lació (ISO):
-   [Descarregar Ubuntu Server](https://ubuntu.com/download/server)
-   [Descarregar Rocky Linux](https://rockylinux.org/download)

Típicament gravaràs aquesta ISO en una unitat USB utilitzant eines com **Rufus**, **BalenaEtcher**, o `dd` a Linux/Mac.

## Instal·lant Ubuntu Server

1.  **Arrencar des del Mitjà**: Selecciona "Install Ubuntu Server" al GRUB.
2.  **Idioma i Teclat**: Selecciona les teves preferències (l'anglès és estàndard per a servidors).
3.  **Connexions de Xarxa**: L'instal·lador intentarà DHCP. Per a servidors, sovint vols una IP Estàtica (ho cobrirem al Mòdul 5, però pots configurar-ho aquí).
4.  **Configuració d'Emmagatzematge**:
    -   *Utilitzar un disc sencer*: El més fàcil.
    -   *Configurar LVM*: Recomanat per a flexibilitat (redimensionar volums més tard).
5.  **Configuració del Perfil**: Crea l'usuari per defecte.
    -   **Important**: Ubuntu *no* habilita la contrasenya del compte `root` per defecte. L'usuari creat s'afegeix a `sudoers`.
6.  **Configuració SSH**: Marca "Install OpenSSH server". **No et saltis això.**
7.  **Instal·lació de Snaps**: Probablement pots saltar-te la preinstal·lació de snaps tret que els necessitis específicament (ex., Docker, Nextcloud).
8.  **Reiniciar**: Treu el mitjà quan se't demani.

## Instal·lant Rocky Linux (Clon RHEL)

1.  **Arrencar**: Selecciona "Install Rocky Linux 9".
2.  **Instal·lador Anaconda**: L'instal·lador RHEL actua com un "hub". Has de netejar les advertències a cada secció.
3.  **Destinació de la Instal·lació**:
    -   Selecciona el disc.
    -   Tria "Automatic" o "Custom" per a la configuració d'emmagatzematge.
    -   *Nota*: RHEL utilitza per defecte el sistema de fitxers XFS.
4.  **Xarxa i Nom d'amfitrió**:
    -   **ENCÉN** la interfície de xarxa (sovint està APAGADA per defecte!).
    -   Estableix el nom d'amfitrió (ex., `server01.example.com`).
5.  **Configuració d'Usuari**:
    -   **Contrasenya de Root**: Estableix una contrasenya de root forta. Pots "Allow root SSH login with password" (no recomanat per a producció) o "Lock root account".
    -   **Creació d'Usuari**: Crea un usuari administrador regular i marca "Make this user administrator" (afegeix al grup `wheel`).
6.  **Selecció de Programari**: tria "Minimal Install" per a servidors. Evita "Server with GUI" tret que sigui estrictament necessari.
