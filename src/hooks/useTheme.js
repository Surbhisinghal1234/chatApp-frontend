import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "dark";
    console.log("initialTheme", initialTheme); 
    setTheme(initialTheme);
    document.body.className = initialTheme === "light" ? "light-theme" : "dark-theme";
    console.log("className", document.body.className); 
  }, []);

  //save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-theme" : "dark-theme";
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};


