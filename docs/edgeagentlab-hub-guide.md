# Edge Agent Lab — Website Hub Redesign Guide

## Context for Claude Code

Edge Agent Lab is a collection of Android apps and experiments exploring on-device AI (edge AI) for agentic workflows. The author is Anton (Angel Anton), an Android developer with outdoor/cycling background who blogs at monday8am.com.

**Current state**: edgeagentlab.dev is a GitHub Pages site (hosted via IONOS DNS, GitHub repo) with essentially just a title and a `tests/tool_tests.json` endpoint. It needs to become a hub that links all apps, articles, and resources — without duplicating the blog content on monday8am.com.

**Tech stack**: Static site hosted on GitHub Pages. HTML/CSS/JS only. No build tools, no frameworks. The `tests/` directory must remain untouched (the app fetches test JSON from there).

**Design direction**: Developer-focused, lab/research aesthetic. Dark theme. Monospace accents for the "lab" feel. Clean, fast-loading. Not a startup landing page — a project homepage for developers who build things.

---

## Site Structure

```
edgeagentlab.dev/
├── index.html          ← Hub landing page
├── koogagent.html      ← KoogAgent app page
├── cycling-copilot.html ← Cycling Copilot demo page
├── assets/
│   ├── styles.css
│   └── images/         ← Screenshots, diagrams (placeholder references)
├── tests/              ← DO NOT TOUCH. Existing JSON test endpoint
│   └── tool_tests.json
├── CNAME               ← Already exists: edgeagentlab.dev
└── README.md
```

---

## Page 1: Hub Landing Page (`index.html`)

### Purpose
Entry point. Shows what Edge Agent Lab is, links to the apps, links to articles on monday8am.com.

### Content

**Header area:**
- Title: "Edge Agent Lab"
- Tagline: "Testing the boundaries of on-device AI on Android"
- One-liner context: "A collection of apps and experiments exploring agentic workflows with small language models on mobile devices."
- Author link: "by [Anton](https://monday8am.com)" (subtle, not prominent)

**Apps section — two cards:**

