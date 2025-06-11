import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Adjust this if needed

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  // Ensuring Tailwind works properly
  ],
  optimizeDeps: {
    include: ['recharts'],
  },
})
