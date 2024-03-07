import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/KoinX/",
  plugins: [react()],
  optimizeDeps: {
    include: ['react-google-charts'],
  },
})