Card 1: **KoogAgent**
- Subtitle: "Edge AI Testing Platform"
- Short description: "Browse, download, and test small language models for text generation and function calling on Android. An alternative to Google's AI Edge Gallery focused on agentic workflows."
- Key features (very brief): Multi-runtime support (LiteRT-LM, MediaPipe) · Koog agent integration · Remote test definitions · No HuggingFace login required
- Links: [Learn more →](koogagent.html) · [GitHub](https://github.com/monday8am/koogagent)
- Status badge: "Active development"

Card 2: **Cycling Copilot**
- Subtitle: "Agentic Demo — Two-Model Architecture"
- Short description: "A proof-of-concept using FunctionGemma (270M) as a local intent router and Gemma 3 1B for natural language generation. Voice-driven mid-ride assistance for cyclists."
- Key concept: FunctionGemma routes intent → API calls → Gemma 3 1B generates human response
- Links: [Learn more →](cycling-copilot.html) · GitHub (coming soon)
- Status badge: "In development"

**Research section — article links:**
Title: "Research & Writing"
List of articles (link to monday8am.com, open in new tab):

1. "Let's Talk About FunctionGemma" — Feb 2026
   Brief: Decision tree for when (not) to use FunctionGemma on mobile
   Link: https://monday8am.com/blog/2026/02/08/lets-talk-about-functiongemma.html

2. "Researching Tool Calling in On-Device AI" — Dec 2025
   Brief: Model conversion pipelines, runtime comparison, test results
   Link: https://monday8am.com/blog/2025/12/10/function-calling-edge-ai.html

3. "From Flat Notifications to Edge AI" — Oct 2025
   Brief: Koog + MediaPipe integration prototype for context-aware notifications
   Link: https://monday8am.com/blog/2025/10/01/flat-notifications-edge-ai.html

**Resources section (small, at bottom):**
- Test endpoint: `https://edgeagentlab.dev/tests/tool_tests.json`
- Model conversion notebook: link to Colab (https://colab.research.google.com — placeholder, Anton has the actual URL)
- Key references: Berkeley BFCL Leaderboard, Google AI Edge Torch, LiteRT-LM docs, Koog docs

**Footer:**
- Links: [monday8am.com](https://monday8am.com) · [GitHub](https://github.com/monday8am) · [Twitter](https://twitter.com/angel_anton) · [LinkedIn](https://www.linkedin.com/in/angeleanton/)

---

## Page 2: KoogAgent (`koogagent.html`)

### Purpose
Detailed page for the main testing platform app.

### Content

**Header:**
- Back link: "← Edge Agent Lab"
- Title: "KoogAgent"
- Subtitle: "Edge AI Testing Platform for Android"

**What it is (2-3 paragraphs):**
KoogAgent is an Android app for browsing, downloading, and testing small language models directly on mobile devices. It integrates JetBrains Koog for agent orchestration with Google's inference libraries (LiteRT-LM and MediaPipe), providing a platform to evaluate how well models handle text generation and function calling in resource-constrained environments.

Think of it as an alternative to Google's AI Edge Gallery, focused specifically on text generation and agentic workflows. It adds what AI Edge Gallery doesn't: agent framework integration, tool calling support via both runtimes, remote test definitions, and no HuggingFace sign-up requirement.

**Architecture (brief):**
- Four-module structure with 75.1% code sharing for KMP compatibility
- Bridge pattern: Koog AIAgent → LocalInferenceLLMClient → LiteRT-LM or MediaPipe native library
- JSON-defined test cases with three-layer validation
- Remote test loading from edgeagentlab.dev

**Supported models (table or compact list):**
| Model | Size | Runtime | Tool Calling | Status |
|-------|------|---------|-------------|--------|
| Gemma 3 1B | ~1 GB | LiteRT-LM (GPU) | No (text gen only) | ✅ Working |
| FunctionGemma 270M | ~288 MB | LiteRT-LM | Yes (fine-tuned) | 🔧 In progress |
| Qwen3-0.6B | ~0.6 GB | LiteRT-LM (CPU) | Trained but crashes | ❌ Runtime issues |
| Hammer2.1-0.5B | ~0.5 GB | MediaPipe / LiteRT-LM | Trained but broken | ❌ Runtime issues |

**Screenshots:**
Placeholder references — Anton will add actual images:
- `assets/images/koogagent-model-select.png` — Model selection screen
- `assets/images/koogagent-inference.png` — Inference + notification output
- `assets/images/koogagent-tests.png` — Test runner screen

**Links:**
- GitHub: https://github.com/monday8am/koogagent
- Play Store: (coming soon)
- Related articles: links to the three monday8am.com posts

---

## Page 3: Cycling Copilot (`cycling-copilot.html`)

### Purpose
Page for the cycling copilot demo concept — the two-model agentic architecture.

### Content

**Header:**
- Back link: "← Edge Agent Lab"
- Title: "Cycling Copilot"
- Subtitle: "Two-Model Agentic Demo"

**What it is (2-3 paragraphs):**
A proof-of-concept demonstrating how two on-device models can work together for an agentic experience. A cyclist mid-ride says "I'm tired, find me a flatter way to the campsite" and the system interprets intent, calls the right APIs, and responds naturally.

FunctionGemma (270M) acts as a local intent router — classifying what the user wants (re-route, POI query, status check, trip logging) and extracting key constraints. Gemma 3 1B handles the natural language generation, producing human-readable responses from structured API results.

This demo explores the "compound system" pattern Google describes for FunctionGemma: a lightweight edge model handling routing while bigger models handle the rest.

**Architecture diagram (described for implementation):**
A simple flow diagram showing:
```
Voice Input → FunctionGemma (intent + params) → API Router (Koog) → [Routing API / POI DB / Weather API] → Gemma 3 1B (response generation) → User
```

**Why this use case:**
- Language input is genuinely ambiguous ("flatter" is subjective, "tired" implies preference changes)
- Multiple filter screens can't express combined constraints easily
- Failure is acceptable (wrong route suggestion ≠ safety risk)
- Demonstrates the router pattern that FunctionGemma was designed for

**Honest limitations:**
- Offline routing is not feasible — routing algorithms are too complex for local computation
- Requires connectivity for API calls, which reduces the "edge AI" value proposition
- FunctionGemma needs fine-tuning for this specific domain — zero-shot won't work
- The demo is about proving the architecture, not building a production app

**Status:** In development. Architecture designed, implementation pending.

**Links:**
- GitHub: (coming soon)
- FunctionGemma article: https://monday8am.com/blog/2026/02/08/lets-talk-about-functiongemma.html

---

## Design Specifications

### Visual Direction
- **Theme**: Dark background (#0a0a0a or similar near-black), light text
- **Aesthetic**: Developer lab — clean, utilitarian, slightly brutalist. Not startup-polished.
- **Typography**: A monospace or semi-mono font for headings (JetBrains Mono, IBM Plex Mono, or Source Code Pro from Google Fonts). A clean sans-serif for body text (IBM Plex Sans, or similar). Avoid Inter, Roboto, Arial.
- **Accent color**: A single accent — green (#00ff88 or similar terminal-green) for links, badges, and highlights. Restrained use.
- **Cards**: Subtle borders or slightly lighter backgrounds (#111 or #151515). No shadows, no gradients.
- **Status badges**: Small pill-shaped labels. Green for "active", amber for "in development", red for "blocked".

### Layout
- Max content width: ~800px centered, generous side margins
- No hero images or large banners. Content-first.
- Mobile responsive (single column on mobile, two-column cards on desktop)
- Navigation: minimal. Just the page title as home link + back arrows on sub-pages.

### Interactions
- Minimal animations. A subtle fade-in on page load is fine. No scroll effects.
- Links change color on hover. That's it.
- No JavaScript required except possibly for a mobile menu toggle (but prefer CSS-only).

---

## Implementation Notes for Claude Code

1. **Do not touch `tests/` directory** — it contains the JSON endpoint the Android app fetches from.

2. **Keep CNAME file** — it must contain `edgeagentlab.dev` for GitHub Pages custom domain.

3. **All article links open in new tabs** (target="_blank" rel="noopener") — they go to monday8am.com, which is a separate site.

4. **Image placeholders** — Use descriptive alt text and a simple placeholder styling (dark gray box with centered text like "Screenshot: Model Selection") so Anton can drop in real images later.

5. **Semantic HTML** — Use proper heading hierarchy, nav, main, article, footer elements.

6. **Single CSS file** — Keep it in `assets/styles.css`. No CSS frameworks.

7. **Performance** — No external dependencies except Google Fonts. Everything should load fast on mobile.

8. **Future-proofing** — The structure should make it easy to add a third app page later. The hub page card layout should accommodate 3-4 cards without redesign.

---

## Content that Anton needs to provide later

- [ ] Actual app screenshots (4-5 images)
- [ ] Colab notebook URL for model conversion
- [ ] GitHub repo URL for Cycling Copilot (when created)
- [ ] Play Store link for KoogAgent (when published)
- [ ] Any additional apps/demos to add as cards
