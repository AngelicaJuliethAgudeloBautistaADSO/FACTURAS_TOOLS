<template>
  <div class="">

    <h2 class="col-span-2 mt-5 text-lg font-bold md:mt-2 md:text-2xl">Pasar Listado de Facturas Comparar Números</h2>

    <textarea class="bg-input " 
    placeholder="Pega la lista de los números..." v-model="InputNumero1"></textarea>

    <textarea class="bg-input" 
    placeholder="Pega la lista de los números..." v-model="InputNumero2"></textarea>

    <textarea class="bg-input" 
    placeholder="Lista transformada..." v-model="Result"></textarea>

    <div class="col-span-2 flex justify-center gap-4 h-[50px]">
      <button class="bg-button text-letras" @click="processInputComparar()">Comparar</button>
      <button class="bg-button text-letras" @click="Limpiar()">Limpiar</button>
    </div>
  </div>
</template>
<script setup>

</script>