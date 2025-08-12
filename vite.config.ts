import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mansoor-portfolio/', // <- critical for GitHub Pages project sites
})
