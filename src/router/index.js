import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StreamPlace from '../views/StreamView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/stream',
    name: 'stream',
    component: StreamPlace
  },
]

const router = new VueRouter({
  routes
})

export default router
