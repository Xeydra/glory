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
    // console.log("widget", this.widget);
  },
  methods: {
    onToggle(toggle) {
      this.expanded = toggle;
    },
  },
};
</script>

<template>
  <div class="widget-container">
    <TextBlock
      :text_block="widget.short_text"
      :expandable_texts="widget.extended_texts"
      :details="widget.detail_list"
    ></TextBlock>
    <div>
      <Slider
        v-if="widget.media_img_slider?.length > 0"
        :pictures="widget.media_img_slider"
      />
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
