import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import graphql from '@rollup/plugin-graphql'

export default defineConfig({
  envPrefix: 'REACT_',
  plugins: [
    react({
      babel: {
        babelrc: true
      },
      jsxRuntime: 'classic'
    }),
    graphql()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {}
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild',
    chunkSizeWarningLimit: 150
  },
  server: {
    host: 'localhost',
    port: 3000,
    https: false,
    open: true,
    proxy: {
      '/graphql': {
        target: process.env.REACT_APP_GRAPHQL_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, 'graphql')
      }
    },
    cors: true,
    hmr: true
  }
})
