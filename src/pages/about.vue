<script>
import { ABOUT_URL } from "@/config";
import axios from "axios";
import { getOneAboutURL } from "@/config";

export default {
  data() {
    return {
      aboutPage: null,
    };
  },
  mounted() {
    this.updateView();
  },
  watch: {
    $route() {
      console.log("routechange");
      this.updateView();
    },
  },
  methods: {
    updateView() {
      axios.get(getOneAboutURL(this.$route.meta.id)).then((response) => {
        this.aboutPage = response.data.data.attributes;
      });
    },
  },
};
</script>

<template>
  <div class="about-container">
    <div
      v-for="(item, index) in aboutPage?.items"
      :key="item.id"
      :class="['text-container', { first: index === 0 }]"
    >
      <div class="dates">
        <span>
          {{ item.from }}
        </span>
        <span v-if="item.to"> - {{ item.to }} </span>
      </div>
      <div class="text">
        <h2 class="">
          {{ item.description }}
          <a
            v-if="item.external_link"
            :href="item.external_link"
            target="_blank"
            class="yellow-color link-button"
          >
            Read more ↗
          </a>
        </h2>
        <div class="info">
          <span class="">
            {{ item.location }}
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="about-nav">
      <div
        v-for="item in aboutMenu"
        :key="item.title"
        class="side-nav-item"
        @click="handleNavClick(item)"
      >
        <span>
          {{ item.title }}
        </span>
      </div>
    </div> -->
    <!-- <template v-for="item in aboutMenu.items" :key="item.time_start">
      <div class="content">
        <div class="time h1">
          {{ item.time_start }}
          <span v-if="item.time_end"> - {{ item.time_end }}</span>
        </div>
        <div class="item-content h1">
          {{ item.text }}
          <div v-if="item.extra" class="extra caption">
            {{ item.extra }}
          </div>
        </div>
      </div>
    </template> -->
  </div>
</template>

<style scoped>
.about-container {
  width: 100%;
  /* display: grid; */
  /* grid-template-columns: 3fr 3fr 2fr; */
  /* grid-auto-flow: row; */
}

.about-nav {
  grid-column-start: 3;
  grid-row-start: 1;
}

.text-container.first {
  margin-top: 140px;
}
.text-container {
  margin-top: 41px;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
}

.about-nav .side-nav-item {
  margin-bottom: 7px;
  cursor: pointer;
}
.content {
  display: flex;
  margin-top: 41px;
}

.time {
  flex: 3;
}

.item-content {
  flex: 3;
}

.extra {
  margin-top: 6px;
}
</style>
