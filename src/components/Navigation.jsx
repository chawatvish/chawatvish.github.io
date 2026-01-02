import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/useTheme'
import { trackNavigation, trackButtonClick } from '../utils/analytics'

const Navigation = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    trackNavigation(sectionId)

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'philosophy', label: 'Philosophy', href: '#philosophy' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/30 shadow-sm dark:shadow-gray-900/20"
      style={{
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors duration-200"
              style={{
                color: theme === 'dark' ? '#ffffff' : '#111827'
              }}
            >
              Chawatvish
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-emerald-600 dark:hover:text-emerald-300 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#374151'
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - External link and theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => {
                trackButtonClick(
                  'theme_toggle',
                  theme === 'dark' ? 'switch_to_light' : 'switch_to_dark'
                )
                toggleTheme()
              }}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-emerald-600 dark:hover:text-emerald-400 border border-gray-200 dark:border-gray-600 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-emerald-600 dark:hover:text-emerald-400 border border-gray-200 dark:border-gray-600 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-3 pt-3 pb-4 space-y-2 border-t border-gray-200/50 dark:border-gray-700/30 backdrop-blur-xl"
              style={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff'
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
                  style={{
                    color: theme === 'dark' ? '#ffffff' : '#374151'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
