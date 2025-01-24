<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})



const count = ref(0)

    const Listnumber1 = defineModel('Listnumber1')
    const Listnumber2 = defineModel('Listnumber2')
    const ListResult = defineModel('ListResult')
    console.log(Listnumber1);
    console.log(Listnumber2);
    console.log(ListResult);

function processInputComparar() {
  
}

</script>

<template>
  <div class="container">
    <h2 class="h2">Pasar Listado de Facturas Comparar Numeros</h2>
    <input class="InputR1"  placeholder="Pega la lista de los numeros...." v-model="Listnumber1">
    <input class="InputR2"  placeholder="Pega la lista de los numeros...." v-model="Listnumber2">
    <input class="InputR3" placeholder="Lista transformada...." v-model="ListResult">
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
