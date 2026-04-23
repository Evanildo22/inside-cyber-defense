# Brutus — HackTheBox Sherlock

[![Difficulty](https://img.shields.io/badge/Difficulty-Easy-4ade80?style=flat-square)]()
[![Category](https://img.shields.io/badge/Category-DFIR-9FEF00?style=flat-square)]()
[![Status](https://img.shields.io/badge/Status-Completed-4ade80?style=flat-square)]()
[![Date](https://img.shields.io/badge/Completed-Aug%202025-lightgrey?style=flat-square)]()

**Platform:** HackTheBox Sherlocks · **Live page:** [www.evanildoribeiro.com/hackthebox.html](https://www.evanildoribeiro.com/hackthebox.html)

---

## Overview

Brutus is an easy DFIR Sherlock on HackTheBox focused on Linux authentication log analysis. The challenge involves investigating suspicious SSH activity using system log files to identify attacker behaviour, brute-force patterns, and unauthorised access.

**Skills practised:**
- Linux log analysis (`auth.log`, `wtmp`)
- SSH brute-force detection
- Timeline reconstruction
- User account investigation

---

## Artefacts Provided

| File | Description |
|---|---|
| `auth.log` | Linux authentication log — SSH login attempts |
| `wtmp` | Login session records |

---

## Investigation Methodology

### 1. Identify brute-force activity
- Analysed `auth.log` for repeated failed SSH authentication attempts
- Identified source IP address responsible for the brute-force
- Counted failed attempts before successful authentication

### 2. Confirm successful login
- Located the timestamp of the first successful SSH login after brute-force
- Identified the username used to gain access

### 3. Account and session analysis
- Investigated what actions were taken post-compromise
- Examined `wtmp` records to reconstruct active sessions
- Identified any additional accounts created or modified

### 4. Timeline reconstruction
- Built a complete timeline from first brute-force attempt to compromise

---

## Key Findings

> Full answers and flag solutions are intentionally omitted in line with HackTheBox's responsible disclosure policy.

- Identified attacker IP and brute-force volume
- Pinpointed exact timestamp of successful compromise
- Traced post-compromise activity through log correlation

---

## Tools Used

| Tool | Purpose |
|---|---|
| `grep` / `awk` | Log filtering and pattern extraction |
| `last` / `lastb` | Session and failed login analysis from wtmp |
| Text editor | Manual log inspection and timeline building |

---

## MITRE ATT&CK Mapping

| Technique | ID | Description |
|---|---|---|
| Brute Force: Password Guessing | T1110.001 | Repeated SSH authentication attempts |
| Valid Accounts | T1078 | Login with compromised credentials |
| System Information Discovery | T1082 | Post-compromise enumeration |

---

## Lessons Learned

- `auth.log` is a primary source for detecting brute-force and unauthorised access patterns
- `wtmp` provides session-level visibility that complements auth log analysis
- Correlating timestamps across log files is essential for accurate timeline reconstruction

---

[← Back to HackTheBox](../README.md) · [← Back to Labs](../../README.md)
