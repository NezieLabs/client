<script setup>
import useScroll from "@/hooks/useScroll.js";
import { ArrowRightCircleIcon } from "@heroicons/vue/24/solid";

const isScrolled = useScroll(0);

let links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Showcase",
    route: "/showcase",
  },
  {
    name: "Process",
    route: "/Process",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
</script>

<template>
  <div class="relative">
    <nav :class="{ 'blurred-nav': isScrolled, nav: !isScrolled }">
      <div class="wrapper">
        <ul>
          <li class="text-xl">Nezie Studio</li>
          <li v-for="(link, index) in links" :key="index">
            <RouterLink
              class="text-md p-2 rounded hover:brightness-125 transition-opacity duration-300"
              :class="{
                'bg-secondary-500': $route.path === link.route,
                'opacity-50 hover:opacity-100': $route.path !== link.route,
              }"
              :to="link.route"
            >
              {{ link.name.charAt(0).toUpperCase() + link.name.slice(1) }}
            </RouterLink>
          </li>
        </ul>
        <button class="text-md text-secondary-500">
          Digital Products
          <ArrowRightCircleIcon class="h6 w-6 inline text-secondary-500" />
        </button>
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
    @apply py-4 text-sm font-medium w-full;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .wrapper {
      @apply container m-auto flex justify-between;

      ul {
        @apply flex items-center space-x-5;
      }
    }
  }

  .blurred-nav {
    @apply text-sm font-medium bg-secondary-900/10 backdrop-blur  w-full  border-b border-secondary-500;
  }
}
</style>
