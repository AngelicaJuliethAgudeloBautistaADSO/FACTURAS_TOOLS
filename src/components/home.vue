<script setup>
import Comparar from './components/Comparar.vue'
import navbar from './components/navbar.vue'
import Eliminar from './components/Eliminar.vue'
import Añadir from './components/Añadir.vue'
</script>

<template>
    <navbar>
        <navbar @click_eliminar="callback" @click_añador="callback" @click_comparar="callback"/>
    </navbar>
</template>
<script>
    
</script>