<script>
import { COLLECTION_1 } from '@/TEMP_DATA/temp_data.js';
import WidgetGroup from '@/components/widgetGroup.vue';
import FitText from '@/composables/fitText.vue';

export default {
  components: {
    WidgetGroup,
    FitText,
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
  <FitText class="page-header">
    {{ selected.title }}
  </FitText>
  <template
    v-for="widget in selected.widgets"
    :key="widget.title"
  >
    <WidgetGroup :widget="widget" />
  </template>
</template>

<style scoped>

</style>
