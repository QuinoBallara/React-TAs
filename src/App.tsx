import './App.css'
import { ThemeContextProvider } from './ThemeContext/ThemeContext'
import ThemeButton from './ThemeButton/ThemeButton'
import ThemeDependentComponent from './ThemeDependentComponent/ThemeDependentComponent'

function App() {

  return (
    <>
      <ThemeContextProvider>
        <ThemeButton />
        <ThemeDependentComponent />
      </ThemeContextProvider>
    </>
  )
}

export default App
