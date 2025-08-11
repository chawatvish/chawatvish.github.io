import { useContext } from 'react'
import ThemeContext from './theme-context.js'

const useTheme = () => useContext(ThemeContext)
export default useTheme
