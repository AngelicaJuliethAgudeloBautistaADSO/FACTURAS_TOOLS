
       
<script setup>
import eliminar from './Eliminar.vue'
import navbar from './navbar.vue'
import { ref } from 'vue' 

var showEliminar =  true
function mostrar_eliminar(){
    console.log(showEliminar)
    showEliminar = false
}
</script>
<template>
   <div>
       <navbar @eliminar="mostrar_eliminar"/>
       <eliminar v-if="showEliminar == true"></eliminar>
   </div>
</template>


