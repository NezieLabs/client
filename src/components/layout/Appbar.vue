<script setup>
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
  <nav class="nav">
    <div class="wrapper">
      <a href="#">Nezie Studio</a>
      <ul class="list">
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
</template>

<style scoped>
.nav {
  @apply py-4 px-6 text-sm font-medium bg-primary;
}

.wrapper {
  @apply container m-auto flex justify-between;
}

.list {
  @apply flex space-x-5;
}
</style>
