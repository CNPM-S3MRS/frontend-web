import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react()],
    autoprefixer: {},
    server: {
      port: 5000, // Change the development server port to 5000
    },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
});
