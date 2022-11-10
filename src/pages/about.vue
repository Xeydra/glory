<script>
import { ABOUT_MENU } from '@/TEMP_DATA/temp_data.js';

export default {
  data() {
    return {
      aboutMenu: ABOUT_MENU[0],
    };
  },
  methods: {
  },
};
</script>

<template>
  <div class="about-container">
    <template
      v-for="item in aboutMenu.items"
      :key="item.time_start"
    >
      <div class="content">
        <div class="time h1">
          {{ item.time_start }} <span v-if="item.time_end"> - {{ item.time_end }}</span>
        </div>
        <div class="item-content h1">
          {{ item.text }}
          <div
            v-if="item.extra"
            class="extra caption"
          >
            {{ item.extra }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.about-container {
    margin-top: 140px;
}
.content {
    display: flex;
    margin-top: 41px;
}

.time {
    flex: 3;
}

.item-content {
    flex: 3;
}

.extra {
    margin-top: 6px;
}
</style>
