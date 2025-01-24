<template>
    <div class="bg-gray-700 h-screen flex-col flex items-center gap-10">
        <h2>Pasar Listado de Facturas Añade la Letra</h2>
        <input class="border-indigo-900" placeholder="Pega la lista de los numeros...." v-model="Listnumber">

        <input class="border-indigo-900" placeholder="Ingresa la letra que quieres agregar...." v-model="ListLetras">

        <input class="border-indigo-900" placeholder="Lista transformada...." v-model="ListResult">  

        <div class="button-container">
            <button onclick="processInputLetras()">Añadir</button>
            <button onclick="Limpiar()">Limpiar</button>
        </div>
    </div>
</template>

<script setup>
    const Listnumber = defineModel('Listnumber')
    const ListLetras = defineModel('ListLetras')
    const ListResult = defineModel('ListResult')

    function processInputLetras() {
        
    }
</script>