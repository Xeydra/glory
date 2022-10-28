<script>
import { title } from '@/TEMP_DATA/temp_data.js';
import FitText from '@/composables/fitText.vue';

export default {
  components: { FitText },
  data() {
    return {
      title,
    };
  },
};
</script>

<template>
  <FitText class="page-header">
    {{ title }}
  </FitText>
</template>

<style>
</style>
