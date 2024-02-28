import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Countdown from 'vue3-flip-countdown';

import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.use(Countdown);
app.mount('#app');
