<script setup>
import { ref } from 'vue';

// Variable para controlar la visualización del componente
const MostrarEliminar = ref(true);
const MostrarAñadir = ref(false);
const MostrarComparar = ref(false);
const MostrarOrganizar = ref(false);


// Método para manejar el evento 
function ShowModal(modal) {
    MostrarEliminar.value = modal=='eliminar'?true:false;
    MostrarAñadir.value = modal=='añadir'?true:false;
    MostrarComparar.value = modal=='comparar'?true:false;
    MostrarOrganizar.value = modal=='organizar'?true:false;
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>