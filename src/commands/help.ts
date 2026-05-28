import { OutputLine } from '../types'
import { out, blank, success, muted, c, mu, w } from './helpers'

export const helpCommand = (): OutputLine[] => [
  success('Available commands'),
  blank(),
  out(`  ${c('about')}        ${mu('—')} who I am & what I do`),
  out(`  ${c('skills')}       ${mu('—')} my full tech stack`),
  out(`  ${c('projects')}     ${mu('—')} things I\'ve shipped`),
  out(`  ${c('experience')}   ${mu('—')} where I\'ve worked`),
  out(`  ${c('education')}    ${mu('—')} academic background`),
  out(`  ${c('contact')}      ${mu('—')} how to reach me`),
  out(`  ${c('resume')}       ${mu('—')} open / download my CV`),
  out(`  ${c('theme')} ${w('[name]')}  ${mu('—')} switch colour theme`),
  out(`  ${c('themes')}       ${mu('—')} list all themes`),
  out(`  ${c('clear')}        ${mu('—')} clear the terminal`),
  out(`  ${c('whoami')}       ${mu('—')} who is the visitor?`),
  out(`  ${c('banner')}       ${mu('—')} show the welcome banner`),
  blank(),
  muted('  Keyboard shortcuts:'),
  muted(`  ${mu('↑ / ↓')}  navigate command history`),
  muted(`  ${mu('Tab')}     autocomplete command`),
  muted(`  ${mu('Ctrl+L')} clear screen`),
  blank(),
]
