---
title: Bienvenidos a Linux Starlight
description: Un curso completo para Administradores de Sistemas Junior.
template: splash
hero:
  tagline: Navega por el universo Linux con confianza.
  image:
    file: ../../../assets/houston.webp
  actions:
    - text: Comienza el Curso
      link: /es/module-1/
      icon: right-arrow
      variant: primary
    - text: Ver Certificaciones
      link: /es/certification/
      icon: external
      variant: primary
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Sobre este Curso

Este documento presenta la estructura del curso propuesto, las fuentes utilizadas y la cobertura estimada en relación con las certificaciones oficiales de Linux (LFCS, RHCSA).

El curso se estructura en **6 módulos** de 4–6 horas, para un total de **30 horas de instrucción**.

### Resumen de los Módulos

<CardGrid stagger>
    <Card title="1. Introducción y Despliegue" icon="rocket">
        **Introducción a Linux y Despliegue Inicial** (4h)
        Primeros pasos, instalación y conceptos básicos del kernel y la shell.
    </Card>

    <Card title="2. Comandos y Shell" icon="terminal">
        **Uso de la Shell y Comandos Fundamentales** (6h)
        Dominio de la línea de comandos, tuberías, redirecciones y herramientas esenciales.
    </Card>

    <Card title="3. Administración" icon="setting">
        **Administración del Sistema: Usuarios, Paquetes y Servicios** (6h)
        Gestión de permisos, control de procesos y mantenimiento de software.
    </Card>

    <Card title="4. Almacenamiento" icon="document">
        **Almacenamiento y Sistemas de Archivos** (4h)
        Particionado, montaje de discos, LVM y gestión de cuotas.
    </Card>

    <Card title="5. Redes y Seguridad" icon="shield">
        **Redes y Seguridad Básica** (6h)
        Configuración de red, cortafuegos, SSH y bastionado del sistema.
    </Card>

    <Card title="6. Automatización" icon="seti:javascript">
        **Scripting, Automatización y Repaso** (4h)
        Bash scripting avanzado y preparación para escenarios de certificación.
    </Card>
</CardGrid>
