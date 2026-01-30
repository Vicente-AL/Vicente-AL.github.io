import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // BASE_PATH set in GitHub Actions workflow for Pages; local dev uses /
  base: process.env.BASE_PATH || '/',
})
