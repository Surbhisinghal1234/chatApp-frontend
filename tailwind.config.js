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
        'elevated': '0px 15px 30px rgba(0, 0, 0, 0.7)', // Custom elevated shadow
        
      },
      backgroundImage: {
        'chatLeft':  'linear-gradient(135deg,#ff9157,#ff4156)',
        "chatRight": "linear-gradient(135deg, #ee2e6a,#8e26c2)",
        "boxLeft":   "linear-gradient(135deg, #e52d71, #8e25bf)" // Custom linear gradient
      },
    },
  },
  plugins: [
    require('daisyui')
    
  ],
}

