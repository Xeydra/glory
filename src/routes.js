import Index from '@/pages/index.vue';
import Collection from '@/pages/collection.vue';
import About from '@/pages/about.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  {
    path: '/',
    component: Index,
    name: 'home',
  },
  {
    path: '/collection',
    component: Collection,
    name: 'collection',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
