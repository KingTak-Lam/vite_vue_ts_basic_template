import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 配置scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
  // 代理
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境打包配置
  // 去除 console debugger
  build: {
    terserOptions: {
      compress: {
        // eslint-disable-next-line camelcase
        drop_console: true,
        // eslint-disable-next-line camelcase
        drop_debugger: true,
      },
    },
  },
})
