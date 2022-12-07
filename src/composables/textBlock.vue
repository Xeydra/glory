<script>
export default {
  data() {
    return {
      expanded: false,
      texts: [this.text_block],
    };
  },
  props: {
    text_block: {
      type: Array,
      required: true,
    },
    expandable_texts: {
      type: Object,
    },
    details: {
      type: Object,
    },
  },
  emits: ["toggle"],
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;

      if (this.expanded) {
        this.texts.push(...this.expandable_texts);
      } else {
        this.texts = [this.text_block];
      }

      console.log(this.texts);
    },
  },
};
</script>

<template>
  <div
    v-for="(block, index) in texts"
    :key="block.id"
    class="text-container"
    :class="['text-container', { first: index === 0 }]"
  >
    <div class="text-header flex-3">
      <h2 class="title">
        {{ block.title }}
      </h2>
    </div>
    <div class="text-body flex-5">
      <h2 class="short-text">
        {{ block.description }}
        <a
          v-if="block.external_link && index === 0"
          :href="block.external_link"
          target="_blank"
          class="yellow-color link"
        >
          Read more ↗
        </a>
        <div
          v-if="expandable_texts.length > 0 && index === 0"
          class="pink-color link clickable"
          @click="toggleExpand"
        >
          Read {{ expanded ? "less ↑" : "more ↓" }}
        </div>
      </h2>
      <template v-if="index === texts.length - 1">
        <div
          v-for="(info, index) in details"
          :key="index"
          class="additional-infos info"
        >
          {{ info.detail }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  margin-top: -16px;
  margin-bottom: -7px;
}

.text-container:not(.first) {
  margin-top: 44px;
}

.text-header {
  padding-bottom: 6px;
}

/* TODO: homepage has lots of high z-indexes, need to go high here as well */
.text-body {
  z-index: 1;
}

.link {
  font-size: 15px;
  line-height: 18px;
  vertical-align: middle;
  display: inline;
}
</style>
