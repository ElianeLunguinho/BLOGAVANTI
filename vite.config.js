
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BLOGAVANTI',
  server: {
    port: 5185,
    host: true,
    allowedHosts: true,
    open: '/BLOGAVANTI/',
    hmr: {
      clientPort: 443,
    },
  }
})
