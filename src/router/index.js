import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '../views/Money.vue'
import Charts from '@/views/Charts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Money',
    component: Money
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
