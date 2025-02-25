import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import Comparar from './components/Comparar.vue'
import Eliminar from './components/Eliminar.vue'
import Añadir from './components/Añadir.vue'
import Organizar from './components/Organizar.vue'


const routes = [
  { path: '/', component: Hero },
  { path: '/comparar', component: Comparar },
  { path: '/eliminar', component: Eliminar },
  { path: '/añadir', component: Añadir },
  { path: '/organizar', component: Organizar }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
})

export default router