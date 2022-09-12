import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/index.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
