<template>

<navbar @click_eliminar="callback" @click_añador="callback" @click_comparar="callback"  />
<Eliminar></Eliminar>

</template>


<script setup>
import navbar from './components/navbar.vue'
import Comparar from './components/Comparar.vue'
import Eliminar from './components/Eliminar.vue'
import Añadir from './components/Añadir.vue'

let nav = false


</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
