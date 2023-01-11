import Index from '@/pages/index.vue';
import Collection from '@/pages/collection.vue';
import About from '@/pages/about.vue';
import Contact from '@/pages/contact.vue';
import Impressum from '@/pages/impressum.vue';

export var BASE_URL = 'http://localhost:1337';

export var API_URL = BASE_URL + '/api/';

export var COLLECTION_URL = API_URL + 'collections/';
export var NAVIGATION_URL = API_URL + 'navigation/render/1?type=TREE';
export var HOMEPAGE_URL = API_URL + 'homepage?populate[collection][populate][image][populate]=*';
export var FOOTER_URL = API_URL + 'footer/';
export var ABOUT_URL = API_URL + 'about-pages/';
export var CONTACT_URL = API_URL + 'contact/?populate[blocks][populate][details]=*&populate[imgs]=*';
export var IMPRESSUM_URL = API_URL + 'impressum/?populate[items][populate][details]=*&populate[imgs]=*';

export function getOneCollectionURL(id) {
  return COLLECTION_URL + id + '?populate[widgets][populate][media_img_slider][populate]=*' +
    '&populate[widgets][populate][media_video]=*' +
    '&populate[widgets][populate][short_text]=*' +
    '&populate[widgets][populate][detail_list]=*' +
    '&populate[widgets][populate][extended_texts]=*';
}

export function getOneAboutURL(id) {
  return ABOUT_URL + id + '?populate=*';
}

export var COMP_TYPES = [
  { key: 'homepage', component: Index },
  { key: 'collection', component: Collection },
  { key: 'about-page', component: About },
  { key: 'contact', component: Contact },
  { key: 'impressum', component: Impressum },
]
