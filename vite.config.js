import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envPrefix: 'CS_',
    server: {
        port: 5000,
    },
});
