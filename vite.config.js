import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import dotenv from "dotenv"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Aliraza_Portfolio.github.io/",
  define: {
    'process.env.VITE_EMAILJS_API': JSON.stringify(process.env.VITE_EMAILJS_API),
    'process.env.VITE_EMAILJS_SERVICE': JSON.stringify(process.env.VITE_EMAILJS_SERVICE),
    'process.env.VITE_EMAILJS_TEMPLATE': JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
