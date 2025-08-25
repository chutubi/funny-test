<template>
  <div class="about">
    <h1>Slider</h1>
    <div>
      <label for="slider">Select a value:</label>
      <input id="slider" type="range" min="0" max="100" v-model="sliderValue" />
      <span>{{ sliderValue }}</span>
    </div>
    <div>
      <strong>Final value:</strong>
      <span>{{ weirdValue }}</span>
    </div>
  </div>
</template>

<script setup>
import { useValStore } from '@/stores/valStore'
import { storeToRefs } from 'pinia'

const weirdStore = useValStore()
const { sliderValue, weirdValue } = storeToRefs(weirdStore)
</script>
