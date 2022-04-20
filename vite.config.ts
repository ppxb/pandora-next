import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Pages({
      extensions: ['vue']
    })
  ]
})
