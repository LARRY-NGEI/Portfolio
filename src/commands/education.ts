import { OutputLine } from '../types'
import { out, blank, section, bullet, g, c, mu } from './helpers'

export const educationCommand = (): OutputLine[] => [
  section('education'),
  blank(),

  out(`  ${g('BTech in Information and Communication Technology')}`),
  out(`  ${c('Technical University of Mombasa')}  ${mu('·')}  ${mu('2020 → 2024')}`),
  bullet('Second class honours (Upper Division)— GPA: 3.8 / 4.0'),
  bullet('Final project: Hotel management system with laravel backend & React frontend'),
  bullet('Core member, Computer Science Students Association'),
  blank(),

  out(`  ${g('Software Engineering')}`),
  out(`  ${c('Power Learn Project')}  ${mu('·')}  ${mu('2025')}`),
  bullet('Intensive 6-month bootcamp — JavaScript, React, Ruby on Rails'),
  bullet('Graduated top 10 % of cohort'),
  blank(),

  out(`  ${g('Certified Cyber Security Awareness Training – Associate')}`),
  out(`  ${c('ICT Authority Kenya')}  ${mu('·')}  ${mu('2025')}`),
  blank(),

  out(`  ${g('IBM Emerging Technologies Batch : AI, Blockchain, Cloud')}`),
  out(`  ${c('IBM')}  ${mu('·')}  ${mu('2026')}`),
  blank(),
]
