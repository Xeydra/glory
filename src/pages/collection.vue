<script>
import { COLLECTION_1 } from '@/TEMP_DATA/temp_data.js';
import WidgetGroup from '@/components/widgetGroup.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    WidgetGroup,
    Footer,
  },
  data() {
    return {
      selected: COLLECTION_1,
    };
  },
  methods: {
  },
};
</script>

<template>
  <h1 class="page-header">
    {{ selected.title }}
  </h1>
  <template
    v-for="widget in selected.widgets"
    :key="widget.title"
  >
    <WidgetGroup :widget="widget" />
  </template>
  <Footer />
</template>

<style scoped>

</style>
