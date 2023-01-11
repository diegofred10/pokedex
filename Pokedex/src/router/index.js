import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from '../views/Pokedex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pokedex
    }
    
  ]
})

export default router
