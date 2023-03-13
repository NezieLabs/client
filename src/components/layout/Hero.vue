<script></script>

<template>
  <main class="hero-container">
    <div>
      <span>
        <h1>Welcome to your Innovative solutions</h1>
        <p>
          Providing Cutting-Edge and Innovative Solutions to Empower Your
          Business and Enhance Your Digital Presence in an Increasingly
          Connected World.
        </p>
        <!-- TODO: Needs to be abstracted into classes -->
        <button class="bg-secondary-500 hover:bg-secondary-400">
          Get in touch
        </button>
        <button class="text-secondary-500 font-bold hover:text-white mx-2">
          DEMO
        </button>
      </span>
    </div>
    <div>
      <!-- Placeholder image -->
      <img src="https://i.postimg.cc/Rh60YPT8/User-flow-pana.png" />
    </div>
  </main>
</template>

<style lang="scss">
// TODO: refactor styles

.hero-container {
  @apply flex justify-between container m-auto;
  height: 500px;

  div {
    @apply flex-col flex items-center justify-center;
    max-width: 50%;
    min-width: 50%;

    img {
      @apply max-w-md;
    }
  }

  div:first-child {
    h1 {
      @apply text-3xl py-6;
    }

    span {
      button {
        @apply p-3  my-5 rounded;
      }
    }
  }
}
</style>
