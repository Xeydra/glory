<script>
export default {
  props: {
    pictures: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="slider-container">
    <div
      v-for="item of pictures"
      :key="item.link"
      class="picture-container"
    >
      <div class="pic img-disabled" />
      <div class="caption">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.pic {
    height: 680px;
    margin-bottom: -7px;
}

.picture-container {
    flex-shrink: 0;
}

.picture-container:nth-child(odd) {
    width: 490px;
}

.picture-container:nth-child(even) {
    width: 770px;
}

.slider-container {
    display: flex;
    gap: 8px;
    z-index: 0;
    overflow: hidden;
}

.caption {
    display: inline;
}

</style>
