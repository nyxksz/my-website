import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Expose to external networks
    port: process.env.PORT || 5173, // Use Render's assigned port or default to 5173
  },
});

