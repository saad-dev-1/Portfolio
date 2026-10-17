import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Yeh hona chahiye

export default defineConfig({
  plugins: [react(), tailwindcss()], // <-- Yahan add hona chahiye
})