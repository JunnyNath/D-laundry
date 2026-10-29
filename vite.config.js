import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss({
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx",
    ],
    theme: {
      extend: {
        fontFamily: {
          maven: ['"Maven Pro"', 'sans-serif'],
          madimi: ['"Madimi One"', 'sans-serif'],
          gabarito: ['"Gabarito"', 'sans-serif'],
        },
      },
    },
    plugins: []
  })
],
})
