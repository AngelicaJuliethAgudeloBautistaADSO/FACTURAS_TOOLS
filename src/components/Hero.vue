<script setup>
import navbar from "./navbar.vue";
import Eliminar from './Eliminar.vue';

import { ref } from 'vue';

// Variable para controlar la visualización del componente
const mostrarEliminar = ref(false);

// Método para manejar el evento "eliminar"
function mostrar_eliminar() {
  mostrarEliminar.value = true;
}
</script>

<template>
  <div>
    <!-- Navbar con el evento "eliminar" -->
    <navbar @eliminar="mostrar_eliminar" />

    <!-- Mostrar el componente Eliminar condicionalmente -->
    <div v-if="mostrarEliminar">
      <Eliminar />
    </div>
  </div>
</template>
