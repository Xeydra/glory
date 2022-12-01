<script>
import axios from 'axios';
// import FitText from '@/composables/fitText.vue';

export default {
  // components: { FitText },
  data() {
    return {
      title: null,
      collections: null,
    };
  },
  mounted() {
    // http://localhost:1337/api/collections/1?populate[text_block][populate]=*&populate[video]=*&populate[image_slider][populate]=*
    axios.get('http://localhost:1337/api/homepage?populate[collection][populate][image][populate]=*').then((response) => {
      const attr = response.data.data.attributes;
      console.log(response.data.data.attributes);
      this.title = attr.title;
      this.collections = attr.collection;

      console.log(this.collections);
      // this.images = attr.images_auto_size.data;
      this.drag();
    });
  },
  methods: {
    drag() {
      const element = document.querySelector('.drag-surface');
      element.scrollLeft = element.scrollWidth / 3;
      element.scrollTop = element.scrollHeight / 3;

      let positions = {
        top: element.scrollTop, left: element.scrollLeft, x: 0, y: 0,
      };

      const mouseMoveHandler = function (e) {
        const dx = e.clientX - positions.x;
        const dy = e.clientY - positions.y;

        element.scrollLeft = positions.left - dx;
        element.scrollTop = positions.top - dy;
      };

      const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        element.style.cursor = 'grab';
        element.style.removeProperty('user-select');
      };

      const mouseDownHandler = function (e) {
        element.style.cursor = 'grabbing';
        element.style.userSelect = 'none';

        positions = {
          top: element.scrollTop,
          left: element.scrollLeft,
          x: e.clientX,
          y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      };

      document.addEventListener('mousedown', mouseDownHandler);
    },
  },
};
</script>

<template>
  <div class="homepage-container drag-surface">
    <div class="canvas draggable">
      <div
        v-for="coll in collections"
        :key="coll.id"
        class="coll"
      >
        <img
          v-for="img in coll.image"
          :key="img.id"
          :src="('http://localhost:1337' + img.image.data.attributes.url)"
          :class="'img-' + img.format_size"
        >
      </div>
      <!-- <div class="a1 grid-c"></div>
      <div class="a2 grid-c"></div>
      <div class="a3 grid-c"></div>
      <div class="a4 grid-c"></div>
      <div class="a5 grid-c"></div>
      <div class="a6 grid-c"></div>
      <div class="a7 grid-c"></div>
      <div class="a8 grid-c"></div>
      <div class="a9 grid-c"></div> -->
      <!-- middle
      <img
        v-for="img in images"
        :key="img.id"
        :src="('http://localhost:1337' + img.attributes.url)"
      > -->
    </div>
  </div>
  <!-- <FitText class="page-header">
    {{ title }}
  </FitText> -->
</template>

<style>
.img-small {
  max-width: 50px;
}

.img-medium {
  max-width: 100px;
}

.img-large {
  max-width: 200px;
}
.a1 {
  background-color: blue;
}
.a2 {
  background-color: yellow;
}
.a3 {
  background-color: green;
}
.a4 {
  background-color: rebeccapurple;
}
.a5 {
  background-color: orchid;
}
.a6 {
  background-color: lightcoral;
}
.a7 {
  background-color: mediumseagreen;
}
.a8 {
  background-color: peru;
}
.a9 {
  background-color: red;
}

.coll {
  border: peru;
}

.homepage-container {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  cursor: grab;
  max-height: calc(100vh - (2 * var(--default-gap-mobile)));
}

@media (min-width: 750px) {
  .homepage-container {
    max-height: calc(100vh - (2 * var(--default-gap-desktop)));
  }
}

.canvas {
  height: 300vh;
  width: 300vw;
  float: left;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  border: solid red 1px;
}
</style>
