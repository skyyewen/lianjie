import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    // 路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  sourcemap: true,
  build: {
    rollupOptions: {
      external: ['@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'],
      // 若有其他类似需要外部化的模块，可以一并添加
    },
    // minify: "terser",
    // terserOptions:{
    //   compress:{
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // },
    sourcemap: true,
  },
})
