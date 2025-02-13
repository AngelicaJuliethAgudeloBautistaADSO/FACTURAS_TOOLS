<template>
    <textarea
      :class="[' bg-input rounded-md ', customClass]"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="name"
    ></textarea>
  </template>
  
  <script setup>
    const props = defineProps({
    modelValue: String,
    customClass: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    }
    });
  </script>

  
<!-- @keydown.enter="$emit('enter')" -->