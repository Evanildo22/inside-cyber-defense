# RSA Cryptography

[![Status](https://img.shields.io/badge/Status-Complete-2D9D5F?style=flat-square)]()
[![Language](https://img.shields.io/badge/Language-Python-3776AB?style=flat-square&logo=python&logoColor=white)]()
[![Framework](https://img.shields.io/badge/Framework-Flask-000000?style=flat-square&logo=flask&logoColor=white)]()
[![Live Page](https://img.shields.io/badge/Live%20Page-View%20on%20Portfolio-1D2D4A?style=flat-square)](https://www.evanildoribeiro.com/rsa-cryptography.html)
[![GitHub](https://img.shields.io/badge/Source%20Code-GitHub-181717?style=flat-square&logo=github)](https://github.com/Evanildo22/CRYPTOGRAPHY)

[← Back to Projects](../README.md) · [Styled writeup on site](https://www.evanildoribeiro.com/rsa-cryptography.html)

---

## Headline

> Cryptographically secure file sharing that stays safe under full storage compromise

---

## Overview

A secure file-sharing web app that encrypts data before storage and verifies integrity before decryption. Built to remain confidential even if the storage layer is fully breached — using the same cryptographic controls found in production security systems.

---

## Technical Deep-Dive

Built a Flask-based system enforcing a **verify-then-decrypt model** to eliminate decryption oracle risks (aligned with OWASP cryptographic best practices). Implements:

| Primitive | Standard | Purpose |
|---|---|---|
| AES-256-GCM | NIST SP 800-38D | Authenticated encryption at rest |
| RSA-OAEP / RSA-PSS | RFC 8017 | Secure key transport + digital signatures |
| ECDH P-256 + HKDF | RFC 5869 | Perfect Forward Secrecy (TLS 1.3 model) |
| HMAC-SHA256 | RFC 2104 | Tamper-evident audit trail |

The architecture assumes a compromised storage layer, ensuring confidentiality under full read access. Every operation is logged in a tamper-evident audit trail — enabling detection of unauthorised modifications and satisfying a core SOC visibility requirement.

**System flow:** `Encrypt → Sign → Store → Verify → Decrypt`
The storage layer is treated as **Untrusted** throughout this flow.

---

## Impact & Metrics

- **Dual encryption modes** (RSA key transport + ECDH PFS) — documenting real-world trade-offs between long-term key exposure and forward secrecy across documented attack scenarios
- **83 unit tests** — covering tamper detection, key misuse, IV reuse, signature forgery, and forward secrecy failure conditions
- **Storage-compromise-resilient architecture** — enforcing signature verification before any decryption path, stress-tested against four simulated adversarial attack classes

---

## Tools & Technologies

| Tool | Purpose |
|---|---|
| Python 3 (`cryptography` library) | Core cryptographic primitives |
| Flask | Web application framework |
| OpenSSL | Key generation and certificate operations |
| PyCryptodome | Additional cryptographic utilities |
| pytest | 83-test unit test suite |
| Jupyter | Prototype and analysis notebooks |

---

## Skills Demonstrated

`AES-256-GCM` · `ECDH P-256` · `RSA-OAEP` · `RSA-PSS` · `HKDF` · `Cryptographic Threat Modelling` · `Secure Key Management` · `Tamper Detection (HMAC-SHA256)` · `Flask Security Architecture` · `Decryption Oracle Defence` · `Analytical Thinking`

---

## Screenshots

Visual evidence is stored in [`screenshots/`](./screenshots/):

| File | Contents |
|---|---|
| `architecture-diagram.png` | Encrypt → Sign → Store → Verify → Decrypt flow with "Untrusted" storage annotation |
| `test-output.png` | pytest output — 83 passing unit tests (dark theme) |

---

**Live writeup:** [www.evanildoribeiro.com/rsa-cryptography.html](https://www.evanildoribeiro.com/rsa-cryptography.html)  
**Source code:** [github.com/Evanildo22/CRYPTOGRAPHY](https://github.com/Evanildo22/CRYPTOGRAPHY)
