<script setup>
import Comparar from './components/Comparar.vue'
import navbar from './components/navbar.vue'
import Eliminar from './components/Eliminar.vue'
import Añadir from './components/Añadir.vue'
</script>

<template>
    <navbar>
        <Añadir></Añadir>
        <Comparar></Comparar>
        <Eliminar></Eliminar>
        
    </navbar>
</template>