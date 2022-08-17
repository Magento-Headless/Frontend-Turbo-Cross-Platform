import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

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
      process.env.REACT_APP_BUNDLE_VISUALIZE === '1' && visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, './components'),
        '@config': path.resolve(__dirname, './config'),
        '@graphql': path.resolve(__dirname, './graphql'),
        '@hooks': path.resolve(__dirname, './hooks')
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
      cors: true,
      hmr: true
    }
  })
}
