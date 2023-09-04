import { resolve } from 'path';
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), [`VITE`, `REACT_APP`, `NODE_ENV`]);
  const config = {
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: '.vitest/setup',
      include: ['**/**.test.{ts,tsx}'],
    },
    resolve: {
      alias: [{ find: `@`, replacement: resolve(__dirname, `src`) }],
    },
    define: {
      [`process.env`]: env,
    },
    server: {
      proxy: {
        [`/api`]: env.VITE_PROXY_URL,
      },
    },
  };
  return config;
});
