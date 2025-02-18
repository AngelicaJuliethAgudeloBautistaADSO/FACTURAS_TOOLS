<template>
    <div class="bg-body">
        <div class="h-screen flex-col flex items-center gap-8 font-sans text-letras md:h-full min-h-screen">

            <h2 class="mt-[60px] text-lg font-bold md:mt-[22px] md:text-2xl">Pasar Listado de Facturas Elimina la Letra</h2>

            <TextArea name="Pega la lista de los numeros...." v-model="InputNumeros" 
            @keydown.enter="processInput" customClass="h-[40%] w-[80%] p-[20px] md:h-[33vh] md:w-[75%] md:p-[40px]"/>
        
            <div class="w-[75%] h-[10px] flex justify-end content-center mb-[13px]">
                <Boton @click="Copiar()" label="Copiar"/>
            </div>

            <TextArea name="Lista transformada...." v-model="Result"
            disabled customClass="h-[33%] w-[80%] p-[20px] md:h-[29vh] md:w-[75%] md:p-[40px]"/>

            <div class="w-full flex justify-center gap-[50px] mb-[25px] md:mb-[40px] md:h-[47px]" >
                <Boton @click="processInput()" label="Eliminar"/>
                <Boton @click="Limpiar()" label="Limpiar"/>
            </div>

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
        Result.value = numeros ? `'${numeros.join("', '")}'` : '';
        console.log(Result.value);
        
    }
    function Limpiar(){
        InputNumeros.value="";
        Result.value="";
    }
    function Copiar() {
        navigator.clipboard.writeText(Result.value);
    }
    
</script>
