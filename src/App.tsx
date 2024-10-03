import './App.css'
import { ThemeContextProvider } from './ThemeContext/ThemeContext'
import ThemeButton from './ThemeButton/ThemeButton'
import ThemeDependentComponent from './ThemeDependentComponent/ThemeDependentComponent'
import { LanguageContextProvider } from './LanguageContext/LanguageContext'
import { Language } from './Language/Language'
import { LanguageChanger } from './LanguageChanger/LanguageChanger'

function App() {

  return (
    <>
      <LanguageContextProvider>
        <LanguageChanger />
        <Language />
      </LanguageContextProvider>
      <ThemeContextProvider>
        <ThemeButton />
        <ThemeDependentComponent />
      </ThemeContextProvider>
    </>
  )
}

export default App
