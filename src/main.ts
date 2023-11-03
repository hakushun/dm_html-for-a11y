import { createApp } from 'vue';
import './styles/reset.css';
import './styles/global.css';
import App from './App.vue';
import { router } from './config/routes';

const app = createApp(App);
app.use(router);
app.mount('#app');
