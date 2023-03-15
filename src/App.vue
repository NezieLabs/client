<script setup>
import Navigation from "./components/layout/Appbar.vue";
import { onMounted, onUnmounted } from "vue";

const onScroll = () => {
  if (window.scrollY > 500) {
    console.log("Yes");
  } else {
    console.log("no");
  }
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style scoped>
/* Use the primary and secondary color variables in your styles */
.primary-text {
  color: var(--primary-color);
}
.secondary-background {
  background-color: var(--secondary-color);
}
</style>
