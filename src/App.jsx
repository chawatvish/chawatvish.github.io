import useTheme from './context/useTheme';
import Home from './Home';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark' : ''
    }`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Home />
      </div>
    </div>
  )
}

export default App
