import { OutputLine } from '../types'
import { out, blank, section, muted, bullet, g, c, mu } from './helpers'

export const aboutCommand = (): OutputLine[] => [
  section('about me'),
  blank(),
  blank(),
  out(`  Hey! I'm ${g('Larry Ngei')}, a passionate full-stack developer`),
  out(`  based in ${c('Nairobi, Kenya 🇰🇪')}.`),
  blank(),
  blank(),
  out(`  I build fast, reliable digital products — from polished`
    
  ),

  out(`  UIs to scalable backend systems. I care deeply about`),
  out(`  clean code, developer experience, and shipping things`),
  out(`  that actually matter to people.`),
  blank(),
  blank(),
  muted('  Currently:'),
  bullet(`${g('Open to work')} — remote or Nairobi-based`),
  bullet(`Building ${c('HabaLink')} — a marketplace for East African SMEs`),
  bullet(`Exploring ${c('LLM integrations')} & AI-assisted tooling`),
  blank(),
  blank(),
  muted('  When not coding:'),
  bullet('Reading about distributed systems & architecture'),
  bullet('Contributing to open source'),
  bullet(`Grabbing nyama choma with the crew ${mu('🍖')}`),
  blank(),
  blank(),
  muted(`  "Code is poetry written in logic."`),
  blank(),
]
