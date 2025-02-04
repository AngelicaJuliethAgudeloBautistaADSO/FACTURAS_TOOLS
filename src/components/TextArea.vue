<template>
    <textarea
      class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[300px] md:w-[50%] md:p-[40px]"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: String
  });
  </script>
  
  <style scoped>
  /* Estilos aquí */
  </style>