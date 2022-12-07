<script>
import { BASE_URL } from "@/config";
import ArrowBack from "@/assets/svg/arrowBack.vue";
import ArrowForward from "@/assets/svg/arrowForward.vue";

export default {
  components: {
    ArrowBack,
    ArrowForward,
  },
  data() {
    return {
      baseUrl: BASE_URL,
    };
  },
  props: {
    pictures: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImgSize(image) {
      let size = { height: "680px", width: "490px" };
      if (image.size.includes("querformat")) {
        size.width = "770px";
      } else if (image.size.includes("manual") && image.width) {
        size.width = image.width + "px";
        size.height = image.height + "px";
      }

      return size;
    },
    sliderBtnClick(isLeft) {
      let scrollAmount = this.$refs.slider.scrollWidth / 3;
      let scrollLeft = this.$refs.slider.scrollLeft + scrollAmount;

      if (isLeft) {
        scrollLeft = this.$refs.slider.scrollLeft - scrollAmount;
      }

      this.$refs.slider.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <div class="slider-container">
    <div class="btn-cnt left">
      <div class="slider-btn" v-on:click="sliderBtnClick(true)">
        <ArrowBack />
      </div>
    </div>

    <div class="img-container" ref="slider">
      <div
        v-for="item of pictures"
        :key="item.id"
        class="picture-container postit"
      >
        <!-- <div class="pic img-disabled" /> -->
        <img
          :src="baseUrl + item.file.data.attributes.url"
          :style="{
            height: getImgSize(item).height,
            width: getImgSize(item).width,
          }"
        />
        <div class="caption">
          <span class="postit">
            {{ item.description }}
          </span>
        </div>
      </div>
    </div>

    <div class="btn-cnt right">
      <div class="slider-btn" v-on:click="sliderBtnClick(false)">
        <ArrowForward />
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-cnt {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}
.left {
  left: 8px;
}
.right {
  right: 8px;
}

.slider-btn {
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-btn:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.picture-container {
  flex-shrink: 0;
  /* display: inline; */
}

.slider-container {
  position: relative;
}

.img-container {
  display: flex;
  gap: 8px;
  z-index: 0;
  overflow: hidden;
}

.caption {
  margin-top: -9px;
}
</style>
