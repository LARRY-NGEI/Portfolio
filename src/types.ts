export type LineType =
  | 'output'
  | 'prompt'
  | 'error'
  | 'success'
  | 'info'
  | 'warning'
  | 'ascii'
  | 'blank'

export interface OutputLine {
  id: string
  html: string        // already-sanitised HTML string
  type: LineType
}

export interface CommandResult {
  lines: OutputLine[]
}
