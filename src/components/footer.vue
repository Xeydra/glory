<script>
import { footerData } from "@/TEMP_DATA/temp_data.js";
import axios from "axios";
import { FOOTER_URL } from "@/config";

export default {
  data() {
    return {
      footerData,
      showScrollToTop: true,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    axios.get(FOOTER_URL).then((response) => {
      this.footerData = response.data.data.attributes;
    });

    console.log(this.$router);
    this.$router.afterEach(() => {
      this.showScrollToTop =
        document.body.scrollHeight > document.body.clientHeight;
      console.log(
        "footer",
        document.body.scrollHeight > document.body.clientHeight
      );
    });
  },
};
</script>

<template>
  <footer>
    <div class="imprint">
      <span>{{ footerData.copyright }}</span>
      <router-link :to="{ name: 'impressum' }">Impressum</router-link>
      <router-link :to="{ name: 'policy' }">Privacy Policy</router-link>
    </div>
    <div
      v-if="showScrollToTop"
      class="clickable pink-color"
      @click="scrollToTop()"
    >
      Scroll to top ↑
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  justify-content: space-between;
  height: var(--footer-height);
}
.imprint {
  flex: 1;
  display: flex;
  gap: 1rem;
  font-size: 15px;
  line-height: 18px;
}

.expandable {
  background-color: var(--pink);
}
</style>
