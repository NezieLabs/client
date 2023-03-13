<script setup>
import useScroll from "@/hooks/useScroll.js";

const isScrolled = useScroll(0);

let links = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "about",
    route: "/about",
  },
  {
    name: "contact",
    route: "/contact",
  },
];
</script>

<template>
  <div class="relative">
    <nav :class="{ 'blurred-nav': isScrolled, nav: !isScrolled }">
      <div class="wrapper">
        <a href="#">Nezie Studio</a>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <RouterLink :to="link.route">
              {{
                link.name.charAt(0).toUpperCase() + link.name.slice(1)
              }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.relative {
  position: relative;
  padding-top: 80px;

  .blurred-nav,
  .nav {
    @apply py-6 px-6 text-sm font-medium w-full;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .wrapper {
      @apply container m-auto flex justify-between;

      ul {
        @apply flex space-x-5;
      }
    }
  }

  .blurred-nav {
    @apply py-6 px-6 text-sm font-medium bg-secondary-900/20 backdrop-blur  w-full  border-b-2 border-secondary-500;
  }
}
</style>
