# Prompt Injection Attack Techniques

[![Status](https://img.shields.io/badge/Status-In%20Progress-FBBF24?style=flat-square)]()
[![Framework](https://img.shields.io/badge/Framework-MITRE%20ATLAS-1D2D4A?style=flat-square)](https://atlas.mitre.org)
[![Tags](https://img.shields.io/badge/Tags-LLM%20Security%20%7C%20Prompt%20Injection-lightgrey?style=flat-square)]()

**Live section:** [www.evanildoribeiro.com/#ai-security-research](https://www.evanildoribeiro.com/#ai-security-research)

---

## Overview

Analysis of prompt injection vectors targeting LLM-based applications. This research covers direct, indirect, and multi-step attack chains — examining how malicious instructions can hijack model behaviour, exfiltrate context, or bypass safety controls.

---

## Research Questions

- What are the primary categories of prompt injection attacks?
- How does indirect prompt injection differ from direct injection, and why is it harder to detect?
- What defensive mitigations are currently available and how effective are they?
- How do these attacks map to MITRE ATLAS tactics?

---

## MITRE ATLAS Mapping

| Tactic | Technique | ID |
|---|---|---|
| Initial Access | Prompt Injection | AML.T0051 |
| Exfiltration | LLM Data Leakage | — |
| Defence Evasion | Jailbreak / Safety Bypass | — |

---

## Attack Categories

### Direct Prompt Injection
Attacker directly inputs malicious instructions into the model prompt, overriding system instructions or extracting sensitive context.

### Indirect Prompt Injection
Malicious instructions embedded in external content (web pages, documents, emails) that the LLM processes, causing it to act on attacker-controlled instructions without direct user input.

### Multi-Step / Chained Injection
Sequences of prompts designed to progressively bypass safety controls or extract information across multiple model interactions.

---

## Methodology

- [ ] Literature review — existing research and disclosed incidents
- [ ] Attack taxonomy — categorise injection types and techniques
- [ ] Proof-of-concept testing — controlled environment
- [ ] Defensive analysis — evaluate mitigations (input sanitisation, output filtering, prompt hardening)
- [ ] MITRE ATLAS mapping — map findings to framework tactics
- [ ] Write up findings and publish

---

## Tools & References

| Resource | Link |
|---|---|
| MITRE ATLAS | [atlas.mitre.org](https://atlas.mitre.org) |
| Prompt Injection Attacks | Research in progress |
| LLM Security Guide | Research in progress |

---

## Screenshots & Evidence

Visual evidence stored in [`screenshots/`](./screenshots/) once testing is complete.

---

[← Back to AI Research](../README.md) · [View on Site](https://www.evanildoribeiro.com/#ai-security-research)
