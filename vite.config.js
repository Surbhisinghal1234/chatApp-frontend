import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server:{
  //   proxy:{
  //     "/api":{
  //       // target:"http://localhost:3000",   
  //       // target:"https://chatapp-backend-rwxo.onrender.com", 
  //       target: "https://chatapp-backend-rwxo.onrender.com",

  //       secure:false,
  //       changeOrigin: true,
  //     }
  //   }
  // }
})
