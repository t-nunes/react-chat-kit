/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
import path from 'node:path';
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
  plugins: [
    react(),
    dts({ entryRoot: 'src', insertTypesEntry: true, outDir: 'dist' }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      fileName: 'main.js',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}')
          .map((file) => [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
