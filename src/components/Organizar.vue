<template>
    <div class="bg-body">
        <div class=" h-screen flex-col flex items-center gap-8 font-sans text-letras md:h-full min-h-screen">
            <h2 class="mt-[60px] text-lg font-bold md:mt-[22px] md:text-2xl">Pasar Listado de Facturas Organizar</h2>

            <TextArea name="Pega la lista de los numeros...." v-model="InputNumeros" 
            @keydown.enter="processInputOrganizar" customClass="h-[40%] w-[80%] p-[20px] md:h-[33vh] md:w-[75%] md:p-[40px]"/>

            <div class="w-[75%] h-[10px] flex justify-end content-center mb-[13px]">
                <Boton @click="Copiar()" label="Copiar"/>
            </div>

            <TextArea name="Lista transforma  da...." v-model="Result" 
            customClass="h-[33%] w-[80%] p-[20px] md:h-[29vh] md:w-[75%] md:p-[40px]" disabled/>

            <div class="w-full flex justify-center gap-[50px] mb-[25px] md:mb-[40px] md:h-[47px]" >
                <Boton  @click="processInputOrganizar()" label="Organizar"/>
                <Boton  @click="Limpiar()" label="Limpiar"/>
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

    function processInputOrganizar() {
    Result.value = InputNumeros.value
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => `'${line}'`)
        .join(', ');
    }

    function Limpiar(){
        InputNumeros.value="";
        Result.value="";
    }

    function Copiar() {
        navigator.clipboard.writeText(Result.value);
    }
</script>