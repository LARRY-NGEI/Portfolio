import { OutputLine } from '../types'
import { out, blank, section, tag, m } from './helpers'

export const skillsCommand = (): OutputLine[] => [
  section('tech stack'),
  blank(),
  out(`  ${m('Frontend')}`),
  out(`  ${tag('React','blue')}${tag('TypeScript','blue')}${tag('Next.js','blue')}${tag('Tailwind','blue')}${tag('Vue 3','blue')}${tag('Vite','blue')}`),
  blank(),
  out(`  ${m('Backend')}`),
  out(`  ${tag('Node.js','green')}${tag('Python','green')}${tag('FastAPI','green')}${tag('GraphQL','green')}${tag('REST','green')}${tag('Express','green')}`),
  blank(),
  out(`  ${m('Databases')}`),
  out(`  ${tag('PostgreSQL','yellow')}${tag('MongoDB','yellow')}${tag('Redis','yellow')}${tag('Supabase','yellow')}${tag('Prisma','yellow')}`),
  blank(),
  out(`  ${m('DevOps & Cloud')}`),
  out(`  ${tag('Docker','red')}${tag('AWS','red')}${tag('Vercel','red')}${tag('GitHub Actions','red')}${tag('Linux','red')}`),
  blank(),
  out(`  ${m('Tools & Other')}`),
  out(`  ${tag('Git','purple')}${tag('Figma','purple')}${tag('Postman','purple')}${tag('VS Code','purple')}${tag('Neovim','purple')}`),
  blank(),
  out(`  ${m('Currently learning')}`),
  out(`  ${tag('Rust','cyan')}${tag('WebAssembly','cyan')}${tag('LLM APIs','cyan')}${tag('tRPC','cyan')}`),
  blank(),
]
