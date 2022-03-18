/*
 * @Author: 无聊的鬼_
 * @Date: 2022-03-13 09:02:50
 * @LastEditTime: 2022-03-18 17:01:12
 * @Description:
 */
import { defineConfig } from "vite"
import legacyPlugin from "@vitejs/plugin-legacy"
import viteCompression from "vite-plugin-compression"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import { VitePWA } from "vite-plugin-pwa"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/iamge")],
      symbolId: "icon-[dir]-[name]"
    }),
    legacyPlugin({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // 面向IE11时需要此插件
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    }),
    VitePWA({
      manifest: {},
      workbox: {
        skipWaiting: true,
        clientsClaim: true
      }
    })
  ],
  server: {
    open: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]"
      }
    }
  }
})
