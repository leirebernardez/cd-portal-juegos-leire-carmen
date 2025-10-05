import { createRouter, createWebHistory } from 'vue-router'
import GameList from '../components/GameList.vue'
import Hangman from '../components/Hangman.vue'

const routes = [
  { path: '/', name: 'Home', component: GameList },
  { path: '/hangman', name: 'Hangman', component: Hangman }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router