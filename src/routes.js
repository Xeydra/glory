import Index from '@/pages/index.vue';
import Collection from '@/pages/collection.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index },
  {
    path: '/collection',
    component: Collection,
    name: 'collection',
  },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
