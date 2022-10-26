<script>
import Slider from '@/composables/slider.vue';

export default {
  components: { Slider },
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
};
</script>

// TODO: method for expanding
<template>
  <div class="widget-container">
    <div class="text-container">
      <div class="text-header flex-3">
        <h2 class="title">
          {{ widget.title }}
        </h2>
      </div>
      <div class="text-body flex-5">
        <div>
          <h2 class="short-text">
            {{ widget.shortText }}
            <a
              v-if="widget.externalLink"
              :href="widget.externalLink"
              target="_blank"
              class="yellow-color link"
            >
              Read more ↗
            </a>
            <div
              v-if="widget.longText"
              class="pink-color link clickable"
              @click="expanded = !expanded"
            >
              Read {{ expanded ? 'less ↑' : 'more ↓' }}
            </div>
          </h2>
        </div>
        <div
          v-if="widget.longText && expanded"
          class="long-text"
        >
          <h2>
            {{ widget.longText }}
          </h2>
        </div>
        <div
          v-for="(info, index) in widget.additionalInfos"
          :key="index"
          class="additional-infos info"
        >
          {{ info }}
        </div>
      </div>
    </div>
    <div>
      <!-- TODO: Bilder Größen aus Daten, Expandable mit Subtitle -->
      <Slider
        v-if="widget.mediaType === 'slider'"
        :pictures="widget.media"
      />
    </div>
  </div>
</template>

<style scoped>
.widget-container {
    margin-bottom: 160px;
}

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
}
</style>
