import { useContext } from "react";
import { ThemeContext, ThemeContextProvider } from "../ThemeContext/ThemeContext";


const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>Set {theme === "light" ? "light" : "dark"} mode</button>
    )
}

export default ThemeButton