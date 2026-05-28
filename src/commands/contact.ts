import { OutputLine } from '../types'
import { out, blank, section, muted, g, c, mu } from './helpers'

export const contactCommand = (): OutputLine[] => [
  section("let's connect"),
  blank(),
  out(`  ${c('Email')}      ${mu('→')}  ${g('larryngei20@gmail.com')}`),
  out(`  ${c('GitHub')}     ${mu('→')}  ${g('github.com/Larry-Ngei')}`),
  out(`  ${c('LinkedIn')}   ${mu('→')}  ${g('linkedin.com/in/larry-ngei')}`),
  out(`  ${c('Twitter')}    ${mu('→')}  ${g('@larrymwendwa5')}`),
  out(`  ${c('Website')}    ${mu('→')}  ${g('larryngei.dev')}`),
  out(`  ${c('Location')}   ${mu('→')}  ${g('Nairobi, Kenya 🇰🇪')}`),
  blank(),
  muted('  Open to:'),
  muted(`  ${mu('·')} Remote full-stack / frontend roles/ WordPress gigs`),
  muted(`  ${mu('·')} Interesting contracts & freelance projects`),
  muted(`  ${mu('·')} Open source collaboration`),
  blank(),
  muted('  Response time: usually within 24 hours.'),
  blank(),
]
