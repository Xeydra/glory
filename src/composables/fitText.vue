<template>
  <span>
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    targetLineCount: {
      default: 1,
      type: Number,
    },
    unit: {
      default: 'vw',
      type: String,
    },
    min: {
      default: 1,
      type: Number,
    },
    max: {
      default: 40,
      type: Number,
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    // TODO: issue: font has to be loaded before calc starts
    setTimeout(this.calculate, 50);
  },
  methods: {
    calculate() {
      const element = this.$el;

      // keep trying until it fits
      let fontSize = this.max;
      const stepSize = (this.unit === 'px') ? 1 : 0.05;
      element.style.fontSize = fontSize + this.unit;

      while (element.getClientRects().length > this.targetLineCount && fontSize > this.min) {
        fontSize -= stepSize;
        element.style.fontSize = fontSize + this.unit;
      }

      // for a bit of extra space
      element.style.fontSize = (fontSize - 2 * stepSize) + this.unit;
    },
  },
};
</script>
