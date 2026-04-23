# Adversarial ML & Model Poisoning

[![Status](https://img.shields.io/badge/Status-Planned-lightgrey?style=flat-square)]()
[![Framework](https://img.shields.io/badge/Framework-MITRE%20ATLAS-1D2D4A?style=flat-square)](https://atlas.mitre.org)
[![Tags](https://img.shields.io/badge/Tags-Adversarial%20ML%20%7C%20Model%20Poisoning-lightgrey?style=flat-square)]()

**Live section:** [www.evanildoribeiro.com/#ai-security-research](https://www.evanildoribeiro.com/#ai-security-research)

---

## Overview

Examination of adversarial example generation and training-time poisoning attacks against machine learning models — with a specific focus on models used in security tooling and detection systems.

The research explores how an attacker can influence model behaviour before deployment (poisoning) or at inference time (adversarial examples), and what this means for ML-based security products such as anomaly detection, malware classifiers, and intrusion detection systems.

---

## Research Questions

- How do adversarial examples fool ML-based security models?
- What is the practical impact of model poisoning on detection systems?
- How do these attacks apply specifically to cybersecurity ML use cases?
- What defensive strategies exist at the model, data, and deployment level?

---

## MITRE ATLAS Mapping

| Tactic | Technique | ID |
|---|---|---|
| ML Attack Staging | Craft Adversarial Data | AML.T0043 |
| Persistence | Poison Training Data | AML.T0020 |
| Impact | Evade ML Model | AML.T0015 |

---

## Attack Categories

### Adversarial Examples (Evasion)
Carefully crafted inputs designed to fool a trained model at inference time — causing misclassification without being detectable by standard filters.

### Data Poisoning
Injecting malicious training samples into the training pipeline to corrupt model behaviour — causing backdoors, biased classifications, or degraded performance.

### Model Inversion / Extraction
Reconstructing training data or model parameters through repeated queries — a privacy and intellectual property threat.

---

## Methodology

- [ ] Background research — adversarial ML literature and real-world incidents
- [ ] Lab setup — implement target models (malware classifier, anomaly detector)
- [ ] Adversarial example generation — FGSM, PGD, C&W attacks
- [ ] Poisoning attack implementation — backdoor insertion
- [ ] Defensive evaluation — adversarial training, input validation, ensemble methods
- [ ] MITRE ATLAS mapping
- [ ] Write up and publish

---

[← Back to AI Research](../README.md) · [View on Site](https://www.evanildoribeiro.com/#ai-security-research)
