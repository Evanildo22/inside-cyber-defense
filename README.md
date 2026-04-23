<div align="center">

# Inside Cyber Defense

**Security Engineering · SOC Analysis · AI Security Research**

[![Live Site](https://img.shields.io/badge/Live%20Site-www.evanildoribeiro.com-1D2D4A?style=for-the-badge&logoColor=white)](https://www.evanildoribeiro.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-evanildoribeiro-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/evanildoribeiro)
[![HackTheBox](https://img.shields.io/badge/HackTheBox-Evancyber-9FEF00?style=for-the-badge&logo=hackthebox&logoColor=black)](https://app.hackthebox.com/public/users/2452811)
[![TryHackMe](https://img.shields.io/badge/TryHackMe-Evan.cyber-C11111?style=for-the-badge&logo=tryhackme&logoColor=white)](https://tryhackme.com/p/Evan.cyber)

</div>

---

## → [www.evanildoribeiro.com](https://www.evanildoribeiro.com)

Professional cybersecurity portfolio targeting Junior SOC Analyst and Security Engineer roles in the UK. Built to demonstrate practical skills through documented projects, hands-on lab work, and original AI security research.

---

## Portfolio Sections

| Section | Live Page | Status |
|---|---|---|
| About & Services | [/#about](https://www.evanildoribeiro.com/#about) | ✅ Live |
| AI Security Research | [/#ai-security-research](https://www.evanildoribeiro.com/#ai-security-research) | 🔄 In Progress |
| Projects | [/#portfolios](https://www.evanildoribeiro.com/#portfolios) | 🔄 Content being added |
| HackTheBox Labs | [/hackthebox.html](https://www.evanildoribeiro.com/hackthebox.html) | ✅ Active |
| TryHackMe Labs | [/tryhackme.html](https://www.evanildoribeiro.com/tryhackme.html) | ✅ Active |
| CTF & Pentesting | [/catch-the-flag.html](https://www.evanildoribeiro.com/catch-the-flag.html) | ⏳ Coming Soon |

---

## Repository Structure

This repository is the source for [www.evanildoribeiro.com](https://www.evanildoribeiro.com). Content folders mirror the website's main sections — each folder holds the raw writeups, notes, and research that populate the styled pages.

```
inside-cyber-defense/
│
├── README.md                              ← This file — portfolio hub
│
├── projects/                              ← 10 cybersecurity project writeups
│   ├── README.md                          ← Projects index
│   ├── anomaly-detection/
│   │   ├── README.md
│   │   └── screenshots/
│   ├── detection-as-code/
│   ├── incident-response/
│   ├── network-security/
│   ├── network-setup/
│   ├── packet-analysis/
│   ├── pentesting/
│   ├── rsa-cryptography/
│   ├── threat-enrichment/
│   └── vulnerability-assessment/
│
├── labs/                                  ← HackTheBox, TryHackMe, CTF
│   ├── README.md                          ← Labs index
│   ├── hackthebox/
│   │   ├── README.md
│   │   └── sherlocks/
│   │       └── brutus.md                 ← ✅ Completed
│   ├── tryhackme/
│   │   ├── README.md
│   │   └── rooms/
│   │       ├── junior-security-analyst-intro.md  ← ✅ Completed
│   │       └── soc-role-blue-team.md             ← ✅ Completed
│   └── ctf/
│       └── README.md
│
└── ai-security-research/                  ← Original AI/ML security research
    ├── README.md                          ← Research hub
    ├── prompt-injection/
    ├── adversarial-ml/
    └── llm-security-toolkit/
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Bootstrap 4, jQuery |
| Animations | WOW.js, Canvas API (orbit ring), Spline (3D globe) |
| Data viz | TopoJSON, D3 (CIA Triad globe) |
| Hosting | GitHub Pages → custom domain via CNAME |
| Domain | `www.evanildoribeiro.com` |

---

## Design System — Direction 3 "Structured Authority"

| Token | Value |
|---|---|
| Primary | Navy `#1D2D4A` |
| Accent | Gold `#B8860B` |
| Background | Off-white `#FAFAF8` |
| Dark surface | `#0F1E33` |
| Body font | Inter |
| Display font | Lora |

CSS custom properties defined in `meetme/assets/css/custom.css` under `:root`.

---

## Homepage Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#hero-area` | Name, tagline, social links, interactive 3D Earth globe |
| About | `#about` | Bio, profile details, CV download |
| Services | `#services` | 4 core competency cards |
| AI Security Research | `#ai-security-research` | Research cards — MITRE ATLAS framework |
| CIA Triad | `#cia-triad` | Interactive CIA Triad globe with live threat counter |
| Skills | `#skills` | Tag-based skill badges by category |
| Resume | `#resume` | Education and experience timelines |
| Certifications | `#certifications` | Certification cards |
| Projects | `#portfolios` | Filterable mini-card grid (10 projects) |
| Labs | `#labs-teaser` | HackTheBox & TryHackMe teaser cards |
| Contact | `#contact` | Contact details and CV download |

---

## Roadmap

### Stage 1 — Foundation ✅ Complete
- [x] Design system, CSS custom properties, Direction 3 palette
- [x] Interactive 3D hero globe + CIA Triad globe
- [x] All project pages (coming-soon state)
- [x] HackTheBox + TryHackMe dedicated pages
- [x] GitHub Pages hosting + custom domain (www.evanildoribeiro.com)
- [x] AI Security Research section

### Stage 2 — Content 🔄 In Progress
- [ ] Populate project pages one at a time as projects are completed
- [ ] Publish AI Security Research writeups (prompt injection analysis first)
- [ ] Add CTF writeup content to catch-the-flag.html
- [ ] Add certifications when obtained

### Stage 3 — API Integration ⏳ Planned
- [ ] HackTheBox live stats via API proxy
- [ ] TryHackMe live stats via API proxy
- [ ] GitHub API for pinned repo stats

---

## Deployment

Auto-deploys to [www.evanildoribeiro.com](https://www.evanildoribeiro.com) on every push to `main`.

```bash
git add <file>
git commit -m "Description of change"
git push
# Site live within ~30 seconds
```

Local preview: open `index.html` in any modern browser — no build step needed.

---

## Contact

- **Email:** contact@evanildoribeiro.com
- **LinkedIn:** [linkedin.com/in/evanildoribeiro](https://www.linkedin.com/in/evanildoribeiro)
- **GitHub:** [github.com/Evanildo22](https://github.com/Evanildo22)
- **Location:** London, UK
