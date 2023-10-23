<script>
export default {
  name: 'ui-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<template lang="">
  <div>
    <input 
    type="text" 
    :value="modelValue"
    @input="updateInput" 
    class='input'  
    placeholder="Antonette Bret Kamren">
  </div>
</template>

<style lang="scss" scoped>
  .input {
    box-sizing:border-box;
    padding: 16px 24px ;
    border: 1.5px solid rgb(233, 236, 239);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    color: rgb(118, 120, 125);
    width: 220px;
    max-width: 100%;
    @media (min-width: 768px) {
      width: 240px;
    }
  }
</style>