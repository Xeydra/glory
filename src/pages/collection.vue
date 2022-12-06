<script>
// import { COLLECTION_1 } from '@/TEMP_DATA/temp_data.js';
import WidgetGroup from '@/components/widgetGroup.vue';
import FitText from '@/composables/fitText.vue';

export default {
  components: {
    WidgetGroup,
    FitText,
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
  },
  mounted() {
    console.log('hallo');
    // axios.get(API_URL + 'navigation/render/1?type=TREE').then((response) => {
    //   this.nav = response.data;
    // });
  }
};
</script>

<template>
  <FitText class="page-header">
    {{ selected?.title }}
  </FitText>
  <template
    v-for="widget in selected?.widgets"
    :key="widget?.title"
  >
    <WidgetGroup :widget="widget" />
  </template>
</template>

<style scoped>

</style>
