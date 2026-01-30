import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so assets resolve from /Portfolios/ on GitHub Pages
  base: process.env.BASE_PATH === 'relative' ? './' : '/',
})
