<script setup>
import MainNav from '@/components/mainNav.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <header>
    <MainNav />
  </header>
  <router-view />
  <Footer />
</template>
