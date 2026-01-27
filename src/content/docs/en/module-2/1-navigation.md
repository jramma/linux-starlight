---
title: 2.1 File Navigation and Management
description: How to move around and manipulate files in the terminal.
sidebar:
  order: 1
---

import { Aside } from '@astrojs/starlight/components';

## Hierarchy

Recall that everything starts at `/`.

### PATH Concepts
-   **Absolute Path**: Starts with `/`. Always works, no matter where you are. (e.g., `/home/user/docs/file.txt`).
-   **Relative Path**: Does *not* start with `/`. Depends on your current location. (e.g., `docs/file.txt` or `../file.txt`).

## Navigation Commands

| Command | Name | Function |
| :--- | :--- | :--- |
| `pwd` | Print Working Directory | Tells you where you are right now. |
| `cd` | Change Directory | Moves you to a new folder. |
| `cd ..` | | Move up one level. |
| `cd ~` | | Move to your home directory. |
| `ls` | List | Shows files in the current directory. |

### `ls` Flags
You rarely run just `ls`. Common flags:
-   `ls -l`: **Long** listing (permissions, owner, size, date).
-   `ls -a`: **All** files (shows hidden files starting with `.`).
-   `ls -lh`: Long listing with **human-readable** sizes (MB, GB).

## File Management

| Command | Function | Example |
| :--- | :--- | :--- |
| `mkdir` | Make Directory | `mkdir projects` |
| `touch` | Create empty file | `touch notes.txt` |
| `cp` | Copy | `cp notes.txt backup.txt` |
| `cp -r` | Copy Recursive (Folder) | `cp -r projects/ projects-backup/` |
| `mv` | Move (or Rename) | `mv notes.txt doc.txt` |
| `rm` | Remove (Delete) | `rm file.txt` |

<Aside type="danger" title="rm -rf /">
**`rm -rf /`**: The `rm -r` (recursive) combined with `-f` (force) is dangerous. It deletes folders and their contents without asking. Always double-check your path before hitting Enter.
</Aside>
