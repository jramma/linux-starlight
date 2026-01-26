---
title: 3.4 Logs and Monitoring
description: Troubleshooting and task scheduling.
sidebar:
  order: 5
---

## Logging (`journalctl`)
Systemd collects logs in a central journal.

```bash
# View all logs (scrollable)
journalctl

# tails: View latest logs and follow new ones (like tail -f)
journalctl -f

# Filter by service unit
journalctl -u nginx

# Filter by priority (e.g., Error)
journalctl -p err

# Filter by time
journalctl --since "1 hour ago"
```

## Traditional Logs
Many applications still modify plain text files in `/var/log`.
-   `/var/log/syslog` or `/var/log/messages`: General system log.
-   `/var/log/auth.log` or `/var/log/secure`: Authentication/SSH logs.
-   `/var/log/dmesg`: Kernel buffer (boot messages).

## Scheduling Tasks (`cron`)

The **cron** daemon runs tasks at specific times.

-   `crontab -e`: Edit current user's cron table.
-   `crontab -l`: List tasks.

**Format**:
`m h dom mon dow command`

```bash
# Run backup.sh every day at 3:30 AM
30 03 * * * /home/user/scripts/backup.sh
```
