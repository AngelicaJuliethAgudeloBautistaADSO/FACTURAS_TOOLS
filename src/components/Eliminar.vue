<template>
    <div class="bg-body h-screen flex-col flex items-center gap-10 font-sans text-letras md:h-full">

        <h2 class="mt-[60px] text-lg font-bold md:mt-[20px] md:text-2xl">Pasar Listado de Facturas Elimina la Letra</h2>

        <TextArea name="Pega la lista de los numeros...." v-model="InputNumeros" customClass="h-[50%] w-[80%] p-[20px] md:h-[33vh] md:w-[85%] md:p-[40px]"/>

        <TextArea name="Lista transforma  da...." v-model="Result" customClass="h-[50%] w-[80%] p-[20px] md:h-[33vh] md:w-[85%] md:p-[40px]"/>

        <div class="w-full flex justify-center gap-[50px] mb-[20px] md:mb-[34px] md:h-[47px] " >
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="processInput()" label="Eliminar"/>
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Limpiar()" label="Limpiar"/>
        </div>

    </div>
</template>

<script setup>
    import Boton from './Boton.vue';
    import TextArea from './TextArea.vue';
    import { ref } from 'vue';
    const InputNumeros = ref('');
    const Result = ref('');

    function processInput() {
        console.log(InputNumeros.value);
        const ExpresionRegular = /\d+/g;
        const numeros = InputNumeros.value.match(ExpresionRegular);
        Result.value = numeros ? `'${numeros.join("',    '")}'` : '';
        console.log(Result.value);
        
    }
    function Limpiar(){
        InputNumeros.value="";
        Result.value="";
    }

</script>