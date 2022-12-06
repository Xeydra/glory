import Index from '@/pages/index.vue';
import Collection from '@/pages/collection.vue';

export var BASE_URL = 'http://localhost:1337/';

export var API_URL = BASE_URL + 'api/';

export var COLLECTION_URL = API_URL + 'collections/';
export var NAVIGATION_URL = API_URL + 'navigation/render/1?type=TREE';
export var HOMEPAGE_URL = API_URL + 'homepage?populate[collection][populate][image][populate]=*';

export function getOneCollectionURL(id) {
  return COLLECTION_URL + id + '?populate[widgets][populate][media_img_slider][populate]=*' +
    '&populate[widgets][populate][media_video]=*' +
    '&populate[widgets][populate][short_text]=*' +
    '&populate[widgets][populate][detail_list]=*' +
    '&populate[widgets][populate][extended_text]=*';
}

export var COMP_TYPES = [
  { key: 'homepage', component: Index },
  { key: 'collection', component: Collection }
]
