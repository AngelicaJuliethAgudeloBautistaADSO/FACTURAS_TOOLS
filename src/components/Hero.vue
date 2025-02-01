<script setup>
import navbar from "./navbar.vue";
import Eliminar from './Eliminar.vue';
import Añadir from "./Añadir.vue";
import comparar from "./Comparar.vue";

import { ref } from 'vue';

// Variable para controlar la visualización del componente
const MostrarEliminar = ref(true);
const MostrarAñadir = ref(false);
const MostrarComparar = ref(false);

// Método para manejar el evento 
function ShowModal(modal) {
    MostrarEliminar.value = modal=='eliminar'?true:false;
    MostrarAñadir.value = modal=='añadir'?true:false;
    MostrarComparar.value = modal=='comparar'?true:false;
}
</script>

<template>
  <div>
    <navbar @navegacion="ShowModal"/>
    <div v-show="MostrarEliminar">
      <Eliminar />
    </div>
    <div v-show="MostrarAñadir">
        <Añadir/>
    </div>
    <div v-show="MostrarComparar">
        <comparar/>
    </div>
  </div>
</template>
