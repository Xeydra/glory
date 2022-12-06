<script>
import axios from 'axios';
import { HOMEPAGE_URL } from '@/config';
// import FitText from '@/composables/fitText.vue';

export default {
  // components: { FitText },
  data() {
    return {
      title: null,
      collections: null,
      topZIndex: 0,
    };
  },
  async mounted() {
    axios.get(HOMEPAGE_URL).then(async (response) => {
      const attr = response.data.data.attributes;
      this.title = attr.title;
      this.collections = attr.collection;

      this.drag();
      await this.$nextTick();

      this.$refs.containers.forEach((container) => {
        this.$refs[container.id].forEach((img) => {
          this.randomizePlacement(container, img);
          this.handleImgHover(img);
          img.ondragstart = function() { return false; };
        })
      });
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
    randomizePlacement(parent, img) {
      img.style.top = Math.random() * (parent.clientHeight - img.clientHeight) + 'px';
      img.style.left = Math.random() * (parent.clientWidth - img.clientWidth) + 'px';
    },
    handleImgHover(img) {
      img.addEventListener('mouseenter', () => {
        this.topZIndex += 1;
        img.style.zIndex = this.topZIndex;
      })
    },
  },
};
</script>

<template>
  <div class="header absolute">
    <div class="page-header">
      {{ title }}
    </div>
  </div>
  <div class="homepage-container drag-surface">
    <div class="canvas draggable">
      <div
        v-for="coll in collections"
        :id="('container-' + coll.id)"
        :key="coll.id"
        ref="containers"
        class="coll"
      >
        <div
          v-for="img in coll.image"
          :key="img.id"
          :ref="('container-' + coll.id)"
          class="postit"
        >
          <img
            :src="('http://localhost:1337' + img.image.data.attributes.url)"
            :class="'img-' + img.format_size"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.header {
  width: 100%;
  z-index: 9000;
}
.postit {
  position: absolute;
}

.img-small {
  max-width: 100px;
}

.img-medium {
  max-width: 250px;
}

.img-large {
  max-width: 500px;
}

.coll {
  position: relative;
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
}
</style>
