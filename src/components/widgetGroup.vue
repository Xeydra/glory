<script>
import Slider from "@/composables/slider.vue";
import TextBlock from "@/composables/textBlock.vue";

export default {
  components: { Slider, TextBlock },
  props: {
    widget: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  mounted() {
    console.log("widget", this.widget);
  },
  methods: {
    onToggle(toggle) {
      this.expanded = toggle;
    },
  },
};
</script>

// TODO: method for expanding
<template>
  <div class="widget-container">
    <TextBlock
      :text_block="widget.short_text"
      :expandable="!!widget.extended_text"
      @toggle="onToggle"
    ></TextBlock>
    <TextBlock
      v-if="expanded && widget.extended_text"
      :text_block="widget.extended_text"
      :isSecond="true"
    ></TextBlock>
    <div
      v-for="(info, index) in widget.detail_list"
      :key="index"
      class="additional-infos info"
    >
      {{ info.detail }}
    </div>
    <div>
      <!-- TODO: Bilder Größen aus Daten, Expandable mit Subtitle -->
      <Slider v-if="widget.mediaType === 'slider'" :pictures="widget.media" />
    </div>
  </div>
</template>

<style scoped>
.widget-container {
  margin-bottom: 160px;
}
/*
.text-container {
    display: flex;
    margin-top: -16px;
    margin-bottom: -7px;
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
} */
</style>
