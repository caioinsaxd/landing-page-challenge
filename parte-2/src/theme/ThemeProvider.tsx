import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { colorThemes, getRandomTheme, type ColorTheme, type ColorThemeConfig } from './colors'

interface ThemeContextType {
  theme: ColorThemeConfig
  themeName: ColorTheme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getInitialTheme(): ColorTheme {
  if (typeof window === 'undefined') return 'green'
  const stored = localStorage.getItem('theme') as ColorTheme | null
  if (stored && stored in colorThemes) return stored
  return getRandomTheme()
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ColorTheme>('green')
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    const randomTheme = getInitialTheme()
    setThemeName(randomTheme)
    setHasHydrated(true)
  }, [])

  const theme = colorThemes[themeName]

  if (!hasHydrated) {
    return (
      <ThemeContext.Provider value={{ theme: colorThemes.green, themeName: 'green' }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { colorThemes, getRandomTheme, type ColorTheme, type ColorThemeConfig }