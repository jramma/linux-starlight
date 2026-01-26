---
title: 2.3 Pipes, Redirections, and Filters
description: Unleashing the power of the Unix Philosophy.
sidebar:
  order: 3
---

The Unix Philosophy: **"Write programs that do one thing and do it well. Write programs to work together."**

## Redirection

Control where output goes.

### Standard Streams
-   `stdin` (0): Input.
-   `stdout` (1): Output.
-   `stderr` (2): Errors.

### Operators
-   `>`: Overwrite file with output.
    ```bash
    echo "Hello" > file.txt
    ```
-   `>>`: Append output to end of file.
    ```bash
    echo "World" >> file.txt
    ```
-   `2>`: Redirect errors only.
    ```bash
    ls /nonexistent 2> errors.log
    ```

## Pipes (`|`)

Take the `stdout` of the command on the left and pass it as `stdin` to the command on the right.

```bash
command1 | command2 | command3
```

## Filters

Commands designed to process text streams.

| Command | Function | Example |
| :--- | :--- | :--- |
| `grep` | Search for patterns | `cat log.txt | grep "Error"` |
| `ls | grep` | List specific files | `ls /etc | grep ".conf"` |
| `less` | Pager (scrollable view) | `cat hugefile.txt | less` |
| `head` | First 10 lines | `head -n 5 file.txt` |
| `tail` | Last 10 lines | `tail -f /var/log/syslog` (Follow live!) |
| `sort` | Sort lines | `sort names.txt` |
| `uniq` | Remove adjacent duplicates | `sort names.txt | uniq` |
| `wc` | Word Count | `wc -l` (Count lines) |

### Real World Example
Count how many running processes are owned by "root":

```bash
ps aux | grep "^root" | wc -l
```
