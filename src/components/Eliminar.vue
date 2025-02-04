<template>
    <div class="bg-body h-screen flex-col flex items-center gap-10 font-sans text-letras md:h-full">
        <h2 class="mt-[60px] text-lg font-bold md:mt-[20px] md:text-2xl">Pasar Listado de Facturas Elimina la Letra</h2>
<!-- 
        <textarea class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[300px] md:w-[50%] md:p-[40px]"
         placeholder="Pega la lista de los numeros...." v-model="InputNumeros"></textarea>

        <textarea class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[300px] md:w-[50%] md:p-[40px]"
         placeholder="Lista transforma  da...." v-model="Result"></textarea>  

        <div class="w-full flex justify-center gap-[50px] mb-[20px] md:mb-[63px] md:h-[47px] " >
            <button class="bg-button p-[10px] rounded-md md:w-xs" @click="processInput()">Eliminar</button>
            <button class="bg-button p-[10px] rounded-md md:w-xs" @click="Limpiar()">Limpiar</button>
        </div> -->

        <TextArea class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[300px] md:w-[50%] md:p-[40px]"
        placeholder="Pega la lista de los numeros...." v-model="InputNumeros"></TextArea>

        <TextArea class="h-[200px] w-[80%] p-[20px] bg-input rounded-md md:h-[300px] md:w-[50%] md:p-[40px]"
         placeholder="Lista transforma  da...." v-model="Result"></TextArea>

        <Boton @click="processInput()">Eliminar</Boton>

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