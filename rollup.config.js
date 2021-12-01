/*
 * @Author: Gavin
 * @Date: 2021-10-08 17:59:22
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 17:34:13
 * @FilePath: \wings\rollup.config.js
 * @Descriptions: todo
 */
import resolve from "rollup-plugin-node-resolve";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import jsx from "acorn-jsx";
import Components from "unplugin-vue-components/rollup";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import pkg from "./package.json";
// import multiEntry from "@rollup/plugin-multi-entry";

export default {
  input: ["packages/index.ts"], // 打包入口
  output: {
    globals: {
      vue: "Vue",
    },
    // 打包出口
    file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: "index.js",
  },
  onwarn: function (warning) {
    if (warning.code === "THIS_IS_UNDEFINED") {
      return;
    }
    console.error(warning.message);
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    json(),
    resolve(),
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    peerDepsExternal(),
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
      dts: true,
      directives: true,
    }),
    typescript({
      typescript: require("typescript"),
      // tsconfig: "./tsconfig.json",
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions: [".ts", ".js", ".tsx"],
    }),

    // multiEntry(),
  ],
  externals: ["vue", "ant-design-vue"],
};
