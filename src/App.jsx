import React from 'react'
import useTheme from './context/useTheme'
import Home from './Home'
import { Sun, Moon } from 'lucide-react'

function App() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: darkMode ? '#18181b' : '#fafafa',
        color: darkMode ? '#fafafa' : '#18181b',
        transition: 'background 0.3s, color 0.3s'
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20
        }}
      >
        <nav>
          <a
            href="https://cwstory.com"
            rel="noopener noreferrer"
            style={{
              color: darkMode ? '#fafafa' : '#18181b',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 18,
              marginRight: 24
            }}
          >
            CWStory
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href="https://chawatvish.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: darkMode ? '#fafafa' : '#18181b',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 18,
              marginRight: 25
            }}
          >
            Blog
          </a>
          <button
            onClick={toggleDarkMode}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0
            }}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkMode ? <Moon size={32} /> : <Sun size={32} />}
          </button>
        </div>
      </header>
      <Home />
    </div>
  )
}

export default App
