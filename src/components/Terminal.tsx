import React, {
  useState, useEffect, useRef, useCallback, KeyboardEvent,
} from 'react'
import { OutputLine } from '../types'
import { ThemeName, THEME_NAMES } from '../themes'
import {
  COMMAND_MAP, ALL_COMMANDS, bannerLines, notFoundLines, COMMAND_OPTIONS,
} from '../commands'
import typeLines from '../utils/typer'
import './Terminal.css'

/* ── helpers ── */
const uid = () => Math.random().toString(36).slice(2)

const promptLine = (cmd: string): OutputLine => ({
  id: uid(),
  html: `<span class="c-prompt">Larry@portfolio:~$</span> <span class="c-white">${escHtml(cmd)}</span>`,
  type: 'prompt',
})

function escHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/* ── component ── */
export default function Terminal() {
  const [lines, setLines]       = useState<OutputLine[]>([])
  const [input, setInput]       = useState('')
  const [history, setHistory]   = useState<string[]>([])
  const [histIdx, setHistIdx]   = useState(-1)
  const [theme, setTheme]       = useState<ThemeName>('hacker')
  const [booted, setBooted]     = useState(false)

  const outputRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)
  const animCancelRef = useRef<() => void | null>(null)

  /* apply theme to <html> */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  /* boot sequence */
  useEffect(() => {
    if (booted) return
    setBooted(true)
    const boot = bannerLines()
    // stagger each line slightly for a typewriter feel
    boot.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, line])
      }, i * 30)
    })
  }, [booted])

  /* auto-scroll */
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [lines])

  /* focus input */
  const focusInput = () => inputRef.current?.focus()

  const handleTheme = useCallback((t: ThemeName) => {
    setTheme(t)
  }, [])

  const runCommand = useCallback(async (raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed) return

    // add to history
    setHistory(prev => [trimmed, ...prev.filter(h => h !== trimmed)])
    setHistIdx(-1)

    // echo the prompt
    const prompt = promptLine(trimmed)

    const [cmd, ...args] = trimmed.toLowerCase().split(/\s+/)

    if (cmd === 'clear') {
      setLines([])
      return
    }

    const fn = COMMAND_MAP[cmd]
    let outLines: OutputLine[] = []
    if (fn) {
      outLines = fn(args, handleTheme)
    } else {
      outLines = notFoundLines(cmd)
    }

    // cancel any running animation
    if (animCancelRef.current) {
      animCancelRef.current()
      animCancelRef.current = null
    }

    // append prompt immediately
    setLines(prev => [...prev, prompt])

    // decide typing options
    const cmdOpts = (COMMAND_OPTIONS as Record<string, any>)[cmd] || {}
    const DEFAULT_SPEED = 30
    const typingEnabled = cmdOpts.typing !== undefined ? cmdOpts.typing : true
    const speed = cmdOpts.speed ?? DEFAULT_SPEED

    // animate the output lines
    animCancelRef.current = typeLines(outLines, (updater: any) => setLines(updater), { speed, enabled: typingEnabled })
  }, [handleTheme])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter': {
        runCommand(input)
        setInput('')
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        setHistIdx(idx => {
          const next = Math.min(idx + 1, history.length - 1)
          setInput(history[next] ?? '')
          return next
        })
        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        setHistIdx(idx => {
          const next = idx - 1
          if (next < 0) { setInput(''); return -1 }
          setInput(history[next] ?? '')
          return next
        })
        break
      }
      case 'Tab': {
        e.preventDefault()
        const partial = input.toLowerCase()
        if (!partial) break
        const match = ALL_COMMANDS.find(c => c.startsWith(partial))
        if (match) setInput(match)
        break
      }
      case 'l': {
        if (e.ctrlKey) { e.preventDefault(); setLines([]) }
        break
      }
    }
  }

  return (
    <div className="terminal-wrapper" onClick={focusInput}>
      {/* title bar */}
      <div className="terminal-bar">
        <div className="dot dot-red"   />
        <div className="dot dot-yellow"/>
        <div className="dot dot-green" />
        <span className="bar-title">Larry@portfolio:~</span>
        <div className="bar-theme-pills">
          {THEME_NAMES.map(t => (
            <button
              key={t}
              className={`theme-pill ${theme === t ? 'active' : ''}`}
              onClick={e => { e.stopPropagation(); setTheme(t) }}
              title={t}
            />
          ))}
        </div>
      </div>

      {/* output */}
      <div className="terminal-output" ref={outputRef}>
        {lines.map(line => (
          <div
            key={line.id}
            className={`t-line t-${line.type}`}
            dangerouslySetInnerHTML={{ __html: line.html }}
          />
        ))}
      </div>

      {/* input row */}
      <div className="terminal-input-row">
        <span className="t-prompt-label">Larry@portfolio:~$</span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="terminal input"
          placeholder="type a command…"
        />
        <span className="cursor-blink" aria-hidden />
      </div>
    </div>
  )
}
