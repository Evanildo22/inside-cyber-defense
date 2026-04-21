# Inside Cyber Defense

A professional cybersecurity portfolio built to demonstrate skills, projects, and hands-on lab practice to recruiters and hiring managers. Targeting junior SOC analyst and security analyst roles in the UK.

---

## About

**Owner:** Evanildo Ribeiro
**Role target:** Junior Cybersecurity Professional — SOC & Security Analysis
**Location:** London, UK
**LinkedIn:** [linkedin.com/in/evanildoribeiro](https://www.linkedin.com/in/evanildoribeiro)

---

## Tech Stack

- **HTML5 / CSS3** — Static site, no build tools required
- **Bootstrap 4** — Responsive grid and components
- **jQuery** — DOM manipulation and plugin support
- **Plugins:** WOW.js (scroll animations), MixItUp (portfolio filtering), jQuery CounterUp, Slicknav (mobile nav)
- **Base template:** MeetMe Bootstrap 4 (free version, heavily customised)

---

## Project Structure

```
Inside Cyber Defense/
│
├── index.html                    # Main homepage (single-page profile)
├── hackthebox.html               # HackTheBox labs page
├── tryhackme.html                # TryHackMe labs page
│
├── network-setup.html            # Project: Network Setup & Configuration
├── network-security.html         # Project: Network Security
├── anomaly-detection.html        # Project: Anomaly Detection
├── rsa-cryptography.html         # Project: RSA Cryptography
├── packet-analysis.html          # Project: Packet Analysis
├── vulnerability-assessment.html # Project: Vulnerability Assessment
├── network-traffic-analysis.html # Project: Network Traffic Analysis
├── pentesting.html               # Project: Pentesting & Ethical Hacking
├── incident-response.html        # Project: Incident Response
├── detection-as-code.html        # Project: Detection-as-Code
├── threat-enrichment.html        # Project: Automated Threat Enrichment
│
└── meetme/
    └── assets/
        ├── css/
        │   ├── bootstrap.min.css
        │   ├── main.css            # Base MeetMe theme
        │   ├── responsive.css      # Base responsive rules
        │   ├── custom.css          # All custom styles (Skills, Labs, Mini-cards)
        │   └── project-pages.css   # Shared styles for all project detail pages
        ├── fonts/
        │   ├── font-awesome.min.css
        │   └── simple-line-icons.css
        ├── img/
        │   ├── gallery/            # Project thumbnail images (to be replaced)
        │   ├── about/              # Profile photo
        │   └── CV-document/        # CV PDF for download
        └── js/
            ├── jquery-min.js
            ├── bootstrap.min.js
            ├── jquery.mixitup.js   # Portfolio filter
            ├── wow.js              # Scroll animations
            ├── jquery.counterup.min.js
            ├── waypoints.min.js
            └── main.js
```

---

## Homepage Sections (index.html)

| Section | Description |
|---|---|
| **Hero** | Name, tagline, social links |
| **About** | Bio, profile details, CV download |
| **Services** | 4 core competency cards |
| **Skills & Tools** | Tag-based skill badges by category |
| **Resume** | Education and experience timelines |
| **Projects** | Filterable mini-card grid (11 projects) |
| **Labs** | HackTheBox & TryHackMe teaser cards |
| **Counters** | Activity statistics |
| **Contact** | Contact details and CV download |

---

## Placeholder Conventions

All placeholders follow a consistent comment format so they are easy to find and replace:

| Type | Comment format |
|---|---|
| **Images** | `<!-- PLACEHOLDER: description WIDTHxHEIGHT px, format notes -->` |
| **API data** | `<!-- API: endpoint / data source description -->` |
| **Video** | `<!-- PLACEHOLDER: replace VIDEO_ID with actual YouTube video ID -->` |
| **GitHub** | `<!-- PLACEHOLDER: replace # with GitHub repository URL -->` |

**Image specifications:**

| Location | Size | Format | Notes |
|---|---|---|---|
| Project thumbnails (mini-cards) | 600×400px | JPG/PNG | Actual tool output, terminal, or diagram |
| Project gallery screenshots | 800×533px | JPG/PNG | 3:2 ratio, actual project output |
| HTB/THM machine/room thumbnails | 144×144px | PNG | 2× retina, transparent or solid bg |
| Learning path icons | 96×96px | PNG | 2× retina |
| Lab badges | 160×160px | PNG | Circular, transparent bg |
| Profile logo | 200×60px | PNG | Transparent background |
| CV | — | PDF | `/meetme/assets/CV-document/Evanildo_Ribeiro_CV.pdf` |

---

## Development Roadmap

### Stage 1 — Content Structure (current)
- [x] Fix broken JavaScript asset paths
- [x] Add Skills & Tools section with tag-based badges
- [x] Add Labs dropdown to navigation
- [x] Convert portfolio to filterable hybrid mini-cards
- [x] Create HackTheBox dedicated page with placeholder content
- [x] Create TryHackMe dedicated page with placeholder content
- [x] Shared CSS for project pages (remove inline duplication)
- [ ] Replace all placeholder thumbnail images with real project screenshots
- [ ] Replace all placeholder YouTube video IDs with real project walkthroughs
- [ ] Add real GitHub repository links
- [ ] Add real HackTheBox and TryHackMe profile URLs
- [ ] Add certifications when obtained

### Stage 2 — Presentation & UX (planned)
- [ ] Full visual redesign with cybersecurity-themed colour palette
- [ ] Custom hero section with animated background
- [ ] Improved typography and layout hierarchy
- [ ] Dark/light mode toggle
- [ ] Smooth page transitions
- [ ] Performance optimisation (lazy loading, compressed assets)

### Stage 3 — API Integration (planned)
- [ ] HackTheBox API v4 — live stats (rank, machines owned, points)
- [ ] TryHackMe API — live stats (rank, rooms, streak, badges)
- [ ] GitHub API — live repository stats and pinned repos
- [ ] Auto-populate learning path progress bars from THM API

---

## Getting Started

This is a static HTML site — no build process required.

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. All assets are served locally from the `meetme/assets/` folder

To deploy, upload the entire folder to any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

---

## Contact

- **Email:** dejaines@hotmail.com
- **Phone:** +44 74 1126 9534
- **LinkedIn:** [linkedin.com/in/evanildoribeiro](https://www.linkedin.com/in/evanildoribeiro)
