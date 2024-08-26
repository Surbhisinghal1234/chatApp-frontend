// import { useState, useEffect } from "react";

// // Custom Hook to handle theme
// export const useTheme = () => {
//   const [theme, setTheme] = useState("light");

//   // Set initial theme based on localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const initialTheme = savedTheme || "light";
//     setTheme(initialTheme);
//     document.body.className = initialTheme === "light" ? "light-theme" : "dark-theme";
//   }, []);

//   // Toggle theme and save to localStorage
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.body.className = newTheme === "light" ? "light-theme" : "dark-theme";
//     localStorage.setItem("theme", newTheme);
//   };

//   return { theme, toggleTheme };
// };

import { useState, useEffect } from "react";

// Custom Hook to handle theme
export const useTheme = () => {
  const [theme, setTheme] = useState("dark"); // Default theme is dark

  // Set initial theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "dark";
    console.log("Initial theme:", initialTheme); // Debugging line
    setTheme(initialTheme);
    document.body.className = initialTheme === "light" ? "light-theme" : "dark-theme";
    console.log("Applied className:", document.body.className); // Debugging line
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


