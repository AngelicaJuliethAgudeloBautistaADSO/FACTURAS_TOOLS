<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})

const count = ref(0)

</script>

<template>
  <div class="container">
    <h2 class="h2">Pasar Listado de Facturas Comparar Numeros</h2>
    <input class="InputR1" type="text" id="numero1" placeholder="Pega la lista de los numeros....">
    <input class="InputR2" type="text" id="numero2" placeholder="Pega la lista de los numeros....">
    <input class="InputR3" type="text" id="result" placeholder="Lista transformada....">
    <div class="button-container">
        <button onclick="processInputComparar()">Comparar</button>
        <button onclick="Limpiar()">Limpiar</button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
