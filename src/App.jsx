import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  const toggleDarkMode = () => setTheme(theme === "light" ? "dark" : "light")

  useEffect(() => {
    localStorage.setItem("theme", theme)
    // console.log(theme)
  }, [theme])

  return (
    <div className={theme}>
      <h1>This site is currently in {theme === "light" ? <span>LIGHT</span> : <span>DARK</span>} Mode</h1>
      <button onClick={toggleDarkMode}>Change to {theme === "light" ? <span>Dark</span> : <span>Light</span>} Mode</button>
    </div>
  )
}

export default App
