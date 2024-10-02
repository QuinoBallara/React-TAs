import { useContext } from "react"
import { ThemeContext } from "../ThemeContext/ThemeContext"
import './ThemeDependentComponent.css'

const ThemeDependentComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <h1>Hola</h1>
            <p>Buenas</p>
        </div>
    )
}

export default ThemeDependentComponent