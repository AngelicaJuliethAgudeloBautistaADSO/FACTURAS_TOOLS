<template>
    <div class="bg-body h-screen flex-col flex items-center gap-10 font-sans text-letras md:h-full">
        <h2 class="mt-[60px] text-lg font-bold md:mt-[20px] md:text-2xl">Pasar Listado de Facturas Organizar</h2>

        <TextArea name="Pega la lista de los numeros...." v-model="InputNumeros" customClass="h-[50%] w-[80%] p-[20px] md:h-[33vh] md:w-[85%] md:p-[40px]"/>

        <TextArea name="Lista transforma  da...." v-model="Result" customClass="h-[50%] w-[80%] p-[20px] md:h-[33vh] md:w-[85%] md:p-[40px]"/>

        <div class="w-full flex justify-center gap-[50px] mb-[20px] md:mb-[34px] md:h-[47px] " >
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="processInputOrganizar()" label="Organizar"/>
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Limpiar()" label="Limpiar"/>
            <Boton class="bg-button p-[10px] rounded-md md:w-xs" @click="Copiar()" label="Copiar"/>
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
        .join(' , ');
}

    function Limpiar(){
        InputNumeros.value="";
        Result.value="";
    }
</script>