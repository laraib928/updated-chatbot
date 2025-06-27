import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
    ,     tailwindcss(),

  ],
  server: {
    allowedHosts: ['035d-203-175-73-8.ngrok-free.app'],
  },
})
