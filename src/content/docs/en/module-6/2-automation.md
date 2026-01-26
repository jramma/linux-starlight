---
title: 6.2 Automation Examples
description: Real world tasks automated.
sidebar:
  order: 2
---

Scripts shine when doing repetitive tasks.

## Example: Backup Script

A script to archive a directory and name it with today's date.

```bash
#!/bin/bash

SOURCE="/home/user/projects"
DEST="/mnt/backup"
DATE=$(date +%Y-%m-%d)
FILENAME="projects_backup_$DATE.tar.gz"

echo "Starting backup of $SOURCE..."

# Create tar archive
tar -czf "$DEST/$FILENAME" "$SOURCE"

# Check if tar succeeded
if [ $? -eq 0 ]; then
    echo "Backup successful: $FILENAME"
else
    echo "Backup FAILED."
fi
```

## Automating with Cron

Combine your script with cron (Module 3) to strictly "set and forget" (but check your logs!).
