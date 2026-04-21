# Inside Cyber Defense

A professional cybersecurity portfolio built to demonstrate skills, projects, and hands-on lab practice to recruiters and hiring managers. Targeting junior SOC analyst and security analyst roles in the UK.

**Live site:** https://evanildo22.github.io/inside-cyber-defense/

---

## About

**Owner:** Evanildo Ribeiro
**Role target:** Junior Cybersecurity Professional — SOC & Security Analysis
**Location:** London, UK
**LinkedIn:** [linkedin.com/in/evanildoribeiro](https://www.linkedin.com/in/evanildoribeiro)
**GitHub:** [github.com/Evanildo22](https://github.com/Evanildo22)

---

## Tech Stack

- **HTML5 / CSS3** — Static site, no build tools required
- **Bootstrap 4** — Responsive grid and components
- **jQuery** — DOM manipulation and plugin support
- **Spline** — Interactive 3D Earth globe in hero section
- **Canvas API** — Custom cyber orbit ring overlay animation
- **TopoJSON / D3** — CIA Triad threat globe
- **Plugins:** WOW.js (scroll animations), MixItUp (portfolio filtering), jQuery CounterUp, Slicknav (mobile nav), Nivo Lightbox (project galleries)
- **Base template:** MeetMe Bootstrap 4 (free version, heavily customised)
- **Hosting:** GitHub Pages (auto-deploys on push to `main`)

---

## Design System

**Direction 3 — "Structured Authority"**

| Token | Value |
|---|---|
| Primary | Navy `#1D2D4A` |
| Accent | Gold `#B8860B` |
| Background | Off-white `#FAFAF8` |
| Dark surface | `#0F1E33` (labs/terminal panels) |
| Body font | Inter |
| Display font | Lora |
| Base unit | 8px |
| Max width | 1100px |

CSS custom properties are defined in `custom.css` under `:root`.

---

## Project Structure

```
Inside Cyber Defense/
│
├── index.html                    # Main homepage (single-page)
│
├── # ── Project pages (content in progress — coming-soon state) ──
├── anomaly-detection.html
├── detection-as-code.html
├── incident-response.html
├── network-security.html
├── network-setup.html
├── network-traffic-analysis.html
├── packet-analysis.html
├── pentesting.html
├── rsa-cryptography.html
├── threat-enrichment.html
├── vulnerability-assessment.html
│
├── # ── Lab pages ──
├── hackthebox.html               # HackTheBox — machines, certs, writeups
├── tryhackme.html                # TryHackMe — paths, rooms, badges
├── catch-the-flag.html           # CTF & Pentesting (content in progress)
│
└── meetme/
    └── assets/
        ├── css/
        │   ├── bootstrap.min.css
        │   ├── main.css            # Base MeetMe theme
        │   ├── responsive.css      # Base responsive rules
        │   ├── custom.css          # Design tokens + all custom styles
        │   └── project-pages.css   # Shared styles for project/lab pages
        │                           # (includes .coming-soon-section component)
        ├── fonts/
        │   ├── font-awesome.min.css
        │   └── simple-line-icons.css
        ├── img/
        │   ├── gallery/            # Project screenshots (placeholders — to be replaced)
        │   ├── about/              # Profile photo
        │   └── CV-document/        # CV PDF for download
        └── js/
            ├── jquery-3.2.1.min.js
            ├── bootstrap.min.js
            ├── jquery.mixitup.js   # Portfolio filter
            ├── wow.js              # Scroll animations
            ├── jquery.counterup.min.js
            ├── waypoints.min.js
            ├── nivo-lightbox.js    # Project image lightbox
            ├── project-pages.js    # Gallery toggle + scroll-spy
            └── main.js
```

---

## Homepage Sections (`index.html`)

| Section | ID | Description |
|---|---|---|
| **Hero** | `#hero-area` | Name, tagline, social links, interactive 3D Earth globe, cyber orbit ring overlay |
| **About** | `#about` | Bio, profile details, CV download, intro video modal |
| **Services** | `#services` | 4 core competency cards |
| **CIA Triad** | `#cia-triad` | Interactive CIA Triad globe with live threat counter |
| **Skills** | `#skills` | Tag-based skill badges by category |
| **Resume** | `#resume` | Education and experience timelines |
| **Certifications** | `#certifications` | Certification cards |
| **Projects** | `#portfolios` | Filterable mini-card grid (11 projects) |
| **Labs** | `#labs-teaser` | HackTheBox & TryHackMe teaser cards |
| **Contact** | `#contact` | Contact details and CV download |

---

## Project & Lab Pages

### Project pages (11 total)
All project pages share the same layout: hero section with title + GitHub/Writeup links, main content area, prev/next navigation, footer. Currently in **coming-soon state** — real content will be added one page at a time as projects are completed.

To publish a page: replace `<section class="coming-soon-section">` with `<section class="project-content">` and add the real documentation, gallery, and video sections.

### Lab pages
| Page | State |
|---|---|
| `hackthebox.html` | Developed — machines, certifications, skills, writeup sections |
| `tryhackme.html` | Developed — learning paths, rooms, badges, skills sections |
| `catch-the-flag.html` | Coming-soon state — CTF machine writeup modals preserved in source |

---

## Placeholder Conventions

All placeholders follow a consistent comment format:

| Type | Comment format |
|---|---|
| **Images** | `<!-- PLACEHOLDER: description WIDTHxHEIGHT px, format notes -->` |
| **Video** | `<!-- PLACEHOLDER: replace VIDEO_ID with actual YouTube video ID -->` |
| **GitHub** | `<!-- PLACEHOLDER: replace # with GitHub repository URL -->` |

**Image specifications:**

| Location | Size | Format | Notes |
|---|---|---|---|
| Project thumbnails (mini-cards) | 600×400px | JPG/PNG | Actual tool output, terminal, or diagram |
| Project gallery screenshots | 800×533px | JPG/PNG | 3:2 ratio, actual project output |
| HTB/THM machine thumbnails | 144×144px | PNG | 2× retina, transparent or solid bg |
| Learning path icons | 96×96px | PNG | 2× retina |
| Lab badges | 160×160px | PNG | Circular, transparent bg |
| Profile logo | 200×60px | PNG | Transparent background |
| CV | — | PDF | `meetme/assets/CV-document/Evanildo_Ribeiro_CV.pdf` |

---

## Development Roadmap

### Stage 1 — Foundation (complete)
- [x] Fix broken JavaScript asset paths
- [x] Add Skills & Tools section with tag-based badges
- [x] Add Labs dropdown to navigation (HackTheBox, TryHackMe, CTF)
- [x] Convert portfolio to filterable hybrid mini-cards
- [x] Create HackTheBox dedicated page
- [x] Create TryHackMe dedicated page
- [x] Shared CSS for project pages
- [x] Design system — CSS custom properties, Direction 3 palette
- [x] CIA Triad section with interactive globe
- [x] Interactive 3D Earth globe + cyber orbit ring overlay in hero
- [x] Apply coming-soon placeholders to all 11 project pages and CTF lab
- [x] Set up GitHub repository and GitHub Pages

### Stage 2 — Content (in progress)
- [ ] Replace coming-soon with real content on each project page (one at a time)
- [ ] Replace all placeholder thumbnail images with real project screenshots
- [ ] Replace all placeholder YouTube video IDs with real walkthroughs
- [ ] Add real GitHub repository links to each project page
- [ ] Add real HackTheBox and TryHackMe profile URLs
- [ ] Add certifications when obtained
- [ ] Publish CTF & Pentesting lab page (catch-the-flag.html)

### Stage 3 — API Integration (planned)
- [ ] HackTheBox API v4 — live stats (rank, machines owned, points)
- [ ] TryHackMe API — live stats (rank, rooms, streak, badges)
- [ ] GitHub API — live repository stats and pinned repos
- [ ] Auto-populate learning path progress bars from THM API

---

## Deployment

The site is hosted on **GitHub Pages** and auto-deploys on every push to `main`.

```bash
# After editing any file locally:
git add <file>
git commit -m "Description of change"
git push
# Site updates within ~30 seconds
```

Local preview: open `index.html` directly in any modern browser — no build step needed.

---

## Contact

- **Email:** contact@evanildoribeiro.com
- **LinkedIn:** [linkedin.com/in/evanildoribeiro](https://www.linkedin.com/in/evanildoribeiro)
- **GitHub:** [github.com/Evanildo22](https://github.com/Evanildo22)
