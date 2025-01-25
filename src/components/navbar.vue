<template >
    <nav class="nav_container bg-gray-500 h-[70px] flex justify-center items-center">
            <!-- botones -->
        <ul class="ul-nav list-none flex gap-[50px]">
                <!-- <li><a @click="$emit('click_eliminar')">Eliminar</a></li>
                <li><a @click="$emit('click_añadir')">Añadir</a></li>
                <li><a @click="$emit('click_comparar')">Comparar</a></li> -->

                <button @click="$emit('eliminar')">Eliminar</button>
                <button @click="$emit('click_añadir')">Añadir</button>
                <button @click="$emit('click_comparar')">Añadir</button>
            </ul>
        
    </nav>
</template>


<script setup >

</script>
