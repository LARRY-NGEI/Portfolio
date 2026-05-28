import { OutputLine } from '../types'
import { out, blank, section, muted, bullet, g, c, mu, b } from './helpers'

export const experienceCommand = (): OutputLine[] => [
  section('work experience'),
  blank(),
  out(`  ${g('Freelance Web Developer')}`),
  out(`  ${c('Self-employed')}  ${mu('·')}  ${mu('January 2026 → Present')}`),
  blank(),
  blank(),


  out(`  ${g('Web Developer & Junior Administrator')}`),
  out(`  ${c('Tripac Solutions')}  ${mu('·')}  ${mu('July 2025 → January 2026')}`),
  bullet('Developed and maintained 5+ WordPress websites, ensuring mobile responsiveness and high performance.'),
  bullet('Cut initial load time by 40 % via code-splitting & lazy loading.'),
  bullet('Implemented custom WordPress themes and plugins to meet client needs.'),
  bullet('Executed SEO optimization strategies for e-commerce platforms, resulting in improved search rankings and user traffic.'),
  bullet(`Stack: ${c('WordPress · TypeScript · GraphQL · AWS')}`),
  blank(),
  blank(),


  out(`  ${g('System Administrator & Web Developer Attache')}`),
  out(`  ${c('National Industrial and Training Authority')}  ${mu('·')}  ${mu('September 2023 → December 2022')}`),
  bullet('Built internal tools serving 3 00+ employees across departments.'),
  bullet('Collaborated on server maintenance and configuration, reducing downtime by 10% for 50+ users.'),
  bullet('Configured network infrastructure, ensuring 100% uptime and seamless organizational connectivity.'),
  bullet(`Stack: ${c('Node.js · React · PostgreSQL · Docker')}`),
  blank(),
  blank(),





  muted('  Open to Junior Developer / lead roles — remote or Nairobi.'),
  blank(),
]
