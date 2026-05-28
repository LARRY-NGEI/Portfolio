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

## ✏️ Customising Your Content

Edit these files to make it yours:

| What to change             | File                              |
|----------------------------|-----------------------------------|
| Your name, bio, location   | `src/commands/about.ts`           |
| Tech stack / skills        | `src/commands/skills.ts`          |
| Projects list              | `src/commands/projects.ts`        |
| Work history               | `src/commands/experience.ts`      |
| Education                  | `src/commands/education.ts`       |
| Email, social links        | `src/commands/contact.ts`         |
| Resume PDF URL             | `src/commands/index.ts` → resume  |
| ASCII name banner          | `src/commands/index.ts` → ASCII_LINES |
| Prompt label (your name)   | `src/components/Terminal.tsx` (2 places) + `index.html` |
| Page title / meta          | `index.html`                      |

### Generate your own ASCII art name

Go to → https://patorjk.com/software/taag/  
Font recommendation: **ANSI Shadow** or **Big**  
Paste the output into `ASCII_LINES` in `src/commands/index.ts`.

### Add a resume PDF

1. Upload `yourname_resume.pdf` to Google Drive / Dropbox / your domain
2. In `src/commands/index.ts`, find the `resume` command and uncomment:
   ```ts
   window.open('https://YOUR_PDF_URL_HERE', '_blank')
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

### Add a custom theme

1. Add a CSS block to `src/index.css`:
```css
[data-theme="mytheme"] {
  --bg: #...;
  --bar: #...;
  --border: #...;
  --input-border: #...;
  --text: #...;
  --text-muted: #...;
  --prompt: #...;
  --cursor: #...;
  --green: #...;
  --yellow: #...;
  --cyan: #...;
  --magenta: #...;
  --red: #...;
  --blue: #...;
}
```
2. Add `'mytheme'` to `THEME_NAMES` in `src/themes/index.ts`.
3. Add a description to `THEME_DESCRIPTIONS`.
4. Add a colour to `.theme-pill:nth-child(N)` in `Terminal.css`.

---

## ➕ Adding a New Command

1. Create `src/commands/yourcommand.ts`:
```ts
import { OutputLine } from '../types'
import { out, blank, section, g, c } from './helpers'

export const yourCommand = (): OutputLine[] => [
  section('your section title'),
  blank(),
  out(`  Hello from ${g('your new command')}!`),
  blank(),
]
```

2. Register it in `src/commands/index.ts`:
```ts
import { yourCommand } from './yourcommand'

// inside COMMAND_MAP:
yourcommand: () => yourCommand(),
```

3. Add it to the help text in `src/commands/help.ts`.

---

## 🚀 Deploy to Vercel (free, 2 minutes)

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts — done!
```

### Option B — GitHub + Vercel dashboard

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project
3. Import your repo
4. Framework: **Vite** (auto-detected)
5. Click Deploy → your site is live at `yourproject.vercel.app`

### Custom domain

In Vercel dashboard → Project → Settings → Domains  
Add `yourname.dev` and follow the DNS instructions.

---

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
