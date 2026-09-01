# 🌌 Hamid Kamal — AI Developer & Founder Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-purple.svg?logo=vite)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.25-pink.svg?logo=framer)](https://www.framer.com/motion/)
[![Certificates](https://img.shields.io/badge/Verified_Credentials-29_PDFs-success.svg)](#-verified-credentials-hub)
[![Performance](https://img.shields.io/badge/Performance-60FPS_Optimized-brightgreen.svg)](#-performance--speed-optimizations)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-100%25_Responsive-blueviolet.svg)](#-mobile-responsiveness)

> **State-of-the-Art 3D Glassmorphic Portfolio & Verified Professional Credentials Hub** for **Hamid Kamal**, 17-year-old AI Developer & Founder building high-availability AI systems, embedded hardware serial integrations, CAD/CAM automation engines, and offensive security platforms.

---

## 🌟 Executive Summary

This portfolio represents a high-performance web experience engineered with **React 19**, **TypeScript**, **Vite**, and **Framer Motion**. It features a light blue and warm beige specular 3D aesthetic, hardware-accelerated background animations, and an interactive **Verified Credentials Hub** managing 29 authentic PDF certificates with live modal previews and instant downloads.

---

## ✨ Key Portfolio Features

### 🎓 Verified Credentials Hub (`/certificates`)
* **29 Original PDF Certificates**: Complete, verified document dataset featuring official credentials from **Google Cloud**, **Oracle University (OCI 2025 AI Foundations - Passed 93%)**, **IBM SkillsBuild**, **HackerRank**, **Anthropic (Claude AI)**, **Corizo & IIT Bombay Mood Indigo**, **Codec Technologies**, **Amdox Technologies**, and **Forage Job Simulations (AWS, Walmart, EA, BCG, Accenture)**.
* **Interactive PDF Viewer Modal**: High-definition `<iframe>` document preview with 1-click PDF download buttons and verified metadata sidebars.
* **Live Multi-Attribute Search Bar**: Real-time filtering by credential title, issuing organization, verification ID, or skill tag.
* **6 Category Filter Tabs**:
  * 🧠 `AI & Generative AI`
  * ☁️ `Cloud & Architecture`
  * 🛡️ `Cybersecurity & Hacking`
  * ⚡ `Software & Web Engineering`
  * 👔 `Leadership & Industry`
  * 🌐 `All Credentials`

### 🎨 Light Blue & Beige 3D Design System
* **Specular Glassmorphism**: Translucent card slabs with specular highlight borders (`rgba(255, 255, 255, 0.95)`), backdrop blur (`blur(24px)`), and elevated drop shadows.
* **Dynamic 3D Cursor Spotlight**: Hardware-accelerated cursor glow powered by `requestAnimationFrame` and direct DOM transform translation (`translate3d`), running zero-overhead at smooth 60–120 FPS.
* **Floating 3D Sculptures**: Rotating wireframe 3D cubes, ambient glowing sky-blue and golden-amber color orbs, and particle star matrices.

### 🛠️ Developer Environment & Tooling (`/skills`)
* **Visual Matrix with Vector Icons**: Dedicated breakdown of primary IDEs (**VS Code**, **PyCharm**, **Neovim**), Operating Systems (**Windows 11**, **Ubuntu Linux**, **Arch Linux**, **macOS**), Hardware Debuggers (**Arduino**, **Raspberry Pi**, **ESP32 Serial**), and Cloud Infrastructure (**Google Cloud**, **Oracle OCI**, **AWS**, **Vercel**, **Docker**, **GitHub Actions**).

### 📱 100% Mobile Responsiveness
* **Touch-Optimized Pill Scroll Container**: Smooth horizontal swipe/scroll container (`-webkit-overflow-scrolling: touch`) for category filter tabs on small viewports.
* **Responsive PDF Modal**: Automatic vertical grid stacking (`grid-template-columns: 1fr`) on mobile screens, providing a full-width readable PDF preview iframe and clean action bar.
* **Adaptive Side Navigation**: Smooth glass drawer sidebar on mobile viewports with quick page switching.

### ⚡ Performance & Speed Optimizations
* **Vite Rollup Chunk Splitting**: Vendor bundles separated into cached chunks (`vendor-react`, `vendor-motion`, `vendor-icons`).
* **Asynchronous Asset Loading**: All 3D stage images and logo assets configured with `loading="lazy"` and `decoding="async"`.
* **GPU Hardware Acceleration**: Animated elements enforced with `will-change: transform, opacity` and hardware composite layers.

### 🌐 Omni-Engine Optimization (SEO + GEO + AISO)
* **Generative Engine Optimization (GEO)**: Implements official root AI knowledge files [`/llms.txt`](file:///d:/resume-app/public/llms.txt) and [`/llms-full.txt`](file:///d:/resume-app/public/llms-full.txt) for **ChatGPT (SearchGPT)**, **Google Gemini**, **Grok (xAI)**, **Perplexity AI**, and **Claude (Anthropic)**.
* **Schema.org Knowledge Graph**: Rich JSON-LD `@graph` defining the `Person` entity with alternate name synonyms (`"Hamid"`, `"Hamid Kamal"`), job titles (`"AI Developer"`, `"Full Stack Developer"`, `"Software Developer"`, `"Web Developer"`), occupations, and all 29 verified credentials.
* **AI-Friendly Crawler Indexing**: [`/robots.txt`](file:///d:/resume-app/public/robots.txt) explicitly permitting `GPTBot`, `ChatGPT-User`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, and `Twitterbot` alongside a canonical [`/sitemap.xml`](file:///d:/resume-app/public/sitemap.xml).

---

## 📁 Repository Directory Structure

```
resume-app/
├── public/                               # Static Assets & Web Root
│   ├── certificates/                     # 29 Original PDF Certificate Documents
│   │   ├── analytics_vidhya_qwq_32b.pdf
│   │   ├── anthropic_teaching_ai_fluency.pdf
│   │   ├── aws_solutions_architecture_simulation.pdf
│   │   ├── codec_technologies_ai_training.pdf
│   │   ├── corizo_ai_training.pdf
│   │   ├── corizo_cybersecurity_internship.pdf
│   │   ├── google_cloud_innovating_ai.pdf
│   │   ├── hackerrank_problem_solving_basic.pdf
│   │   ├── hp_life_critical_thinking_ai_era.pdf
│   │   ├── ibm_open_source_hybrid_cloud_ai.pdf
│   │   ├── oracle_cloud_ai_foundations_associate.pdf
│   │   ├── oracle_cloud_ai_score_report.pdf
│   │   ├── prompt_engineering_applications_google.pdf
│   │   ├── walmart_advanced_software_engineering.pdf
│   │   └── ... (29 total verified PDFs)
│   ├── images/                           # Structured Image Assets
│   │   ├── 3d/                           # 3D Stages, Hero Renders & Banner Sculptures
│   │   ├── projects/                     # Project Card Previews (AI, Ventures, Clients)
│   │   └── hamid-ai-developer-portfolio.webp # Profile & Brand Media
│   ├── Hamid Kamal - Resume.pdf          # Official Resume PDF Document
│   ├── llms.txt & llms-full.txt          # GEO Standards for AI Engine Crawlers
│   ├── robots.txt & sitemap.xml          # Search Engine & Crawler Optimization
│   └── favicon.svg                       # Custom AI Monogram Favicon
│
├── src/                                  # React Application Source Code
│   ├── components/                       # Reusable UI Components
│   │   ├── DevEnvironment3DStage.tsx     # 3D Dev Tooling & Workflow Grid
│   │   ├── Effects.tsx                   # Background Orbs, Cursor Spotlight & 3D Cubes
│   │   ├── Footer.tsx                    # 3D Skyline Horizon Footer
│   │   ├── Navbar.tsx                    # Side Navigation Bar with 3D Animations
│   │   ├── CommandPalette.tsx            # Global Quick Search Modal (Cmd + K)
│   │   └── ProjectModal.tsx              # Deep Project Technical Inspector Modal
│   │
│   ├── context/                          # State Management
│   │   └── RouterContext.tsx             # Client-Side Routing Context
│   │
│   ├── data/                             # Structured Data Modules
│   │   ├── certificatesData.ts           # 29 Certificate Records (IDs, Issuers, Dates, Skills)
│   │   ├── projects.ts                   # Featured Engineering Projects & Ventures
│   │   ├── experience.ts                 # Career & Leadership Timeline
│   │   └── skills.ts                     # Core Competency Skill Matrix
│   │
│   ├── pages/                            # Multi-Section Dedicated Pages
│   │   ├── HomePage.tsx                  # Executive Hero & Featured Innovations
│   │   ├── AboutPage.tsx                 # Profile & Principles
│   │   ├── ProjectsPage.tsx              # Architectural Engineering Showcase
│   │   ├── SkillsPage.tsx                # Technical Capabilities & Stack
│   │   ├── ExperiencePage.tsx            # Founder & Engineering Leadership Journey
│   │   ├── CertificatesPage.tsx          # 29 Credentials Dashboard & Modal PDF Viewer
│   │   └── ContactPage.tsx               # Connect & Direct Inquiry Form
│   │
│   ├── App.tsx                           # Main App Component & Suspense Lazy Routes
│   ├── main.tsx                          # React Application Entry Point
│   └── index.css                         # Core CSS Design Tokens & Media Queries
│
├── index.html                            # HTML Entry Document & SEO Meta Tags
├── package.json                          # Package Configuration & Scripts
├── tsconfig.json                         # TypeScript Project Config
├── vite.config.ts                        # Vite Bundler Config & Manual Chunks Settings
└── README.md                             # Comprehensive Project Documentation
```

---

## 🛠️ Tech Stack & Technical Architecture

| Category | Technologies / Libraries Used |
| :--- | :--- |
| **Core Framework** | React 19.2.0, TypeScript 5.9.3 |
| **Build Tooling** | Vite 7.2.4 (ESBuild Target: ES2020) |
| **Animation Engine** | Framer Motion 12.25.0 (`AnimatePresence`, `useScroll`, `useSpring`) |
| **Iconography** | React Icons 5.5.0 (`si`, `vsc`, `fa`, `fi`) |
| **Styling Architecture** | Custom Vanilla CSS Tokens (`index.css`), Specular Glassmorphism |
| **Document Delivery** | PDF `<iframe>` Embed Engine & Direct Standard Download Links |

---

## 🚀 Quick Start & Local Setup

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/hamid220-kamal/hamid-portfolio.git

# Navigate into project folder
cd resume-app

# Install dependencies
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The dev server will launch locally at `http://localhost:5173/`.

### 3. Build Production Bundle
```bash
npm run build
```
Generates optimized, minified production assets in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📜 Key Verified Credentials Summary

| Credential Title | Issuing Body | Verified ID | Category |
| :--- | :--- | :--- | :--- |
| **Innovating with Google Cloud AI** | Google Cloud | `9682341` | Cloud & Architecture |
| **Prompt Engineering Applications** | Google Cloud | `9681192` | AI & Generative AI |
| **OCI 2025 Certified AI Foundations Associate** | Oracle University | `324658677OCI25AICFA` | Cloud & Architecture |
| **OCI 2025 AI Foundations Score Report (93%)** | Oracle University | `OC7916215` | Cloud & Architecture |
| **Open Source Origin Stories (AI Ethics & Cloud)** | IBM SkillsBuild | `e2304945-b243...` | Cloud & Architecture |
| **Problem Solving (Basic) Skill Certification** | HackerRank | `7BDF46201C7D` | Software Engineering |
| **Teaching AI Fluency** | Anthropic (Claude AI) | `ANTHROPIC-FLUENCY` | AI & Generative AI |
| **Yuva AI for All (100% Score Report)** | NASSCOM & MeitY | `66357` / `29657921` | AI & Generative AI |
| **Artificial Intelligence Training** | Codec Technologies (ICAC) | `E19E86-0116588288923` | AI & Generative AI |
| **Artificial Intelligence Intensive Training** | Corizo & IIT Bombay | `CRZ158103` | AI & Generative AI |
| **Cyber Security Internship** | Corizo & IIT Bombay | `CRZ001972` | Cybersecurity & Hacking |
| **Web Development Internship Certificate** | Amdox Technologies | `adx/8HtbPV37dgM` | Software Engineering |
| **Advanced Software Engineering Simulation** | Walmart Global Tech / Forage | `pMZFvJZHkuH7YMbT2` | Software Engineering |
| **Solutions Architecture Simulation** | AWS / Forage | `ADKC35ZCJzNJN2SiE` | Cloud & Architecture |

---

## 👤 Author & Leadership

**Hamid Kamal**  
*17yo AI Developer & Founder*  
* **Location**: Telangana, India  
* **Specializations**: Artificial Intelligence, Embedded Hardware & Web Serial Systems, CAD/CAM CAD Engine Architecture, Offensive Cybersecurity.  
* **GitHub**: [github.com/hamid220-kamal](https://github.com/hamid220-kamal)

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).
