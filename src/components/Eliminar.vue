<template>
    <div class="bg-gray-700 h-screen flex-col flex items-center gap-10">
        <h2>Pasar Listado de Facturas Elimina la Letra</h2>
        <input class="border-indigo-900" placeholder="Pega la lista de los numeros...." v-model="Listnumber">

        <input class="border-sky-500" type="text" id="result" placeholder="Lista transformada...." v-model="ListResult">  

        <div class="button-container">
            <button onclick="processInput()">Eliminar</button>
            <button onclick="Limpiar()">Limpiar</button>
        </div>
    </div>
</template>

<script setup>
    const Listnumber = defineModel('Listnumber')
    const ListResult = defineModel('ListResult')
    console.log(Listnumber);
    console.log(ListResult);
</script>