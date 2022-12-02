<script>
import MainNav from '@/components/mainNav.vue';
// import Footer from '@/components/footer.vue';

export default {
  components: {
    MainNav,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    onSelected (value) {
      this.isNavOpen = value;
      console.log('isNavOpen', this.isNavOpen)
    }
  },
};
</script>

<template>
  <header>
    <MainNav @selected="onSelected"/>
    <div>{{ isNavOpen }}</div>
  </header>
  <div :class="['main-content', { 'navOpen': isNavOpen }]">
    <router-view />
  </div>
  <!-- <Footer /> -->
</template>

<style>
.isNavOpen .postit {

}
</style>
