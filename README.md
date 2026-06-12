# TermFolio 🖥️

A terminal-style portfolio built with **React + TypeScript + Vite**.  
Zero UI-library dependencies. 5 themes. Fully keyboard-driven.

---

## ⚡ Quick Start (local dev)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → open http://localhost:5173
```

---

## 📁 Project Structure

```
termfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── commands/
│   │   ├── index.ts        ← command registry + ASCII banner
│   │   ├── helpers.ts      ← line builder utilities
│   │   ├── about.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── contact.ts
│   │   └── help.ts
│   ├── components/
│   │   ├── Terminal.tsx    ← core terminal UI
│   │   └── Terminal.css
│   ├── themes/
│   │   └── index.ts        ← theme names & descriptions
│   ├── types.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css           ← CSS variables for all themes
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## 🎨 Themes

5 built-in themes, switchable with:
- The coloured dots in the top-right of the title bar  
- Typing `theme <name>` in the terminal  
- Typing `theme` (cycles to next)

| Name      | Vibe                     |
|-----------|--------------------------|
| hacker    | GitHub dark — classic    |
| dracula   | Purple & pink pastels    |
| nord      | Icy arctic blues         |
| monokai   | Warm sunset tones        |
| cyberpunk | Neon on void             |


## 🔧 Build for production

```bash
npm run build
# output → dist/

npm run preview
# preview the production build locally
```

---

## 🛠 Tech Stack

| Layer       | Choice                  |
|-------------|-------------------------|
| Framework   | React 18                |
| Language    | TypeScript              |
| Build tool  | Vite 5                  |
| Styling     | Pure CSS (variables)    |
| Font        | JetBrains Mono          |
| Deployment  | Vercel                  |
| Dependencies| React only (no UI libs) |

---

## 📄 License

MIT — use it, fork it, make it yours.
