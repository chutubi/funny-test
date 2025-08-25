<template>
  <div class="about">
    <h1>Annoying Checkboxes</h1>
    <div class="checkbox-container">
      <div v-for="(option, index) in options" :key="index" class="checkbox-item">
        <input
          type="checkbox"
          :id="'checkbox-' + index"
          v-model="option.checked"
          @change="handleCheck(index)"
        />
        <label :for="'checkbox-' + index">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxView',
  data() {
    return {
      options: [
        { label: 'Choose me!', checked: false }
      ]
    }
  },
  methods: {
    handleCheck(index) {
      if (this.options[index].checked) {
        this.options.push({
          label: `No, choose me instead! (Option ${this.options.length + 1})`,
          checked: false
        })
      }
    }
  }
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkbox-container {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
</style>