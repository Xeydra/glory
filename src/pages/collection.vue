<script>
// import { COLLECTION_1 } from '@/TEMP_DATA/temp_data.js';
import WidgetGroup from "@/components/widgetGroup.vue";
// import FitText from '@/composables/fitText.vue';
import { getOneCollectionURL } from "@/config";
import axios from "axios";

export default {
  components: {
    WidgetGroup,
    // FitText,
  },
  data() {
    return {
      title: null,
      widgets: null,
    };
  },
  methods: {},
  mounted() {
    axios.get(getOneCollectionURL(this.$route.meta.id)).then((response) => {
      this.title = response.data.data.attributes.title;
      this.widgets = response.data.data.attributes.widgets;
    });
  },
};
</script>

<template>
  <div class="collection-container">
    <div class="page-header postit">
      {{ title }}
    </div>
    <template v-for="widget in widgets" :key="widget?.id">
      <WidgetGroup :widget="widget" />
    </template>
  </div>
</template>

<style scoped>
.collection-container {
  overflow: hidden;
}
</style>
