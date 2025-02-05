<template>
    <div class="bg-body h-screen flex-col flex items-center gap-10 font-sans text-letras md:h-full">
        <h2 class="mt-[60px] text-lg font-bold md:mt-[20px] md:text-2xl">Pasar Listado de Facturas Añade la Letra</h2>

        <textarea class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[250px] md:w-[50%] md:p-[40px]"
         placeholder="Pega la lista de los numeros...." v-model="InputNumeros"></textarea>

        <textarea class="h-[50px] w-[80%] p-[20px] bg-input rounded-md md:h-[80px] md:w-[50%] md:p-[20px]"
         placeholder="Ingresa la letra que quieres agregar...." v-model="InputLetras"></textarea>

        <textarea class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[250px] md:w-[50%] md:p-[40px]"
         placeholder="Lista transformada...." v-model="Result"></textarea>

        <div class="w-full flex justify-center gap-[50px] mb-[20px] md:mb-[43px] md:h-[47px] ">
            <button class="bg-button p-[10px] rounded-md md:w-xs" @click="processInputLetras()">Añadir</button>
            <button class="bg-button p-[10px] rounded-md md:w-xs" @click="processInputDispapeles()">Dispapeles</button>
            <button class="bg-button p-[10px] rounded-md md:w-xs" @click="Limpiar()">Limpiar</button>
        </div>
        <Boton>Añadir</Boton>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TextArea from "./TextArea.vue";
import Boton from "./Boton.vue";
const InputNumeros = ref('');
const InputLetras = ref('');
const Result = ref('');
function processInputLetras() {
    const ExpresionRegular = /\d+/g;
    const resultado = InputNumeros.value.replace(ExpresionRegular, (numero) => `${InputLetras.value.toUpperCase()}${numero}`);
    Result.value = resultado;
}
function processInputDispapeles() {
    const ExpresionRegular = /\d+/g;
    const resultado = InputNumeros.value.match(ExpresionRegular)?.map(numero => `'${InputLetras.value.toUpperCase()}${numero}'`).join(', ');
    Result.value = resultado;
}

function Limpiar() {
    InputNumeros.value="";
    InputLetras.value="";
    Result.value="";
}   0
</script>