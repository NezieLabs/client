import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll(threshold = 0) {
  const isScrolled = ref(false);

  function handleScroll() {
    isScrolled.value = window.scrollY > threshold;
  }

  onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return isScrolled;
}
