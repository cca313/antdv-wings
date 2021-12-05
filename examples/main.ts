import { createApp } from 'vue';
import App from './App.vue';
import { AWButton, AWInput, AWTable } from '../packages';
import * as antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(AWButton);
app.use(AWTable);
app.use(AWInput);
app.use(antdv);

app.mount('#app');
