<template >
    <nav class="nav_container bg-navbar h-[70px] flex justify-center items-center font-sans font-semibold">
            <!-- botones -->
        <ul class="ul-nav list-none flex gap-[50px] text-letras md:gap-[400px] md:text-lg">
            <button @click="$emit('eliminar')">Eliminar</button>
            <button @click="$emit('click_añadir')">Añadir</button>
            <button @click="$emit('click_comparar')">Comparar</button>
        </ul>
    </nav>
</template>


<script setup >

</script>
  