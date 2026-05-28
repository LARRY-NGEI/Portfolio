import { OutputLine, LineType } from '../types'

let _id = 0
const uid = () => String(++_id)

const line = (html: string, type: LineType = 'output'): OutputLine => ({
  id: uid(), html, type,
})

export const blank  = ()             => line('', 'blank')
export const out    = (html: string) => line(html, 'output')
export const success= (html: string) => line(`<span class="c-green">${html}</span>`, 'success')
export const info   = (html: string) => line(`<span class="c-cyan">${html}</span>`, 'info')
export const warn   = (html: string) => line(`<span class="c-yellow">${html}</span>`, 'warning')
export const err    = (html: string) => line(`<span class="c-red">${html}</span>`, 'error')
export const muted  = (html: string) => line(`<span class="c-muted">${html}</span>`, 'output')
export const ascii  = (html: string) => line(html, 'ascii')

/* Convenience colour spans */
export const g  = (s: string) => `<span class="c-green">${s}</span>`
export const y  = (s: string) => `<span class="c-yellow">${s}</span>`
export const c  = (s: string) => `<span class="c-cyan">${s}</span>`
export const m  = (s: string) => `<span class="c-magenta">${s}</span>`
export const r  = (s: string) => `<span class="c-red">${s}</span>`
export const b  = (s: string) => `<span class="c-blue">${s}</span>`
export const mu = (s: string) => `<span class="c-muted">${s}</span>`
export const w  = (s: string) => `<span class="c-white">${s}</span>`
export const bo = (s: string) => `<span class="c-bold">${s}</span>`

export const tag = (label: string, colour: 'blue'|'green'|'yellow'|'purple'|'red'|'cyan') =>
  `<span class="tag tag-${colour}">${label}</span>`

export const section = (title: string) =>
  out(`${y('/*')} ${w(title)} ${y('*/')}`)

export const divider = (char = '─', len = 45) =>
  muted(char.repeat(len))

export const kv = (key: string, val: string, keyWidth = 10) =>
  out(`  ${c(key.padEnd(keyWidth))}  ${w(val)}`)

export const bullet = (text: string) =>
  out(`  ${mu('→')} ${text}`)
