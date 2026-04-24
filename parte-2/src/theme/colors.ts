export type ColorTheme = 'green' | 'darkGreen' | 'cyan' | 'orange' | 'pink' | 'coral' | 'blue' | 'peach' | 'aqua' | 'purple' | 'amber'

export interface ColorThemeConfig {
  name: string
  primary: string
  primaryDim: string
  primaryFaint: string
  background: string
  card: string
  border: string
  text: string
  textMuted: string
}

export const colorThemes: Record<ColorTheme, ColorThemeConfig> = {
  green: {
    name: 'green',
    primary: '#A3FF6A',
    primaryDim: 'rgba(163, 255, 106, 0.25)',
    primaryFaint: 'rgba(163, 255, 106, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  darkGreen: {
    name: 'darkGreen',
    primary: '#C9FF47',
    primaryDim: 'rgba(201, 255, 71, 0.25)',
    primaryFaint: 'rgba(201, 255, 71, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  cyan: {
    name: 'cyan',
    primary: '#6FD3E3',
    primaryDim: 'rgba(111, 211, 227, 0.25)',
    primaryFaint: 'rgba(111, 211, 227, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  orange: {
    name: 'orange',
    primary: '#FF7A1A',
    primaryDim: 'rgba(255, 122, 26, 0.25)',
    primaryFaint: 'rgba(255, 122, 26, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  pink: {
    name: 'pink',
    primary: '#FF3D6E',
    primaryDim: 'rgba(255, 61, 110, 0.25)',
    primaryFaint: 'rgba(255, 61, 110, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  coral: {
    name: 'coral',
    primary: '#FF5A5F',
    primaryDim: 'rgba(255, 90, 95, 0.25)',
    primaryFaint: 'rgba(255, 90, 95, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  blue: {
    name: 'blue',
    primary: '#5AA9FF',
    primaryDim: 'rgba(90, 169, 255, 0.25)',
    primaryFaint: 'rgba(90, 169, 255, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  peach: {
    name: 'peach',
    primary: '#FFB199',
    primaryDim: 'rgba(255, 177, 153, 0.25)',
    primaryFaint: 'rgba(255, 177, 153, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  aqua: {
    name: 'aqua',
    primary: '#4FE0D1',
    primaryDim: 'rgba(79, 224, 209, 0.25)',
    primaryFaint: 'rgba(79, 224, 209, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  purple: {
    name: 'purple',
    primary: '#C86BFF',
    primaryDim: 'rgba(200, 107, 255, 0.25)',
    primaryFaint: 'rgba(200, 107, 255, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
  amber: {
    name: 'amber',
    primary: '#FFA94D',
    primaryDim: 'rgba(255, 169, 77, 0.25)',
    primaryFaint: 'rgba(255, 169, 77, 0.05)',
    background: '#020617',
    card: '#0f172a',
    border: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
  },
} as const

export function getRandomTheme(): ColorTheme {
  const themeNames = Object.keys(colorThemes) as ColorTheme[]
  return themeNames[Math.floor(Math.random() * themeNames.length)]
}

export function getTheme(themeName: ColorTheme): ColorThemeConfig {
  return colorThemes[themeName]
}