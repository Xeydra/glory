<script>
import { COLLECTION_1 } from '@/TEMP_DATA/temp_data.js';
import WidgetGroup from '@/components/widgetGroup.vue';

export default {
  components: {
    WidgetGroup,
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
</template>

<style scoped>

</style>
