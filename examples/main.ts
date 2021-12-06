/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 17:41:30
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-06 15:28:44
 * @FilePath: \wings\examples\main.ts
 * @Descriptions: todo
 */
import { createApp } from 'vue';
import App from './App.vue';
import { AWButton, AWInput, AWTable, AWSelect } from '../packages';
import * as antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(AWButton);
app.use(AWTable);
app.use(AWInput);
app.use(AWSelect);
app.use(antdv);

app.mount('#app');
