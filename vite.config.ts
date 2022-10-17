import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
console.log(process.env.PORT);
console.log('333');
export default defineConfig({
  build: {
    outDir: "app/build",
  },
  server: {
    port: 3000
  },
  plugins: [react()]
})
