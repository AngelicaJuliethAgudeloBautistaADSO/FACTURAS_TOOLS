<template>
    <div class="bg-body h-screen flex-col flex items-center gap-10 font-sans">
        <h2 class="mt-[60px] text-lg font-bold text-letras">Pasar Listado de Facturas Elimina la Letra</h2>
        <input class="h-[200px] w-[80%] bg-input rounded-md " placeholder="Pega la lista de los numeros...." v-model="Listnumber">

        <input class="h-[200px] w-[80%] bg-input  rounded-md" type="text" id="result" placeholder="Lista transformada...." v-model="ListResult">  

        <div class="w-full flex justify-center gap-[50px]  mb-[20px]">
            <button class="bg-button p-[10px] rounded-md text-letras" onclick="processInput()">Eliminar</button>
            <button class="bg-button p-[10px] rounded-md text-letras" onclick="Limpiar()">Limpiar</button>
        </div>
    </div>
</template>

<script setup>
    const Listnumber = defineModel('Listnumber')
    const ListResult = defineModel('ListResult')
    console.log(Listnumber);
    console.log(ListResult);

    function processInput() {
        
    }
</script>