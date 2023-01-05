<script>
import axios from "axios";
import { CONTACT_URL } from "@/config";
import { randomizePlacement } from "@/utils/functions";

export default {
  data() {
    return {
      blocks: null,
      imgs: null,
    };
  },
  async mounted() {
    axios.get(CONTACT_URL).then(async (response) => {
      console.log(response.data.data.attributes);
      this.blocks = response.data.data.attributes.blocks;
      this.imgs = response.data.data.attributes.imgs.data;
      console.log(this.imgs);

      await this.$nextTick();

      const max = this.$refs.img.reduce(
        (a, b) => Math.max(a.clientHeight || a, b.clientHeight),
        0
      );
      this.$refs.imgCanvas.style.height = 2.5 * max + "px";

      this.$refs.img.forEach((img) => {
        randomizePlacement(this.$refs.imgCanvas, img);
      });
    });
  },
  watch: {},
  methods: {
    imgClick(img) {
      // console.log(img);
      img.target.style.opacity = 1;
    },
  },
};
</script>

<template>
  <div class="contact-container">
    <div
      v-for="(block, index) in blocks"
      :key="block.id"
      :class="['block', { first: index === 0 }]"
    >
      <h2 class="title">{{ block.title }}</h2>
      <div class="contact-body">
        <h2 v-for="item in block.details" :key="item.id">
          {{ item.textline }}
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
    <div class="img-canvas" ref="imgCanvas">
      <div
        v-for="img in imgs"
        :key="img.id"
        ref="img"
        class="postit img-container"
        @click="imgClick($event)"
      >
        <img :src="'http://localhost:1337' + img.attributes.url" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-canvas {
  position: relative;
}
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

.img-container {
  position: absolute;
  background-color: var(--yellow);
}

img {
  opacity: 0;
  max-width: 169px;
  display: block;
}
</style>
