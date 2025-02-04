import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero.vue'
import Comparar from './components/Comparar.vue'
import Eliminar from './components/Eliminar.vue'
import Añadir from './components/Añadir.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/comparar', component: Comparar },
  { path: '/eliminar', component: Eliminar },
  { path: '/añadir', component: Añadir }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router