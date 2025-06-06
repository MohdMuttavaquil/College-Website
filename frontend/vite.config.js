import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy : {
      "/dmic" : "http://localhost:3000"
    }
  },
  plugins: [react(), tailwindcss(),],
  
})
