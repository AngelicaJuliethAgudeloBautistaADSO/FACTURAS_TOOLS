<template>
    <button class="bg-button p-[10px] rounded-md md:w-xs w-[15vh]
      gap-[50px] mb-[5px] md:mb-[5px] md:h-[5vh] hover:bg-amber-400 active:bg-amber-600
      active:h-7/6 active:w-100 transition transform active:scale-90" v-bind="$attrs">
      {{ label }}
    </button>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  }
});
</script>
<style scoped>
 
</style>