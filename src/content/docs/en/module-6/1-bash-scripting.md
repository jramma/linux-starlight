---
title: 6.1 Bash Scripting Basics
description: Writing your first scripts.
sidebar:
  order: 1
---

A script is just a text file with a list of commands.

## The Shebang (`#!`)
The first line tells Linux which interpreter to use.
```bash
#!/bin/bash
```

## First Script (Variables)

Create `hello.sh`:
```bash
#!/bin/bash

# Define a variable (No spaces in assignment!)
NAME="World"

# Print it using $
echo "Hello, $NAME"
```
Make it executable: `chmod +x hello.sh`. Run it: `./hello.sh`.

## Control Flow

### If Statement
```bash
if [ -f "/etc/passwd" ]; then
    echo "Filesystem is sane."
else
    echo "Something is very wrong."
fi
```

### For Loop
```bash
for i in {1..5}; do
    echo "Count: $i"
done
```

## Exit Codes
Every command returns a status.
-   `0`: Success.
-   Non-zero: Error.
You check it with `$?`.
