import { createApp } from 'vue';
import App from './App.vue';
import { AWButton, AWTable } from '../packages';

const app = createApp(App);
app.use(AWButton);
app.use(AWTable);

app.mount('#app');
