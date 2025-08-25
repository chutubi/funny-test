import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useValStore = defineStore('val', () => {
  const sliderValue = ref(50)
  const weirdValue = computed(() => ((sliderValue.value * 2) / 3).toFixed(2))
  return { sliderValue, weirdValue }
})