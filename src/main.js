// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import './style.css';
import axios from './axios'; // Import instance Axios
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

// Tambahkan Axios sebagai properti global
app.config.globalProperties.$axios = axios;

// Gunakan router
app.use(router);

app.mount('#app');


Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'path/to/error.png',
    loading: 'path/to/loading.gif',
    attempt: 1
});