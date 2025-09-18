import { useContext } from 'react'
import ThemeContext from './theme-context.js'

const useTheme = () => useContext(ThemeContext)

// Named export for the new import style
export { useTheme }
export default useTheme
