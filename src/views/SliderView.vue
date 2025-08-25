<template>
  <div class="about">
    <h1>Slider</h1>
    <div>
      <label for="slider">Select a value:</label>
      <input
        id="slider"
        type="range"
        min="0"
        max="100"
        v-model="sliderValue"
      />
      <span>{{ sliderValue }}</span>
    </div>
    <div>
      <strong>Final value:</strong>
      <span>{{ weirdValue }}</span>
      
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sliderValue = ref(50)
const weirdValue = computed(() => ((sliderValue.value * 2) / 3).toFixed(2))
</script>

<style>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
