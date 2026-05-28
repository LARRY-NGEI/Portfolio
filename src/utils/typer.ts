import { OutputLine } from '../types'

function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms))
}

// Reveal HTML while preserving tags. Shows up to `visibleChars` non-tag characters.
export function revealHtml(html: string, visibleChars: number) {
  const tokens = html.match(/(<[^>]+>|[^<]+)/g) || []
  const openTags: string[] = []
  let remaining = visibleChars
  let out = ''

  for (const t of tokens) {
    if (t.startsWith('<')) {
      out += t
      // opening tag
      const m = t.match(/^<([a-zA-Z0-9-]+)(\s|>|$)/)
      if (m && !t.startsWith('</') && !t.endsWith('/>')) {
        openTags.push(m[1])
      }
      // closing tag
      if (t.startsWith('</')) {
        const cm = t.match(/^<\/([a-zA-Z0-9-]+)>/)?.[1]
        if (cm) {
          const idx = openTags.lastIndexOf(cm)
          if (idx >= 0) openTags.splice(idx, 1)
        }
      }
    } else {
      if (remaining <= 0) continue
      const take = Math.min(remaining, t.length)
      out += t.slice(0, take)
      remaining -= take
    }
  }

  // close any still-open tags to keep HTML valid
  for (let i = openTags.length - 1; i >= 0; i--) {
    out += `</${openTags[i]}>`
  }

  return out
}

// Count visible (non-tag) characters in an HTML string
function countVisible(html: string) {
  return (html.replace(/<[^>]+>/g, '') || '').length
}

type SetLines = (updater: (prev: OutputLine[]) => OutputLine[] ) => void

export function typeLines(lines: OutputLine[], setLines: SetLines, opts?: { speed?: number; enabled?: boolean }) {
  const speed = opts?.speed ?? 30
  const enabled = opts?.enabled ?? true
  let cancelled = false

  if (!enabled) {
    setLines(prev => [...prev, ...lines])
    return () => { cancelled = true }
  }

  // run asynchronously
  ;(async () => {
    for (const line of lines) {
      if (cancelled) break

      // quick path for blank lines
      if (!line.html) {
        setLines(prev => [...prev, line])
        continue
      }

      const total = countVisible(line.html)

      // append placeholder line
      const placeholder: OutputLine = { id: line.id, html: '', type: line.type }
      setLines(prev => [...prev, placeholder])

      for (let i = 1; i <= total; i++) {
        if (cancelled) break
        const partial = revealHtml(line.html, i)
        const partialWithCursor = i < total ? partial + '<span class="typing-cursor" aria-hidden></span>' : partial
        setLines(prev => prev.map(l => l.id === line.id ? { ...l, html: partialWithCursor } : l))
        await sleep(speed)
      }

      if (!cancelled) {
        setLines(prev => prev.map(l => l.id === line.id ? { ...l, html: line.html } : l))
        // small pause between lines
        await sleep(Math.max(30, Math.round(speed * 0.6)))
      }
    }
  })()

  return () => { cancelled = true }
}

export default typeLines
