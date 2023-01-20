<script>
import MainNav from "@/components/mainNav.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    MainNav,
    Footer,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    onNavOpen(value) {
      this.isNavOpen = value;
    },
  },
};
</script>

<template>
  <MainNav @navOpen="onNavOpen" />
  <div :class="['main-content', { navOpen: isNavOpen }]">
    <router-view />
  </div>
  <Footer />
</template>

<style>
.navOpen .postit {
  background-color: var(--yellow);
  color: var(--yellow);
}

.navOpen .postit img {
  opacity: 0;
}

.main-content {
  flex: 1;
  display: flex;
  position: relative;
}
</style>
