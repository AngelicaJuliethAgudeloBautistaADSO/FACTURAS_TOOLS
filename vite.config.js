import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

dotenv.config()
// https://vite.dev/config/
export default defineConfig({
  // Usamos la variable de entorno, o en su defecto '/' si no existe
  base: process.env.VITE_APP_BASE_URL || '/',
  plugins: [vue()],
})