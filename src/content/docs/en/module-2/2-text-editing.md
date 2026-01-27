---
title: 2.2 Text Editing with Vim
description: The essential (and infamous) terminal text editor.
sidebar:
  order: 2
---

import { Aside } from '@astrojs/starlight/components';

Why **Vim**? It is installed on almost every Unix-like system by default. In a rescue shell, you might not have `nano` or `code`, but you will have `vi` or `vim`.

## The Modes

Vim is "modal". Keys do different things depending on the mode.

1.  **Normal Mode**: The default. Keys are commands (navigation, copy/paste). Press `Esc` to return here.
2.  **Insert Mode**: For typing text. Press `i` to enter.
3.  **Command (Ex) Mode**: For saving/quitting. Press `:` to enter.

## Cheat Sheet

### 1. Opening and Quitting
-   `vim file.txt`: Open file.
-   `:w`: **Write** (Save).
-   `:q`: **Quit**.
-   `:wq`: Save and Quit.
-   `:q!`: Quit **without** saving (discard changes).

### 2. Basic Editing
-   `i`: Switch to Insert Mode (start typing).
-   `Esc`: Go back to Normal Mode.

### 3. Navigation (Normal Mode)
-   `h` `j` `k` `l`: Left, Down, Up, Right (arrow keys also work).
-   `gg`: Go to start of file.
-   `G`: Go to end of file.
-   `/pattern`: Search for "pattern". (`n` for next match).

### 4. Direct Actions (Normal Mode)
-   `dd`: Delete (cut) current line.
-   `yy`: Yank (copy) current line.
-   `p`: Paste below.
-   `u`: Undo.
-   `Ctrl + r`: Redo.

<Aside type="tip">
If you find Vim too difficult initially, `nano` is a simpler, modeless alternative. But mastering Vim basics is a superpower.
</Aside>
