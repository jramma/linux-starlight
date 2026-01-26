---
title: 2.5 Process Control
description: Managing what is running on your system.
sidebar:
  order: 5
---

Every running program is a **process** with a unique **PID** (Process ID).

## Viewing Processes

-   `top`: Real-time view of system resources (CPU/RAM) and processes. Press `q` to quit.
-   `htop`: A prettier, more interactive version of top (often needs install).
-   `ps`: Snapshot of current processes.
    -   `ps aux` (BSD style) or `ps -ef` (Standard): Shows ALL processes.

## Killing Processes

Creating a "zombie" or stopping a stuck program.

-   `kill <PID>`: Send SIGTERM (15). Asks nicely to stop.
-   `kill -9 <PID>`: Send SIGKILL (9). Forces stop immediately (can lose data).
-   `killall <name>`: Kill processes by name instead of ID.

## Background Jobs

When you run a command, it occupies the terminal.

1.  **Background (`&`)**:
    ```bash
    sleep 100 &
    ```
    Runs in background. Terminal is free.

2.  **Foreground (`fg`) to Background (`bg`)**:
    -   Run a command (e.g., `top`).
    -   Press `Ctrl + Z` to **suspend** it.
    -   Type `bg` to resume it in background.
    -   Type `fg` to bring it back to foreground.

3.  **Jobs**:
    -   Type `jobs` to list background jobs in current terminal session.
