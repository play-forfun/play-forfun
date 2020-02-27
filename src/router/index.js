import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/find'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
   path:'/find',
   component:Find
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
