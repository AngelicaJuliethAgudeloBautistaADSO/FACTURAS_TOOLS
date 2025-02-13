<template>
    <div class="bg-body h-screen flex-col flex items-center gap-10 font-sans text-letras md:h-full">
        <h2 class="mt-[60px] text-lg font-bold md:mt-[20px] md:text-2xl">Pasar Listado de Facturas Añade la Letra</h2>

        <TextArea name="Pega la lista de los numeros...." v-model="InputNumeros" customClass="h-[50%] w-[80%] p-[20px] md:h-[27vh] md:w-[85%] md:p-[40px]"/>

        <TextArea name="Ingresa la letra que quieres agregar...." v-model="InputLetras" @keydown.enter="processInputDispapeles" customClass="h-[50%] w-[80%] p-[20px] md:h-[9vh] md:w-[85%] md:p-[10px]"/>
        
        <TextArea name="Lista transformada...." v-model="Result" customClass="h-[50%] w-[80%] p-[20px] md:h-[27vh] md:w-[85%] md:p-[40px]"/>

        <div class="w-full flex justify-center gap-[20px] mb-[10px] md:gap-[50px] md:mb-[22px] md:h-[47px] " >
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="processInputLetras()" label="Añadir"/>
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="processInputDispapeles()" label="Dispapeles"/>
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Limpiar()" label="Limpiar"/>
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Copiar()" label="Copiar"/>
        </div>
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
}
</script>