import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }
  return {
    plugins: [react()],
    base: process.env.VITE_CDS_PATH,
    resolve: {
      alias: [
        {
          find: '@app',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }
  }
})
