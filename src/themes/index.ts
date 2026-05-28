export type ThemeName = 'hacker' | 'dracula' | 'nord' | 'monokai' | 'cyberpunk'

export const THEME_NAMES: ThemeName[] = ['hacker', 'dracula', 'nord', 'monokai', 'cyberpunk']

export const THEME_DESCRIPTIONS: Record<ThemeName, string> = {
  hacker:    'GitHub dark — green on black',
  dracula:   'Dracula — purple & pink pastels',
  nord:      'Nord — icy arctic blues',
  monokai:   'Monokai — warm sunset tones',
  cyberpunk: 'Cyberpunk — neon on void',
}
