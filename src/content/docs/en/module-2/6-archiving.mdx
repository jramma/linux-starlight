---
title: 2.6 Archiving and Compression
description: Bundling and shrinking files.
sidebar:
  order: 6
---

import { Aside } from '@astrojs/starlight/components';

In Linux, "archiving" (bundling many files into one) and "compression" (making files smaller) are often two separate steps, though modern tools combine them.

## Archiving with `tar`

`tar` (Tape ARchive) is the standard tool for bundling files.

- **Create** an archive (`-c`):
    ```bash
    tar -cvf archive.tar file1 file2 dir/
    ```
    *(Flags: **c**reate, **v**erbose, **f**ile)*

- **Extract** an archive (`-x`):
    ```bash
    tar -xvf archive.tar
    ```
    *(Flags: e**x**tract)*

- **List** contents (`-t`):
    ```bash
    tar -tvf archive.tar
    ```

## Compression Tools

Linux supports multiple compression formats. `gzip` is the most common, while `xz` offers better compression at the cost of speed.

| Tool | Extension | Compress | Decompress |
| :--- | :--- | :--- | :--- |
| `gzip` | `.gz` | `gzip file` | `gunzip file.gz` |
| `bzip2` | `.bz2` | `bzip2 file` | `bunzip2 file.bz2` |
| `xz` | `.xz` | `xz file` | `unxz file.xz` |
| `zip` | `.zip` | `zip -r arch.zip dir` | `unzip arch.zip` |

## Combining with `tar`

You usually don't compress distinct files; you compress a tarball.

- **gzip** (`-z`): `archive.tar.gz` or `.tgz`
    ```bash
    tar -czvf archive.tar.gz folder/
    tar -xzvf archive.tar.gz
    ```

- **bzip2** (`-j`): `archive.tar.bz2`
    ```bash
    tar -cjvf archive.tar.bz2 folder/
    ```

- **xz** (`-J`): `archive.tar.xz`
    ```bash
    tar -cJvf archive.tar.xz folder/
    ```

## Backups with `rsync`

`rsync` is a powerful tool for synchronization and backups. It only copies changes.

```bash
# Sync contents of source to destination
# -a: archive mode (preserves permissions, times, etc.)
# -v: verbose
rsync -av source/ destination/

# Remote sync (over SSH)
rsync -avz source/ user@remote:/backup/DIR/
```
