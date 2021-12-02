/*
 * @Author: Gavin Chan
 * @Date: 2021-12-02 10:19:58
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-02 10:33:44
 * @FilePath: \wings\docs\.vuepress\clientAppEnhance.ts
 * @Descriptions: todo
 */
import { defineClientAppEnhance } from '@vuepress/client';
// import 'element-plus/theme-chalk/src/index.scss' // 全量引入样式文件 scss TODO: 这里如果用element-plus 文档里的方法 vite-plugin-element-plus 插件按需引入的话，dev 正常但是 vuepress build 打包 scss @import 就会报错
// import SumTable from '@sum-ui/table'
// import SumLayout from '@sum-ui/layout'

export default defineClientAppEnhance(({ app }) => {
  // app.component('SumTable', SumTable)
  // app.component('SumLayout', SumLayout)
});
