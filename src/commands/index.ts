import { OutputLine } from '../types'
import { THEME_NAMES, THEME_DESCRIPTIONS, ThemeName } from '../themes'
import { out, blank, success, warn, err, muted, section, g, c, mu } from './helpers'
import { helpCommand }       from './help'
import { aboutCommand }      from './about'
import { skillsCommand }     from './skills'
import { projectsCommand }   from './projects'
import { experienceCommand } from './experience'
import { educationCommand }  from './education'
import { contactCommand }    from './contact'

/* ── ASCII banner ── */
export const ASCII_LINES = [
  "▗▖    ▗▄▖ ▗▄▄▖ ▗▄▄▖▗▖  ▗▖    ▗▖  ▗▖ ▗▄▄▖▗▄▄▄▖▗▄▄▄▖",
  "▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▝▚▞▘     ▐▛▚▖▐▌▐▌   ▐▌     █  ",
  "▐▌   ▐▛▀▜▌▐▛▀▚▖▐▛▀▚▖ ▐▌      ▐▌ ▝▜▌▐▌▝▜▌▐▛▀▀▘  █  ",
  "▐▙▄▄▖▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌ ▐▌      ▐▌  ▐▌▝▚▄▞▘▐▙▄▄▖▗▄█▄▖",
  "                                                  ",
]

export const bannerLines = (): OutputLine[] => [
  ...ASCII_LINES.map(l => ({
    id: Math.random().toString(36).slice(2),
    html: `<span class="c-green c-ascii">${l}</span>`,
    type: 'ascii' as const,
  })),
  blank(),
  out(`  ${g('Larry Ngei')}  ${mu('·')}  Full Stack Developer & AI/ML ${mu('·')}  Nairobi, Kenya`),
  muted('  ───────────────────────────────────────────────────────'),
  out(`  Type ${c('help')} to explore. Use ${c('↑↓')} for history, ${c('Tab')} to autocomplete.`),
  blank(),
]

/* ── Command map ── */
type CommandFn = (args: string[], setTheme: (t: ThemeName) => void) => OutputLine[]

export const COMMAND_MAP: Record<string, CommandFn> = {
  help:       () => helpCommand(),
  about:      () => aboutCommand(),
  skills:     () => skillsCommand(),
  projects:   () => projectsCommand(),
  experience: () => experienceCommand(),
  education:  () => educationCommand(),
  contact:    () => contactCommand(),
  banner:     () => bannerLines(),

  whoami: () => [
    blank(),
    out(`  ${g('visitor')} — a curious human exploring the digital realm.`),
    out(`  You landed on the portfolio of ${c('Larry Ngei')}.`),
    muted('  Enjoy the tour. Type help to get started.'),
    blank(),
  ],

  resume: () => [
    blank(),
    success('Opening resume...'),
    blank(),
    out(`  ${mu('→')} ${c('larryngei_resume_2025.pdf')}`),
    muted('  (Replace the URL in src/commands/index.ts → resume command)'),
    blank(),
    // In production, uncomment the line below and add your PDF URL:
    // (() => { window.open('https://yourname.dev/resume.pdf', '_blank'); return null })()
  ],

  clear: () => [],   // handled specially in Terminal.tsx

  themes: (_args, _setTheme) => [
    blank(),
    section('available themes'),
    blank(),
    ...THEME_NAMES.map(name =>
      out(`  ${c(name.padEnd(12))}  ${mu(THEME_DESCRIPTIONS[name])}`)
    ),
    blank(),
    out(`  Usage: ${c('theme')} ${g('<name>')}   e.g. ${c('theme dracula')}`),
    blank(),
  ],

  theme: (args, setTheme) => {
    const requested = args[0]?.toLowerCase() as ThemeName | undefined

    if (!requested) {
      const idx   = THEME_NAMES.indexOf(
        (document.documentElement.getAttribute('data-theme') as ThemeName) || 'hacker'
      )
      const next  = THEME_NAMES[(idx + 1) % THEME_NAMES.length]
      setTheme(next)
      return [
        blank(),
        success(`Theme switched to: ${next}`),
        muted(`  ${THEME_DESCRIPTIONS[next]}`),
        blank(),
      ]
    }

    if (!THEME_NAMES.includes(requested)) {
      return [
        blank(),
        err(`Unknown theme: "${requested}"`),
        out(`  Available: ${THEME_NAMES.map(t => c(t)).join('  ')}`),
        blank(),
      ]
    }

    setTheme(requested)
    return [
      blank(),
      success(`Theme switched to: ${requested}`),
      muted(`  ${THEME_DESCRIPTIONS[requested]}`),
      blank(),
    ]
  },
}

export const ALL_COMMANDS = Object.keys(COMMAND_MAP)

export const notFoundLines = (cmd: string): OutputLine[] => [
  blank(),
  err(`command not found: ${cmd}`),
  out(`  Type ${c('help')} for available commands. Use ${c('Tab')} to autocomplete.`),
  blank(),
]

// Optional per-command typing options. If a command is absent here, global defaults apply.
export const COMMAND_OPTIONS: Record<string, { typing?: boolean; speed?: number }> = {
  // Example overrides:
  // help: { typing: true, speed: 30 },
  // banner: { typing: false },
}
