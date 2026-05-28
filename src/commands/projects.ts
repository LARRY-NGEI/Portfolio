import { OutputLine } from '../types'
import { out, blank, section, muted, tag, g, c, mu } from './helpers'

interface Project {
  num: string
  name: string
  tags: Array<{ label: string; colour: 'blue'|'green'|'yellow'|'purple'|'red'|'cyan' }>
  desc: string[]
  link: string
  live?: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'Pesa Track',
    tags: [
      { label: 'React', colour: 'blue' },
      { label: 'Node.js', colour: 'green' },
      { label: 'PostgreSQL', colour: 'yellow' },
      { label: 'M-Pesa API', colour: 'cyan' },
    ],
    desc: [
      'Personal finance app with native M-Pesa STK push integration.',
      'Real-time expense categorisation, visual reports & budget alerts.',
      '500+ monthly active users since launch.',
    ],
    link: 'github.com/yourname/pesa-track',
    live: 'pesatrack.co.ke',
  },
  {
    num: '02',
    name: 'HabaLink',
    tags: [
      { label: 'Next.js', colour: 'blue' },
      { label: 'Prisma', colour: 'purple' },
      { label: 'AWS S3', colour: 'red' },
      { label: 'Stripe', colour: 'green' },
    ],
    desc: [
      'Community marketplace for East African SMEs.',
      '200+ active vendors, 3 000+ product listings across 5 counties.',
      'Integrated escrow payments & logistics tracking.',
    ],
    link: 'github.com/yourname/habalink',
    live: 'habalink.co.ke',
  },
  {
    num: '03',
    name: 'DevBoard',
    tags: [
      { label: 'React', colour: 'blue' },
      { label: 'FastAPI', colour: 'green' },
      { label: 'Redis', colour: 'yellow' },
      { label: 'Docker', colour: 'red' },
    ],
    desc: [
      'Real-time developer productivity dashboard for remote teams.',
      'Pulls data from GitHub, Jira & Slack into one unified view.',
      'Used by 3 engineering teams at Andela.',
    ],
    link: 'github.com/yourname/devboard',
  },
  {
    num: '04',
    name: 'TermFolio',
    tags: [
      { label: 'React', colour: 'blue' },
      { label: 'TypeScript', colour: 'blue' },
      { label: 'Vite', colour: 'purple' },
    ],
    desc: [
      'This very terminal portfolio you\'re exploring right now. 🎉',
      'Open source, fully themeable with 5 colour schemes.',
      'Zero dependencies beyond React.',
    ],
    link: 'github.com/yourname/termfolio',
  },
]

export const projectsCommand = (): OutputLine[] => {
  const lines: OutputLine[] = [
    section('projects'),
    blank(),
  ]

  PROJECTS.forEach((p, i) => {
    const tagStr = p.tags.map(t => tag(t.label, t.colour)).join('')
    lines.push(out(`  ${g(`${p.num}. ${p.name}`)}  ${tagStr}`))
    lines.push(muted('  ' + '─'.repeat(48)))
    p.desc.forEach(d => lines.push(out(`  ${d}`)))
    lines.push(out(`  ${mu('repo')}   ${c('→')} ${c(p.link)}`))
    if (p.live) {
      lines.push(out(`  ${mu('live')}   ${c('→')} ${c(p.live)}`))
    }
    if (i < PROJECTS.length - 1) lines.push(blank())
  })

  lines.push(blank())
  return lines
}
