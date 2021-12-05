/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-05 22:41:19
 * @FilePath: \antdv-wings\vite.config.ts
 * @Descriptions: todo
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
