import { useState, useEffect } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleDarkMode = () => {
    if (!isDark) {
      setIsDark(true)
      setTheme("dark")
    } else {
      setIsDark(false)
      setTheme("light")
    }
  }

  return (
    <div className={theme}>
      <h1>This site is currently in {theme === "light" ? <span>LIGHT</span> : <span>DARK</span>} Mode</h1>
      <button onClick={toggleDarkMode}>Change to {theme === "light" ? <span>Dark</span> : <span>Light</span>} Mode</button>
    </div>
  )
}

export default App
