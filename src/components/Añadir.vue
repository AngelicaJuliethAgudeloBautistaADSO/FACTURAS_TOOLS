<template>
    <div class="bg-body">
        <div class="h-[92.6vh] flex-col flex items-center gap-5 font-sans text-letras">
            <h2 class="mt-[60px] text-lg font-bold md:mt-[20px] md:text-2xl">Pasar Listado de Facturas Añade la Letra</h2>

            <TextArea name="Pega la lista de los numeros...." v-model="InputNumeros" 
            customClass="h-[50%] w-[85%] p-[20px] md:h-[28vh] md:w-[75%] md:p-[40px]"/>

            <TextArea name="Ingresa la letra que quieres agregar...." v-model="InputLetras" 
            @keydown.enter="processInputDispapeles" customClass="h-[50%] w-[85%] p-[20px] md:h-[9vh] md:w-[75%] md:p-[20px]"/>
            
            <div class="w-[75%] h-[9px]  flex justify-end content-center mb-[25px]">
                <Boton @click="Copiar()" label="Copiar"/>
            </div>

            <TextArea name="Lista transformada...." v-model="Result" 
            customClass="h-[50%] w-[80%] p-[20px] md:h-[27vh] md:w-[75%] md:p-[40px]" disabled/>

            <div class="w-full flex justify-center gap-[50px] mb-[25px] md:mb-[40px] md:h-[47px]" >
                <Boton @click="processInputLetras()" label="Añadir"/>
                <Boton @click="processInputDispapeles()" label="Dispapeles"/>
                <Boton @click="Limpiar()" label="Limpiar"/>
            </div>
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
        const letra = InputLetras.value.trim().replace(/\s+/g, '');
        const resultado = InputNumeros.value.replace(ExpresionRegular, (numero) => `${letra.toUpperCase()}${numero}`);
        Result.value = resultado;
    }
    function processInputDispapeles() {
        const ExpresionRegular = /\d+/g;
        const letra = InputLetras.value.trim().replace(/\s+/g, '');
        const resultado = InputNumeros.value.match(ExpresionRegular)?.map(numero => `'${letra.toUpperCase()}${numero}'`).join(', ');
        Result.value = resultado;
    }
    function Limpiar() {
        InputNumeros.value="";
        InputLetras.value="";
        Result.value="";
    }
    function Copiar() {
        navigator.clipboard.writeText(Result.value);
    }
</script>