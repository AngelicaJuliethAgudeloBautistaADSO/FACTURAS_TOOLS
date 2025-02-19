<template>
    <nav class="nav_container bg-navbar h-[70px] flex justify-center items-center font-sans font-semibold">
            <!-- botones -->
        <ul class="ul-nav list-none flex gap-[50px] text-letras md:gap-[20vh] md:text-lg">
            <router-link to="/organizar" class="transition transform active:scale-90">Organizar</router-link>
            <router-link to="/eliminar" class="transition transform active:scale-90">Eliminar</router-link>
            <router-link to="/añadir" class="transition transform active:scale-90">Añadir</router-link>
            <router-link to="/comparar" class="transition transform active:scale-90">Comparar</router-link>
        </ul>
    </nav>
</template>


<script setup >

</script>