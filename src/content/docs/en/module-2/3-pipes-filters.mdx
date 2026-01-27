---
title: 2.3 Pipes, Redirections, and Filters
description: Unleashing the power of the Unix Philosophy.
sidebar:
  order: 3
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="note" title="The Unix Philosophy">
"Write programs that do one thing and do it well. Write programs to work together."
</Aside>

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

## Text Processing Tools

Commands to protect, sort, merge, and transform text.

| Command | Function | Example |
| :--- | :--- | :--- |
| `cut` | Remove sections from each line of files | `cut -d: -f1 /etc/passwd` (Get usernames) |
| `tr` | Translate or delete characters | `echo "hello" | tr 'a-z' 'A-Z'` (Uppercase) |
| `sort` | Sort lines of text files | `sort file.txt` |
| `uniq` | Report or omit repeated lines | `sort file.txt | uniq` |
| `wc` | Print newline, word, and byte counts | `wc -l file.txt` |

## Stream Editors (`sed`)

`sed` is a stream editor for filtering and transforming text.

- **Substitute (Search & Replace)**:
    ```bash
    # Replace the first occurrence of 'foo' with 'bar' in each line
    sed 's/foo/bar/' file.txt
    
    # Replace ALL occurrences ('g' for global)
    sed 's/foo/bar/g' file.txt
    
    # Edit the file in-place ('-i')
    sed -i 's/foo/bar/g' file.txt
    ```

- **Delete Lines**:
    ```bash
    # Delete the 3rd line
    sed '3d' file.txt
    
    # Delete lines containing "error"
    sed '/error/d' file.txt
    ```

