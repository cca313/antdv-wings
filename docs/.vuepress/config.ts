/*
 * @Author: Gavin Chan
 * @Date: 2021-12-02 10:10:03
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-02 10:29:21
 * @FilePath: \wings\docs\.vuepress\config.ts
 * @Descriptions: todo
 */
const { readdirSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');
import vueJsx from '@vitejs/plugin-vue-jsx';
const headPkgList = []; // 非 @sum-ui/开头的组件

const pkgList = readdirSync(join(__dirname, '../../packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg)
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@sum-ui/${pkg}`] = join(__dirname, '../../packages', pkg, 'src/Index.vue');
  return {
    ...pre
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

module.exports = {
  title: 'antdv-wings', // 顶部左侧标题
  description: 'Vue3 + ElementPlus 组件库',
  base: '/antdv-wings/',
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      plugins: [vueJsx()]
    }
  },
  alias,
  head: [
    // 设置 描述 和 关键词
    ['meta', { name: 'keywords', content: 'Vue3 UI 组件库' }]
  ],
  themeConfig: {
    sidebar: {
      // 侧边栏
      '/': [
        {
          text: '介绍',
          children: [
            { text: '安装', link: '/guide/install' },
            { text: '快速上手', link: '/guide/start' }
          ]
        },
        {
          text: '组件',
          children: [
            { text: 'Layout 布局', link: '/components/layout' },
            { text: 'Table 表格', link: '/components/table' }
          ]
        }
      ]
    },
    nav: [
      // 顶部右侧导航栏
      { text: '介绍', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '组件',
        link: '/components/layout.html',
        activeMatch: '^/$|^/components/'
      }
    ],
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  }
  // plugins: ['demoblock-plus'] // vuepress-plugin-demoblock-plus 插件，作用是展示交互文档和代码展开
};
