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
      type: Object,
      required: true,
    },
    expandable_texts: {
      type: Array,
    },
    details: {
      type: Array,
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
    },
  },
};
</script>

<template>
  <div
    v-for="(block, index) in texts"
    :key="block.id"
    :class="['text-container', { first: index === 0 }]"
  >
    <div class="text-header flex-3">
      <h2 class="title postit">
        {{ block.title }}
      </h2>
    </div>
    <div class="text-body flex-5">
      <h2 class="postit">
        {{ block.description }}
        <a
          v-if="block.external_link && index === 0"
          :href="block.external_link"
          target="_blank"
          class="yellow-color link-button postit"
        >
          Read more ↗
        </a>
        <div
          v-if="expandable_texts.length > 0 && index === 0"
          class="pink-color link-button clickable postit"
          @click="toggleExpand"
        >
          Read {{ expanded ? "less ↑" : "more ↓" }}
        </div>
      </h2>
      <template v-if="index === texts.length - 1">
        <div v-for="(info, index) in details" :key="index" class="info">
          <span class="postit">
            {{ info.detail }}
          </span>
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
</style>
