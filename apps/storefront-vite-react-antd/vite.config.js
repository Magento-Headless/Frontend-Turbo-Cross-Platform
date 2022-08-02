import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import graphql from '@rollup/plugin-graphql'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'REACT_')}
  
  return defineConfig({
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
      alias: {
        '@components': path.resolve(__dirname, './components'),
        '@graphql': path.resolve(__dirname, './graphql')
      }
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
        '/api-graphql': {
          target: process.env.REACT_APP_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api-graphql/, 'graphql')
        }
      },
      cors: true,
      hmr: true
    }
  })
}
