/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 20:54:06
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-01 22:41:45
 * @FilePath: \vue-component-template\rollup.config.js
 * @Descriptions: todo
 */
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { name } from './package.json';

export default {
  input: './packages/index.tsx',
  output: {
    name,
    dir: 'lib',
    format: 'es',
    globals: {
      vue: 'Vue',
      'ant-design-vue': 'antdv'
    }
  },
  external: ['vue', 'ant-design-vue'],
  plugins: [typescript(), babel({ babelHelpers: 'bundled', extensions: ['.ts', '.js', '.tsx'] })]
};
