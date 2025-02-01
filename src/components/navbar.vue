<template >
    <nav class="nav_container bg-navbar h-[70px] flex justify-center items-center font-sans font-semibold">
            <!-- botones -->
        <ul class="ul-nav list-none flex gap-[50px] text-letras md:gap-[300px] md:text-lg">
            <button @click="$emit('navegacion','eliminar')">Eliminar</button>
            <button @click="$emit('navegacion','añadir')">Añadir</button>
            <button @click="$emit('navegacion','comparar')">Comparar</button>
        </ul>
    </nav>
</template>


<script setup >

</script>
  