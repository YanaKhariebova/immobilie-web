import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const getDocumentTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getDocumentTheme)

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')

    const followSystemTheme = () => {
      if (window.localStorage.getItem('immobilieweb-theme')) return

      const systemTheme: Theme = colorScheme.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = systemTheme
      setTheme(systemTheme)
    }

    colorScheme.addEventListener('change', followSystemTheme)
    return () => colorScheme.removeEventListener('change', followSystemTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('immobilieweb-theme', nextTheme)
    setTheme(nextTheme)
  }

  const label =
    theme === 'dark' ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/25 text-white transition hover:border-gold-500 hover:text-gold-500"
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  )
}
