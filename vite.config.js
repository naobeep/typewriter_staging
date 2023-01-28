import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

global.navigator = undefined;
process.env.BROWSER = 'chrome';

const filenameList = fs.readdirSync(resolve(__dirname, 'src'));
const htmlFileList = filenameList.filter(file => /.html$/.test(file));
const inputFiles = {};
for (const file of htmlFileList) {
  inputFiles[file.slice(0, -5)] = resolve(__dirname, 'src', file);
}

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: inputFiles,
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    cssCodeSplit: true,
    outDir: '../dist',
    target: 'esnext',
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //   },
    // },
  },
  base: './',
  server: {
    open: true,
  },
});
