import Index from '@/pages/index.vue';
import Collection from '@/pages/collection.vue';

export var BASE_URL = 'http://localhost:1337/';

export var API_URL = BASE_URL + 'api/';

export var COMP_TYPES = [
  { key: 'homepage', component: Index },
  { key: 'collection', component: Collection }
]
