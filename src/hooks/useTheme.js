import { useState, useEffect } from "react";

// Custom Hook to handle theme
export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  // Set initial theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.body.className = initialTheme === "light" ? "light-theme" : "dark-theme";
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-theme" : "dark-theme";
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};
