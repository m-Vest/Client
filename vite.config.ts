import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiBaseUrl = env.VITE_API_BASE_URL;
  const apiTarget = apiBaseUrl ? new URL(apiBaseUrl).origin : undefined;

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
    ],
    server: {
      proxy: apiTarget
        ? {
            '/api': {
              target: apiTarget,
              changeOrigin: true,
              secure: false,
            },
          }
        : undefined,
    },
  };
});
