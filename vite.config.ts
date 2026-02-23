import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        koogagent: resolve(__dirname, 'koogagent/index.html'),
        cycling: resolve(__dirname, 'cycling-copilot/index.html'),
      },
    },
  },
})
