<script>
import { footerData } from '@/TEMP_DATA/temp_data.js';

export default {
  data() {
    return {
      footerData,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<template>
  <footer>
    <div class="imprint">
      <span>{{ footerData.copyright }}</span>
      <a
        v-for="item in footerData.links"
        :key="item.title"
      >
        {{ item.title }}
      </a>
    </div>
    <div
      class="clickable pink-color"
      @click="scrollToTop()"
    >
      Scroll to top ↑
    </div>
  </footer>
</template>

<style>

footer {
    display: flex;
    justify-content: space-between;
}
.imprint {
    flex: 1;
    display: flex;
    gap: 1rem;
    font-size: 15px;
    line-height: 18px;
}

.expandable {
    background-color: var(--pink);
}
</style>
