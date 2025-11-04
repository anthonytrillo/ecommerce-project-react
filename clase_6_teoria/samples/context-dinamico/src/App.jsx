import { ThemeProvider, useTheme } from "./context/ThemeContext"
import "./index.css";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "modo oscuro" : "modo claro"}
    </button>
  )
}

function App() {

  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  )
}

export default App
