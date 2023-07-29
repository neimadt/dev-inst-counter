import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PORT = process.env.PORT || 5174;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT
  },
  preview: {
    port: PORT
  },
  plugins: [react()],
})
