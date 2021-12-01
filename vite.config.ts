/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 17:35:24
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 17:53:42
 * @FilePath: \wings\vite.config.ts
 * @Descriptions: todo
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
