/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "xs":"460px"
      },
      boxShadow: {
        'elevated': '0px 20px 40px rgba(0, 0, 0, 0.8), 0px 10px 20px rgba(0, 0, 0, 0.5)',
        "shadowForLeftBox": '0px 4px 8px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.3), 0px 12px 24px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'chatLeft':  'linear-gradient(135deg,#ff9157,#ff4156)',
        "chatRight": "linear-gradient(135deg, #ee2e6a,#8e26c2)",
        "boxLeft":   "linear-gradient(135deg, #e52d71, #8e25bf)" 
        // [#f6d4f579] 
        // [#e9e1e532] 
      },
    },
  },
  plugins: [
    require('daisyui')
    
  ],
}

