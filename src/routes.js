import Index from '@/pages/index.vue';
import Collection from '@/pages/collection.vue';
import About from '@/pages/about.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  {
    path: '/home',
    component: Index,
    name: 'home',
  },
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/collections/:id',
  //   component: Collection,
  // },
  // {
  //   path: '/about',
  //   component: About,
  //   name: 'about',
  // },
  // { path: '/:path(.*)', component: NotFound },
];

export default routes;
