import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/index.css';
import App from '@/app.vue';
import { NAVIGATION_URL, COMP_TYPES } from '@/config';
import axios from 'axios';
import { addToStore } from '@/assets/store';
import Impressum from '@/pages/impressum.vue';
import PrivacyPolicy from '@/pages/privacyPolicy.vue';

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/impressum',
    component: Impressum,
    name: 'impressum',
  },
  {
    path: '/policy',
    component: PrivacyPolicy,
    name: 'policy',
  }
];
const app = createApp(App);

getDynamicRoutes(NAVIGATION_URL);

function getDynamicRoutes(url) {
  axios
    .get(url)
    .then((response) => {
      processData(response.data);
      const router = createRouter({
        history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
        routes,
      });
      app.use(router);
      app.mount('#app');
    })
    .catch(err => console.log(err))
};

function processData(data) {
  data.forEach((item) => createAndAppendRoute(item));
  addToStore('routes', data);
}

function createAndAppendRoute(apiRoute) {
  let newRoute;
  if (apiRoute.type === 'WRAPPER') {
    apiRoute.items.forEach((child) => createAndAppendRoute(child, newRoute));
  } else {
    newRoute = {
      path: apiRoute.path,
      component: processComponent(apiRoute.related.__contentType),
      name: apiRoute.slug,
      meta: {
        title: apiRoute.title,
        id: apiRoute.related.id
      }
    }
    routes.push(newRoute);
  }
}

function processComponent(contentType) {
  return COMP_TYPES.find((type) => {
    return contentType.includes(type.key);
  }).component;
}
