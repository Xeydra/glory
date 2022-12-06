<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    text_block: {
      type: Object,
      required: true,
    },
    expandable: {
      type: Boolean,
      default: false,
    },
    isSecond: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggle"],
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
      this.$emit("toggle", this.expanded);
    },
  },
};
</script>

<template>
  <div
    class="text-container"
    :class="['text-container', { expanded: isSecond }]"
  >
    <div class="text-header flex-3">
      <h2 class="title">
        {{ text_block.title }}
      </h2>
    </div>
    <div class="text-body flex-5">
      <h2 class="short-text">
        {{ text_block.description }}
        <a
          v-if="text_block.external_link"
          :href="text_block.external_link"
          target="_blank"
          class="yellow-color link"
        >
          Read more ↗
        </a>
        <div
          v-if="expandable"
          class="pink-color link clickable"
          @click="toggleExpand"
        >
          Read {{ expanded ? "less ↑" : "more ↓" }}
        </div>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  margin-top: -16px;
  margin-bottom: -7px;
}

.expanded {
  margin-top: 44px;
}

.text-header {
  padding-bottom: 6px;
}

.text-body {
  z-index: 1;
}

.link {
  font-size: 15px;
  line-height: 18px;
  vertical-align: middle;
  display: inline;
}

.long-text {
  margin-top: 41px;
}
</style>
