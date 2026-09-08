import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// React-pluginet gir støtte for JSX og rask oppdatering under utvikling.
export default defineConfig({
  plugins: [react()],
});
