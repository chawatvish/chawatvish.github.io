import { useState, useEffect } from 'react'
import ThemeContext from './theme-context.js'

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode')
    return stored ? JSON.parse(stored) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    // Remove body class manipulation, let Tailwind handle it
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)
  const toggleTheme = toggleDarkMode // Alias for new API
  const theme = darkMode ? 'dark' : 'light' // Convert to theme string

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      toggleDarkMode, 
      theme, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
