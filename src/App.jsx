import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { OverviewContainer, OverviewTodayContainer } from "./components/OverviewContainer"

function App() {
  const [ darkMode, setDarkMode ] = useState(false) 

  function handleClick() {
    setDarkMode(!darkMode)
    document.querySelector('body').classList.toggle('bg-Very-Dark-Blue')
  }

  return (
    <div>
      <Header darkMode={darkMode} cambio={handleClick} />
      <OverviewContainer darkMode={darkMode} />
      <OverviewTodayContainer darkMode={darkMode} />
    </div>
  )
}

export default App

