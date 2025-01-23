<template>
    <div class="container">
        <h2>Pasar Listado de Facturas Añade la Letra</h2>
        <input class="InputR" type="text" id="numeros" placeholder="Pega la lista de los numeros....">

        <input class="InputLetras" type="text" id="letras" placeholder="Ingresa la letra que quieres agregar....">

        <input class="InputR" type="text" id="result" placeholder="Lista transformada....">  

        <div class="button-container">
            <button onclick="processInputLetras()">Añadir</button>
            <button onclick="Limpiar()">Limpiar</button>
        </div>
    </div>
</template>