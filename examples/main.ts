/*
 * @Author: Gavin Chan
 * @Date: 2021-12-01 17:41:30
 * @LastEditors: Gavin
 * @LastEditTime: 2022-01-17 09:55:01
 * @FilePath: \wings\examples\main.ts
 * @Descriptions: todo
 */
import { createApp } from 'vue';
import App from './App.vue';
import {
  AWButton,
  AWInput,
  // AWTable,
  AWSelect,
  AWSelectTree,
  AWCascader,
  AWCheckbox,
  AWRadio,
  AWDatePicker,
  AWRangePicker
} from '../packages';
// import * as aw from '../packages';
import * as antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '../packages/index.less';

const app = createApp(App);

app.use(AWButton);
// app.use(AWTable);
app.use(AWInput);
app.use(AWSelect);
app.use(AWSelectTree);
app.use(AWCascader);
app.use(AWCheckbox);
app.use(AWRadio);
app.use(AWDatePicker);
app.use(AWRangePicker);
app.use(antdv);

app.mount('#app');
