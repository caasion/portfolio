import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>();

  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      {darkMode 
        ? <FaSun />
        : <FaMoon />
      }
    </div>
  )
}