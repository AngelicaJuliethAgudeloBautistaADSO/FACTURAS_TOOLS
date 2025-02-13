<template>
  <div class="grid grid-cols-2 justify-items-center p-9 h-[92.6vh] bg-body text-letras ">

    <h2 class="col-span-2 mt-5 text-lg font-bold md:mt-2 md:text-2xl">Pasar Listado de Facturas Comparar Números</h2>

    <TextArea class="col-span-1 w-[80%] h-[33vh] md:mt-[25px] p-[40px]" placeholder="Pega la lista de los números..." v-model="InputNumero1" @keydown.enter="processInputComparar"/>

    <TextArea class="col-span-1 w-[80%] h-[33vh] md:mt-[25px] p-[40px]" placeholder="Pega la lista de los números..." v-model="InputNumero2" @keydown.enter="processInputComparar"/>

    <TextArea class="col-span-2 w-[90%] h-[33vh] md:mt-[25px] p-[40px]" placeholder="Lista transformada..." v-model="Result"/>

    <div class="col-span-2  w-full flex justify-center gap-[20px] mb-[10px] md:gap-[50px] md:mt-[25px] md:h-[47px] ">
      <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="processInputComparar()" label="Comparar"/>
      <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Limpiar()" label="Limpiar"/>
      <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Copiar()" label="Copiar"/>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import TextArea from "./TextArea.vue";
  import Boton from "./Boton.vue";
  
  const InputNumero1 = ref('');
  const InputNumero2 = ref('');
  const Result = ref('');

  function processInputComparar(){
    //.split convierte la cadena en un array y los separa por , 
    let Input1= InputNumero1.value.split(',').map(num => num.trim());
    let Input2= InputNumero2.value.split(',').map(num => num.trim());

    console.log(Input1);
    console.log(Input2);

    let compara= Input1.filter(num => !Input2.includes(num)).concat(Input2.filter(num => !Input1.includes(num)));
    
    Result.value = compara.length > 0 ? compara.join(', '): "";
}

function Limpiar(){
    InputNumero1.value="";
    InputNumero2.value="";
    Result.value="";
}
</script>