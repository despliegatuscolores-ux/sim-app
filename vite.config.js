import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Vital para que funcione en GitHub Pages sin rutas absolutas rotas
});