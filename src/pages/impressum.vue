<script>
import axios from "axios";
import { IMPRESSUM_URL } from "@/config";

export default {
  data() {
    return {
      blocks: null,
    };
  },
  async mounted() {
    axios.get(IMPRESSUM_URL).then(async (response) => {
      this.blocks = response.data.data.attributes.items;
    });
  },
  watch: {},
  methods: {},
};
</script>

<template>
  <div class="contact-container">
    <div
      v-for="(block, index) in blocks"
      :key="block.id"
      :class="['block', { first: index === 0 }]"
    >
      <h2 class="title">
        <span class="postit">
          {{ block.title }}
        </span>
      </h2>
      <div class="contact-body">
        <h2 v-for="item in block.details" :key="item.id">
          <span class="postit">
            {{ item.textline }}
          </span>
          <a
            v-if="item.external_link"
            :href="item.external_link"
            target="_blank"
            class="yellow-color link-button"
          >
            ↗
          </a>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  width: 100%;
}

.block {
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-top: 41px;
}

.block.first {
  margin-top: 140px;
}

.contact-body h2 {
  display: block;
}
</style>
